import csv from "csv-parser";
import fs from "fs";
import { CovidData, DataPoint, RegionCovidData, RegionData } from "../data";

interface JHUData {
  FIPS: string;
  Admin2: string;
  Province_State: string;
  Country_Region: string;
  Last_Update: string;
  Lat: string;
  Long_: string;
  Confirmed: string;
  Deaths: string;
  Recovered: string;
  Active: string;
  Combined_Key: string;
  Incident_Rate: string;
  Case_Fatality_Ratio: string;
}


const getIndividualData = (arr: JHUData[], name: string) => arr
.find((item) => item.Country_Region === name || item.Province_State === name) as JHUData

const readData = (path: string) : Promise<JHUData[]> => new Promise((res, rej) => {
  const results: JHUData[] = [];
  fs.createReadStream(path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on('end', () => {res(results)})
})

const calcPopulationInMillion = (allCases: number, incideneRate: number) => {
  return (allCases / (incideneRate / 100000)) / 1000000
}

export const updateData = async (time: string, weekAgo: string) => {

  const results1 = await readData("./src/logic/data/covid-JHU-data/" + time + ".csv")
  const results2 = await readData("./src/logic/data/covid-JHU-data/" + weekAgo + ".csv")

    // average deaths last week

  let final : {[province: string]: DataPoint} = {};

  results1.forEach((item, index) => {
    const itemLastWeek = results2[index]
    const adlw = (Number(item.Deaths) -
     Number(itemLastWeek.Deaths)) / 7
    final = {...final, [item.Province_State || item.Country_Region] : {
      lastWeekAverageDeathPerMillionEachDay: adlw / calcPopulationInMillion(Number(item.Confirmed),
      Number(item.Incident_Rate)),
      updatedAt: item.Last_Update,
      allDeathPerMillion: Number(item.Deaths) / calcPopulationInMillion(Number(item.Confirmed),
      Number(item.Incident_Rate))
    }}
  })

  let newData : CovidData = {}
  
  Object.keys(RegionCovidData).map((key) => {
    const regioData = RegionCovidData[key];
    const newObj : RegionData = {...regioData, dataPoints: [...regioData.dataPoints, final[key]]}
    newData = {...newData, newObj};
  })
  console.log(JSON.stringify({...RegionCovidData, ...newData}));

  // console.log(adlw);
};

updateData("12-20-2020", "12-13-2020");
