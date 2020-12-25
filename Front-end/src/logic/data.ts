import { RegionCovidData } from "./regionData";

const usa = `https://uupload.ir/files/kbbg_test2.jpg`;
const iran = `https://uupload.ir/files/kbbg_test2.jpg`;
const italy = `https://uupload.ir/files/kbbg_test2.jpg`;
const mexico = `https://uupload.ir/files/kbbg_test2.jpg`;
const spain = `https://uupload.ir/files/kbbg_test2.jpg`;
const india = `https://uupload.ir/files/kbbg_test2.jpg`;
const russia = `https://uupload.ir/files/kbbg_test2.jpg`;
const united_kingdom = `https://uupload.ir/files/kbbg_test2.jpg`;
const france = `https://uupload.ir/files/kbbg_test2.jpg`;
const poland = `https://uupload.ir/files/kbbg_test2.jpg`;
const colombia = `https://uupload.ir/files/kbbg_test2.jpg`;
const brazil = `https://uupload.ir/files/kbbg_test2.jpg`;
const belgium = `https://uupload.ir/files/kbbg_test2.jpg`;
const turkey = `https://uupload.ir/files/kbbg_test2.jpg`;
const ukraine = `https://uupload.ir/files/kbbg_test2.jpg`;
const romania = `https://uupload.ir/files/kbbg_test2.jpg`;
const hungary = `https://uupload.ir/files/kbbg_test2.jpg`;
const indonesia = `https://uupload.ir/files/kbbg_test2.jpg`;
const germany = `https://uupload.ir/files/kbbg_test2.jpg`;
const greece = `https://uupload.ir/files/kbbg_test2.jpg`;
const argentina = `https://uupload.ir/files/kbbg_test2.jpg`;
const portugal = `https://uupload.ir/files/kbbg_test2.jpg`;
const tunisia = `https://uupload.ir/files/kbbg_test2.jpg`;
const jordan = `https://uupload.ir/files/kbbg_test2.jpg`;
const ecuador = `https://uupload.ir/files/kbbg_test2.jpg`;
const morocco = `https://uupload.ir/files/kbbg_test2.jpg`;
const austria = `https://uupload.ir/files/kbbg_test2.jpg`;
const bulgaria = `https://uupload.ir/files/kbbg_test2.jpg`;
const netherlands = `https://uupload.ir/files/kbbg_test2.jpg`;
const south_africa = `https://uupload.ir/files/kbbg_test2.jpg`;
const canada = `https://uupload.ir/files/kbbg_test2.jpg`;
const skorea = `https://uupload.ir/files/kbbg_test2.jpg`;
const pakistan = `https://uupload.ir/files/kbbg_test2.jpg`;
const japan = `https://uupload.ir/files/kbbg_test2.jpg`;
const china = `https://uupload.ir/files/kbbg_test2.jpg`;
const australia = `https://uupload.ir/files/kbbg_test2.jpg`;
const nigeria = `https://uupload.ir/files/kbbg_test2.jpg`;
const czech_republic = `https://uupload.ir/files/kbbg_test2.jpg`;

export interface CovidData {
  [cityName: string]: RegionData;
}

export interface DataPoint {
  updatedAt: string | number;
  lastWeekAverageDeathPerMillionEachDay: number;
  allDeathPerMillion: number;
}
export interface RegionData {
  medianAge: number;
  dataPoints: DataPoint[];
  speculation?: boolean;
  flag?: string;
}

export const getProvinceData = (province: keyof typeof RegionCovidData) =>
  RegionCovidData[province];