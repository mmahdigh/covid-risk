import { AsymptomaticChance, CDCIfr, CovidIncubation, CovidInfectiousPeriod, USMedianAge } from "./constants";
import { RegionCovidData, getProvinceData, CovidData, RegionData } from './data';

const contractionChance = (size: number,
   deathPerMillionEachDay: number, allDeathPerMillion: number, medianAge: number) => {
  
  const ifr = calculateIFR(medianAge);
  const immunePopulation = allDeathPerMillion / ifr / 1000000;
  const vulnerableSize = Math.ceil((1 - immunePopulation) * size)
  const covidCasesPerMillionEachDay = covidCasesPerMillionEachDayPredictor(deathPerMillionEachDay, medianAge);
  const allActiveCasesPerMillion = covidCasesPerMillionEachDay * CovidInfectiousPeriod;
  const activeCasesNotInQuarantine = AsymptomaticChance * allActiveCasesPerMillion + 
  (1 - AsymptomaticChance) * CovidIncubation / CovidInfectiousPeriod * allActiveCasesPerMillion;
  
  const chanceOfCovidAndNotBeingInQuarantine = activeCasesNotInQuarantine / (1000000 * (1 - immunePopulation));

  return chanceOfMinimumOneCovidCase(chanceOfCovidAndNotBeingInQuarantine, vulnerableSize);

}

const chanceOfMinimumOneCovidCase = (individualCovidProbability: number, vulnerableSize: number) => {
  return 1 - Math.pow(1 - individualCovidProbability, vulnerableSize);
}

const covidCasesPerMillionEachDayPredictor = (deathPerMillionEachDay: number,
   medianAge: number) => {
    const ifr = calculateIFR(medianAge);
    return (1 / ifr) * deathPerMillionEachDay;

}
const calculateIFR = (medianAge: number) => {
  const coeff = Math.pow(1.0905077, medianAge - USMedianAge)
  return CDCIfr * coeff;
}


export const contractionChanceRegion = (region: string, eventSize: number) => {
  if (!(region in RegionCovidData)) throw Error("invalid Region");
  const data = RegionCovidData[region]
  return contractionChance(eventSize, data.lastWeekAverageDeathPerMillionEachDay,
  data.allDeathPerMillion, data.medianAge )
}

// console.log(contractionChance(10, 25, 878, 37.1))
// console.log(contractionChance(10, 8.96, 1300, 32))

const italyData : RegionData = RegionCovidData['Italy'];
for (let property in RegionCovidData) {
  let data = RegionCovidData[property];
  console.log(property, contractionChance(10, data.lastWeekAverageDeathPerMillionEachDay,
  data.allDeathPerMillion, data.medianAge ))
}
