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

  let final : {[province: string]: DataPoint} = {};

  results1.forEach((item, index) => {
    const itemLastWeek = results2[index]
    const averageDeathLastWeek = (!item.Deaths || Number(item.Deaths) === 0) ? 0 :(Number(item.Deaths) -
     Number(itemLastWeek.Deaths)) / 7

    const population = calcPopulationInMillion(Number(item.Confirmed),
    Number(item.Incident_Rate));
    
    const keyName = item.Admin2 ? `${item.Country_Region} - ${item.Province_State} - ${item.Admin2}` 
    : item.Province_State ? `${item.Country_Region} - ${item.Province_State}` : item.Country_Region

    if (item.Deaths === '0' || item.Confirmed === '0') return;

    if (keyName.includes('unknown') || keyName.includes('Unassigned')) return;

    final = {...final, [keyName] : {
      allDeathPerMillion: Number(item.Deaths) / population,
      lastWeekAverageDeathPerMillionEachDay: averageDeathLastWeek / population,
      updatedAt: item.Last_Update,
    }}
  })

  let newData : CovidData = {}
  
  Object.keys(RegionCovidData).forEach((key) => {
    const regionData = RegionCovidData[key];
    let newObj : RegionData;
    if (final[key])
      newObj = {...regionData, dataPoints: [...regionData.dataPoints, final[key]]}
    else newObj = regionData
    newData = {...newData, [key]: newObj};
  })
  let newFinal : CovidData = {}

  Object.keys(final).forEach((key) => {
    if (newData[key]) return 
    const newObj : RegionData = {medianAge: 35, dataPoints: [final[key]]}
    newFinal = {...newFinal, [key]: newObj}
  })

  console.log(JSON.stringify({...newData, ...newFinal}));

};

updateData("12-20-2020", "12-13-2020");
