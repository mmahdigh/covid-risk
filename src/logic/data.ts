import usa from '../icons/usa.svg'
import iran from '../icons/iran.svg'
import italy from '../icons/italy.svg'
import mexico from '../icons/mexico.svg'
import spain from '../icons/spain.svg'
import india from '../icons/india.svg'
import russia from '../icons/russia.svg'
import united_kingdom from '../icons/united-kingdom.svg'
import france from '../icons/france.svg'
import poland from '../icons/poland.svg'
import colombia from '../icons/colombia.svg'
import brazil from '../icons/brazil.svg'
import belgium from '../icons/belgium.svg'
import turkey from '../icons/turkey.svg'
import ukraine from '../icons/ukraine.svg'
import romania from '../icons/romania.svg'
import hungary from '../icons/hungary.svg'
import indonesia from '../icons/indonesia.svg'
import germany from '../icons/germany.svg'
import greece from '../icons/greece.svg'
import argentina from '../icons/argentina.svg'
import portugal from '../icons/portugal.svg'
import tunisia from '../icons/tunisia.svg'
import jordan from '../icons/jordan.svg'
import ecuador from '../icons/ecuador.svg'
import morocco from '../icons/morocco.svg'
import austria from '../icons/austria.svg'
import bulgaria from '../icons/bulgaria.svg'
import netherlands from '../icons/netherlands.svg'
import south_africa from '../icons/south-africa.svg'
import canada from '../icons/canada.svg'
import pakistan from '../icons/pakistan.svg'
import japan from '../icons/japan.svg'
import china from '../icons/china.svg'
import australia from '../icons/australia.svg'
import nigeria from '../icons/nigeria.svg'
import czech_republic from '../icons/czech-republic.svg'




export interface CovidData {
  [cityName: string]: RegionData;
}

export interface RegionData {
  updatedAt: number;
  medianAge: number;
  lastWeekAverageDeathPerMillionEachDay: number;
  allDeathPerMillion: number;
  speculation?: boolean;
  flag?: string;
}

export const getProvinceData = (province: keyof typeof RegionCovidData) => RegionCovidData[province]

export const RegionCovidData : CovidData = {
  Tehran: {
    lastWeekAverageDeathPerMillionEachDay: 8.96,
    updatedAt: 1606078905916,
    medianAge: 32,
    allDeathPerMillion: 1300,
    flag: iran,
  },
  Khorasan_Razavi: {
    lastWeekAverageDeathPerMillionEachDay: 6.42,
    updatedAt: 1606078905916,
    medianAge: 32,
    allDeathPerMillion: 1000,
    speculation: true,
    flag: iran,
  },
  Isfahan: {
    lastWeekAverageDeathPerMillionEachDay: 6.42,
    updatedAt: 1606078905916,
    medianAge: 32,
    allDeathPerMillion: 1000,
    speculation: true,
    flag: iran,
  },
  Alborz: {
    lastWeekAverageDeathPerMillionEachDay: 7.14,
    updatedAt: 1606078905916,
    medianAge: 32,
    allDeathPerMillion: 772,
    speculation: true,
    flag: iran,
  },
  Fars: {
    lastWeekAverageDeathPerMillionEachDay: 6.60,
    updatedAt: 1606078905916,
    medianAge: 32,
    allDeathPerMillion: 440,
    speculation: true,
    flag: iran,
  },
  Iran: {
    lastWeekAverageDeathPerMillionEachDay: 5.65,
    updatedAt: 1606078905916,
    medianAge: 32,
    allDeathPerMillion: 531,
    speculation: true,
    flag: iran,
  },
  Italy: {
    lastWeekAverageDeathPerMillionEachDay: 10.85,
    updatedAt: 1606125820016,
    medianAge: 47.3,
    allDeathPerMillion: 825,
    flag: italy,
  },
  Mexico: {
    lastWeekAverageDeathPerMillionEachDay: 3.43,
    updatedAt: 1606125820016,
    medianAge: 29.2,
    allDeathPerMillion: 783,
    flag: mexico,
  },
  Spain: {
    lastWeekAverageDeathPerMillionEachDay: 5.71,
    updatedAt: 1606125820016,
    medianAge: 44.9,
    allDeathPerMillion: 922,
    flag: spain,
  },
  India: {
    lastWeekAverageDeathPerMillionEachDay: 0.378,
    updatedAt: 1606125820016,
    medianAge: 26.8,
    allDeathPerMillion: 97,
    flag: india,
  },
  Russia: {
    lastWeekAverageDeathPerMillionEachDay: 2.92,
    updatedAt: 1606125820016,
    medianAge: 39.6,
    allDeathPerMillion: 248,
    flag: russia,
  },
  United_Kingdom: {
    lastWeekAverageDeathPerMillionEachDay: 6.49,
    updatedAt: 1606125820016,
    medianAge: 40.5,
    allDeathPerMillion: 809,
    flag: united_kingdom,
  },
  Poland: {
    lastWeekAverageDeathPerMillionEachDay: 12.34,
    updatedAt: 1606125820016,
    medianAge: 39.7,
    allDeathPerMillion: 360,
    flag: poland,
  },
  France: {
    lastWeekAverageDeathPerMillionEachDay: 8.28,
    updatedAt: 1606125820016,
    medianAge: 42.3,
    allDeathPerMillion: 746,
    flag: france,
  },
  Colombia: {
    lastWeekAverageDeathPerMillionEachDay: 3.52,
    updatedAt: 1606125820016,
    medianAge: 29.5,
    allDeathPerMillion: 691,
    flag: colombia,
  },
  Brazil: {
    lastWeekAverageDeathPerMillionEachDay: 2.26,
    updatedAt: 1606125820016,
    medianAge: 33.5,
    allDeathPerMillion: 794,
    flag: brazil,
  },
  Belgium: {
    lastWeekAverageDeathPerMillionEachDay: 15,
    updatedAt: 1606125820016,
    medianAge: 41.3,
    allDeathPerMillion: 1337,
    flag: belgium,
  },
  Turkey: {
    lastWeekAverageDeathPerMillionEachDay: 1.42,
    updatedAt: 1606125820016,
    medianAge: 31.5,
    allDeathPerMillion: 146,
    flag: turkey,
  },
  Ukraine: {
    lastWeekAverageDeathPerMillionEachDay: 4.40,
    updatedAt: 1606125820016,
    medianAge: 41.2,
    allDeathPerMillion: 251,
    flag: ukraine,
  },
  Romania: {
    lastWeekAverageDeathPerMillionEachDay: 8.34,
    updatedAt: 1606125820016,
    medianAge: 43.2,
    allDeathPerMillion: 524,
    flag: romania,
  },
  Hungary: {
    lastWeekAverageDeathPerMillionEachDay: 10.46,
    updatedAt: 1606125820016,
    medianAge: 43.3,
    allDeathPerMillion: 394,
    flag: hungary,
  },
  Indonesia: {
    lastWeekAverageDeathPerMillionEachDay: 0.35,
    updatedAt: 1606125820016,
    medianAge: 29.7,
    allDeathPerMillion: 58,
    flag: indonesia,
  },
  Germany: {
    lastWeekAverageDeathPerMillionEachDay: 2.81,
    updatedAt: 1606125820016,
    medianAge: 45.9,
    allDeathPerMillion: 171,
    flag: germany,
  },
  Greece: {
    lastWeekAverageDeathPerMillionEachDay: 7.21,
    updatedAt: 1606125820016,
    medianAge: 43.4,
    allDeathPerMillion: 157,
    flag: greece,
  },
  Czechia: {
    lastWeekAverageDeathPerMillionEachDay: 13.16,
    updatedAt: 1606125820016,
    medianAge: 43.2,
    allDeathPerMillion: 671,
    flag: czech_republic,
  },
  Argentina: {
    lastWeekAverageDeathPerMillionEachDay: 4.94,
    updatedAt: 1606125820016,
    medianAge: 31.5,
    allDeathPerMillion: 816,
    flag: argentina,
  },
  Portugal: {
    lastWeekAverageDeathPerMillionEachDay: 7.27,
    updatedAt: 1606125820016,
    medianAge: 46.2,
    allDeathPerMillion: 383,
    flag: portugal,
  },
  Tunisia: {
    lastWeekAverageDeathPerMillionEachDay: 5.73,
    updatedAt: 1606125820016,
    medianAge: 31.3,
    allDeathPerMillion: 238,
    flag: tunisia,
  },
  Jordan: {
    lastWeekAverageDeathPerMillionEachDay: 6.54,
    updatedAt: 1606125820016,
    medianAge: 23.8,
    allDeathPerMillion: 218,
    flag: jordan,
  },
  Ecuador: {
    lastWeekAverageDeathPerMillionEachDay: 1.58,
    updatedAt: 1606125820016,
    medianAge: 27.9,
    allDeathPerMillion: 744,
    flag: ecuador,
  },
  Morocco: {
    lastWeekAverageDeathPerMillionEachDay: 2.05,
    updatedAt: 1606125820016,
    medianAge: 29.5,
    allDeathPerMillion: 143,
    flag: morocco,
  },
  Austria: {
    lastWeekAverageDeathPerMillionEachDay: 8.87,
    updatedAt: 1606125820016,
    medianAge: 43.2,
    allDeathPerMillion: 265,
    flag: austria,
  },
  Bulgaria: {
    lastWeekAverageDeathPerMillionEachDay: 15.46,
    updatedAt: 1606125820016,
    medianAge: 43.4,
    allDeathPerMillion: 416,
    flag: bulgaria,
  },
  Pakistan: {
    lastWeekAverageDeathPerMillionEachDay: 0.16,
    updatedAt: 1606125820016,
    medianAge: 22.8,
    allDeathPerMillion: 34,
    flag: pakistan,
  },
  SouthAfrica: {
    lastWeekAverageDeathPerMillionEachDay: 1.59,
    updatedAt: 1606125820016,
    medianAge: 27.6,
    allDeathPerMillion: 351,
    flag: south_africa,
  },
  Canada: {
    lastWeekAverageDeathPerMillionEachDay: 1.87,
    updatedAt: 1606125820016,
    medianAge: 40.9,
    allDeathPerMillion: 302,
    flag: canada,
  },
  Netherlands: {
    lastWeekAverageDeathPerMillionEachDay: 3.38,
    updatedAt: 1606125820016,
    medianAge: 42.1,
    allDeathPerMillion: 518,
    flag: netherlands,
  },
  Japan: {
    lastWeekAverageDeathPerMillionEachDay: 0.10,
    updatedAt: 1606125820016,
    medianAge: 48.4,
    allDeathPerMillion: 16,
    flag: japan,
  },
  China: {
    lastWeekAverageDeathPerMillionEachDay: 0,
    updatedAt: 1606125820016,
    medianAge: 38.4,
    allDeathPerMillion: 3,
    flag: china,
  },
  Australia: {
    lastWeekAverageDeathPerMillionEachDay: 0,
    updatedAt: 1606125820016,
    medianAge: 37.0,
    allDeathPerMillion: 35,
    flag: australia,
  },
  Nigeria: {
    lastWeekAverageDeathPerMillionEachDay: 0.004,
    updatedAt: 1606125820016,
    medianAge: 17.9,
    allDeathPerMillion: 6,
    flag: nigeria,
  },
  Illinois: {
    lastWeekAverageDeathPerMillionEachDay: 9.841,
    updatedAt: 1606078905916,
    medianAge: 38.3,
    allDeathPerMillion: 943,
    flag: usa,
  },
  Texas: {
    lastWeekAverageDeathPerMillionEachDay: 5.03,
    updatedAt: 1606078905916,
    medianAge: 34.8,
    allDeathPerMillion: 727,
    flag: usa,
  },
  Pennsylvania: {
    lastWeekAverageDeathPerMillionEachDay: 5.70,
    updatedAt: 1606078905916,
    medianAge: 40.8,
    allDeathPerMillion: 772,
    flag: usa,
  },
  Michigan: {
    lastWeekAverageDeathPerMillionEachDay: 7.11,
    updatedAt: 1606078905916,
    medianAge: 39.8,
    allDeathPerMillion: 889,
    flag: usa,
  },
  Florida: {
    lastWeekAverageDeathPerMillionEachDay: 3.30,
    updatedAt: 1606078905916,
    medianAge: 42.2,
    allDeathPerMillion: 836,
    flag: usa,
  },
  Minnesota: {
    lastWeekAverageDeathPerMillionEachDay: 8.33,
    updatedAt: 1606078905916,
    medianAge: 38.1,
    allDeathPerMillion: 578,
    flag: usa,
  },
  Wisconsin: {
    lastWeekAverageDeathPerMillionEachDay: 9.28,
    updatedAt: 1606078905916,
    medianAge: 39.6,
    allDeathPerMillion: 516,
    flag: usa,
  },
  South_Carolina: {
    lastWeekAverageDeathPerMillionEachDay: 4.66,
    updatedAt: 1606078905916,
    medianAge: 39.6,
    allDeathPerMillion: 830,
    flag: usa,
  },
  Missouri: {
    lastWeekAverageDeathPerMillionEachDay: 5.87,
    updatedAt: 1606078905916,
    medianAge: 38.7,
    allDeathPerMillion: 617,
    flag: usa,
  },
  Colorado: {
    lastWeekAverageDeathPerMillionEachDay: 6.59,
    updatedAt: 1606078905916,
    medianAge: 36.9,
    allDeathPerMillion: 484,
    flag: usa,
  },
  Indiana: {
    lastWeekAverageDeathPerMillionEachDay: 7.72,
    updatedAt: 1606078905916,
    medianAge: 37.9,
    allDeathPerMillion: 779,
    flag: usa,
  },
  Georgia: {
    lastWeekAverageDeathPerMillionEachDay: 3.01,
    updatedAt: 1606078905916,
    medianAge: 36.9,
    allDeathPerMillion: 865,
    flag: usa,
  },
  South_Dakota: {
    lastWeekAverageDeathPerMillionEachDay: 25,
    updatedAt: 1606078905916,
    medianAge: 37.1,
    allDeathPerMillion: 878,
    flag: usa,
  },
  Montana: {
    lastWeekAverageDeathPerMillionEachDay: 11.32,
    updatedAt: 1606078905916,
    medianAge: 39.9,
    allDeathPerMillion: 561,
    flag: usa,
  },
  California: {
    lastWeekAverageDeathPerMillionEachDay: 1.54,
    updatedAt: 1606078905916,
    medianAge: 36.8,
    allDeathPerMillion: 473,
    flag: usa,
  },
  New_Jersey: {
    lastWeekAverageDeathPerMillionEachDay: 3.15,
    updatedAt: 1606078905916,
    medianAge: 40.0,
    allDeathPerMillion: 1900,
    flag: usa,
  },
  Arizona: {
    lastWeekAverageDeathPerMillionEachDay: 3.02,
    updatedAt: 1606078905916,
    medianAge: 37.9,
    allDeathPerMillion: 887,
    flag: usa,
  },
  Nevada: {
    lastWeekAverageDeathPerMillionEachDay: 4.87,
    updatedAt: 1606078905916,
    medianAge: 38.1,
    allDeathPerMillion: 653,
    flag: usa,
  },
  Ohio: {
    lastWeekAverageDeathPerMillionEachDay: 3.33,
    updatedAt: 1606078905916,
    medianAge: 39.4,
    allDeathPerMillion: 512,
    flag: usa,
  },
  New_York: {
    lastWeekAverageDeathPerMillionEachDay: 1.74,
    updatedAt: 1606078905916,
    medianAge: 39.0,
    allDeathPerMillion: 1759,
    flag: usa,
  },
  North_Carolina: {
    lastWeekAverageDeathPerMillionEachDay: 3.44,
    updatedAt: 1606078905916,
    medianAge: 38.9,
    allDeathPerMillion: 477,
    flag: usa,
  },
  Virginia: {
    lastWeekAverageDeathPerMillionEachDay: 2.34,
    updatedAt: 1606078905916,
    medianAge: 38.4,
    allDeathPerMillion: 461,
    flag: usa,
  },
  Iowa: {
    lastWeekAverageDeathPerMillionEachDay: 8.25,
    updatedAt: 1606078905916,
    medianAge: 38.2,
    allDeathPerMillion: 685,
    flag: usa,
  },
  New_Mexico: {
    lastWeekAverageDeathPerMillionEachDay: 9.57,
    updatedAt: 1606078905916,
    medianAge: 38.1,
    allDeathPerMillion: 644,
    flag: usa,
  },
  Oklahoma: {
    lastWeekAverageDeathPerMillionEachDay: 4.05,
    updatedAt: 1606078905916,
    medianAge: 36.7,
    allDeathPerMillion: 410,
    flag: usa,
  },
  Kentucky: {
    lastWeekAverageDeathPerMillionEachDay: 4.03,
    updatedAt: 1606078905916,
    medianAge: 38.9,
    allDeathPerMillion: 399,
    flag: usa,
  },
  Massachusetts: {
    lastWeekAverageDeathPerMillionEachDay: 4.06,
    updatedAt: 1606078905916,
    medianAge: 39.4,
    allDeathPerMillion: 1522,
    flag: usa,
  },
  West_Virginia: {
    lastWeekAverageDeathPerMillionEachDay: 6.70,
    updatedAt: 1606078905916,
    medianAge: 42.7,
    allDeathPerMillion: 367,
    flag: usa,
  },
  Maryland: {
    lastWeekAverageDeathPerMillionEachDay: 6.04,
    updatedAt: 1606078905916,
    medianAge: 38.8,
    allDeathPerMillion: 730,
    flag: usa,
  },
  North_Dakota: {
    lastWeekAverageDeathPerMillionEachDay: 20.99,
    updatedAt: 1606078905916,
    medianAge: 35.2,
    allDeathPerMillion: 1094,
    flag: usa,
  },
  Arkansas: {
    lastWeekAverageDeathPerMillionEachDay: 8.30,
    updatedAt: 1606078905916,
    medianAge: 38.3,
    allDeathPerMillion: 774,
    flag: usa,
  },
  Mississippi: {
    lastWeekAverageDeathPerMillionEachDay: 5.38,
    updatedAt: 1606078905916,
    medianAge: 37.7,
    allDeathPerMillion: 1229,
    flag: usa,
  },
  Utah: {
    lastWeekAverageDeathPerMillionEachDay: 3.43,
    updatedAt: 1606078905916,
    medianAge: 31,
    allDeathPerMillion: 245,
    flag: usa,
  },
  Tennessee: {
    lastWeekAverageDeathPerMillionEachDay: 7.02,
    updatedAt: 1606078905916,
    medianAge: 38.8,
    allDeathPerMillion: 617,
    flag: usa,
  },
  Oregon: {
    lastWeekAverageDeathPerMillionEachDay: 1.90,
    updatedAt: 1606078905916,
    medianAge: 39.4,
    allDeathPerMillion: 194,
    flag: usa,
  },
  Hawaii: {
    lastWeekAverageDeathPerMillionEachDay: 0.71,
    updatedAt: 1606078905916,
    medianAge: 39.2,
    allDeathPerMillion: 163,
    flag: usa,
  },
  Alabama: {
    lastWeekAverageDeathPerMillionEachDay: 6.12,
    updatedAt: 1606078905916,
    medianAge: 39.2,
    allDeathPerMillion: 705,
    flag: usa,
  },
  Idaho: {
    lastWeekAverageDeathPerMillionEachDay: 6.74,
    updatedAt: 1606078905916,
    medianAge: 36.6,
    allDeathPerMillion: 474,
    flag: usa,
  },
  District_Of_Columbia: {
    lastWeekAverageDeathPerMillionEachDay: 1.418,
    updatedAt: 1606078905916,
    medianAge: 34.0,
    allDeathPerMillion: 949,
    flag: usa,
  },
  New_Hempshire: {
    lastWeekAverageDeathPerMillionEachDay: 1.47,
    updatedAt: 1606078905916,
    medianAge: 43.0,
    allDeathPerMillion: 374,
    flag: usa,
  },
  Alaska: {
    lastWeekAverageDeathPerMillionEachDay: 0.81,
    updatedAt: 1606078905916,
    medianAge: 34.6,
    allDeathPerMillion: 138, 
    flag: usa,
  },
  Maine: {
    lastWeekAverageDeathPerMillionEachDay: 0.74,
    updatedAt: 1606078905916,
    medianAge: 44.9,
    allDeathPerMillion: 129,
    flag: usa,
  },
  Vermont: {
    lastWeekAverageDeathPerMillionEachDay: 0.91,
    updatedAt: 1606078905916,
    medianAge: 42.8,
    allDeathPerMillion: 101,
    flag: usa,
  },
  Connecticut: {
    lastWeekAverageDeathPerMillionEachDay: 3.65,
    updatedAt: 1606078905916,
    medianAge: 41.0,
    allDeathPerMillion: 1354,
    flag: usa,
  },
  Louisiana: {
    lastWeekAverageDeathPerMillionEachDay: 3.44,
    updatedAt: 1606078905916,
    medianAge: 37.2,
    allDeathPerMillion: 1341,
    flag: usa,
  },
  Rhode_Island: {
    lastWeekAverageDeathPerMillionEachDay: 4.76,
    updatedAt: 1606078905916,
    medianAge: 40.1,
    allDeathPerMillion: 1221,
    flag: usa,
  },
  Delaware: {
    lastWeekAverageDeathPerMillionEachDay: 1.02,
    updatedAt: 1606078905916,
    medianAge: 40.7,
    allDeathPerMillion: 766,
    flag: usa,
  },
  Kansas: {
    lastWeekAverageDeathPerMillionEachDay: 7.56,
    updatedAt: 1606078905916,
    medianAge: 36.9,
    allDeathPerMillion: 484,
    flag: usa,
  },
  Nebraska: {
    lastWeekAverageDeathPerMillionEachDay: 9.32,
    updatedAt: 1606078905916,
    medianAge: 36.6,
    allDeathPerMillion: 464,
    flag: usa,
  },
  Washington: {
    lastWeekAverageDeathPerMillionEachDay: 1.97,
    updatedAt: 1606078905916,
    medianAge: 37.7,
    allDeathPerMillion: 346,
    flag: usa,
  },
  Wyoming: {
    lastWeekAverageDeathPerMillionEachDay: 8.65,
    updatedAt: 1606078905916,
    medianAge: 38.0,
    allDeathPerMillion: 304,
    flag: usa,
  },


}