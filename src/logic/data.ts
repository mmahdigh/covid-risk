// @ts-nocheck
import usa from "../icons/usa.svg";
import iran from "../icons/iran.svg";
import italy from "../icons/italy.svg";
import mexico from "../icons/mexico.svg";
import spain from "../icons/spain.svg";
import india from "../icons/india.svg";
import russia from "../icons/russia.svg";
import united_kingdom from "../icons/united-kingdom.svg";
import france from "../icons/france.svg";
import poland from "../icons/poland.svg";
import colombia from "../icons/colombia.svg";
import brazil from "../icons/brazil.svg";
import belgium from "../icons/belgium.svg";
import turkey from "../icons/turkey.svg";
import ukraine from "../icons/ukraine.svg";
import romania from "../icons/romania.svg";
import hungary from "../icons/hungary.svg";
import indonesia from "../icons/indonesia.svg";
import germany from "../icons/germany.svg";
import greece from "../icons/greece.svg";
import argentina from "../icons/argentina.svg";
import portugal from "../icons/portugal.svg";
import tunisia from "../icons/tunisia.svg";
import jordan from "../icons/jordan.svg";
import ecuador from "../icons/ecuador.svg";
import morocco from "../icons/morocco.svg";
import austria from "../icons/austria.svg";
import bulgaria from "../icons/bulgaria.svg";
import netherlands from "../icons/netherlands.svg";
import south_africa from "../icons/south-africa.svg";
import canada from "../icons/canada.svg";
import skorea from "../icons/skorea.svg";
import pakistan from "../icons/pakistan.svg";
import japan from "../icons/japan.svg";
import china from "../icons/china.svg";
import australia from "../icons/australia.svg";
import nigeria from "../icons/nigeria.svg";
import czech_republic from "../icons/czech-republic.svg";

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

export const RegionCovidData: CovidData = {
  Tehran: {
    medianAge: 32,
    flag: iran,
    dataPoints: [
      {
        allDeathPerMillion: 1205,
        lastWeekAverageDeathPerMillionEachDay: 12.05,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 1507,
        lastWeekAverageDeathPerMillionEachDay: 7.53,
        updatedAt: 1607078905916,
      },
      {
        allDeathPerMillion: 1680,
        lastWeekAverageDeathPerMillionEachDay: 4.596,
        updatedAt: 1608078905916,
      },
    ],
  },
  Iran: {
    medianAge: 32,
    flag: iran,
    speculation: true,
    dataPoints: [
      {
        allDeathPerMillion: 531,
        lastWeekAverageDeathPerMillionEachDay: 5.65,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 607,
        lastWeekAverageDeathPerMillionEachDay: 4.55,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 651,
        lastWeekAverageDeathPerMillionEachDay: 2.70,
        updatedAt: 1608310859000,
      },
    ],
  },
  Italy: {
    medianAge: 47.3,
    flag: italy,
    dataPoints: [
      {
        allDeathPerMillion: 825,
        lastWeekAverageDeathPerMillionEachDay: 10.85,
        updatedAt: 1606125820016,
      },
      {
        allDeathPerMillion: 975,
        lastWeekAverageDeathPerMillionEachDay: 12.24,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 1125,
        lastWeekAverageDeathPerMillionEachDay: 10.67,
        updatedAt: 1608310859000,
      },
    ],
  },
  Mexico: {
    medianAge: 29.2,
    flag: mexico,
    dataPoints: [
      {
        allDeathPerMillion: 783,
        lastWeekAverageDeathPerMillionEachDay: 3.43,
        updatedAt: 1606125820016,
      },
    ],
  },
  Spain: {
    medianAge: 44.9,
    flag: spain,
    dataPoints: [
      {
        allDeathPerMillion: 922,
        lastWeekAverageDeathPerMillionEachDay: 5.71,
        updatedAt: 1606125820016,
      },
    ],
  },
  India: {
    medianAge: 26.8,
    flag: india,
    dataPoints: [
      {
        allDeathPerMillion: 97,
        lastWeekAverageDeathPerMillionEachDay: 0.38,
        updatedAt: 1606125820016,
      },
      {
        allDeathPerMillion: 103,
        lastWeekAverageDeathPerMillionEachDay: 0.37,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 107,
        lastWeekAverageDeathPerMillionEachDay: 0.27,
        updatedAt: 1608310859000,
      },
    ],
  },
  Russia: {
    medianAge: 39.6,
    flag: russia,
    dataPoints: [
      {
        allDeathPerMillion: 248,
        lastWeekAverageDeathPerMillionEachDay: 2.92,
        updatedAt: 1606125820016,
      },
      {
        allDeathPerMillion: 292,
        lastWeekAverageDeathPerMillionEachDay: 3.57,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 344,
        lastWeekAverageDeathPerMillionEachDay: 3.83,
        updatedAt: 1608310859000,
      },
    ],
  },
  United_Kingdom: {
    medianAge: 40.5,
    flag: united_kingdom,
    dataPoints: [
      {
        allDeathPerMillion: 809,
        lastWeekAverageDeathPerMillionEachDay: 6.49,
        updatedAt: 1606125820016,
      },
      {
        allDeathPerMillion: 909,
        lastWeekAverageDeathPerMillionEachDay: 6.57,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 998,
        lastWeekAverageDeathPerMillionEachDay: 6.50,
        updatedAt: 1608310859000,
      },
    ],
  },
  Poland: {
    medianAge: 39.7,
    flag: poland,
    dataPoints: [
      {
        allDeathPerMillion: 360,
        lastWeekAverageDeathPerMillionEachDay: 12.34,
        updatedAt: 1606125820016,
      },
      {
        allDeathPerMillion: 510,
        lastWeekAverageDeathPerMillionEachDay: 12.09,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 652,
        lastWeekAverageDeathPerMillionEachDay: 9.77,
        updatedAt: 1608310859000,
      },
    ],
  },
  France: {
    medianAge: 42.3,
    flag: france,
    dataPoints: [
      {
        allDeathPerMillion: 746,
        lastWeekAverageDeathPerMillionEachDay: 8.28,
        updatedAt: 1606125820016,
      },
      {
        allDeathPerMillion: 817,
        lastWeekAverageDeathPerMillionEachDay: 6.07,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 899,
        lastWeekAverageDeathPerMillionEachDay: 5.69,
        updatedAt: 1608310859000,
      },
    ],
  },
  Colombia: {
    medianAge: 29.5,
    flag: colombia,
    dataPoints: [
      {
        allDeathPerMillion: 691,
        lastWeekAverageDeathPerMillionEachDay: 3.52,
        updatedAt: 1606125820016,
      },
    ],
  },
  Brazil: {
    medianAge: 33.5,
    flag: brazil,
    dataPoints: [
      {
        allDeathPerMillion: 794,
        lastWeekAverageDeathPerMillionEachDay: 2.26,
        updatedAt: 1606125820016,
      },
      {
        allDeathPerMillion: 840,
        lastWeekAverageDeathPerMillionEachDay: 2.72,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 886,
        lastWeekAverageDeathPerMillionEachDay: 3.57,
        updatedAt: 1608310859000,
      },
    ],
  },
  Belgium: {
    medianAge: 41.3,
    flag: belgium,
    dataPoints: [
      {
        allDeathPerMillion: 1337,
        lastWeekAverageDeathPerMillionEachDay: 15,
        updatedAt: 1606125820016,
      },
    ],
  },
  Turkey: {
    medianAge: 31.5,
    flag: turkey,
    dataPoints: [
      {
        allDeathPerMillion: 146,
        lastWeekAverageDeathPerMillionEachDay: 1.42,
        updatedAt: 1606125820016,
      },
      {
        allDeathPerMillion: 177,
        lastWeekAverageDeathPerMillionEachDay: 2.29,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 215,
        lastWeekAverageDeathPerMillionEachDay: 2.84,
        updatedAt: 1608310859000,
      },
    ],
  },
  Ukraine: {
    medianAge: 41.2,
    flag: ukraine,
    dataPoints: [
      {
        allDeathPerMillion: 251,
        lastWeekAverageDeathPerMillionEachDay: 4.4,
        updatedAt: 1606125820016,
      },
    ],
  },
  Romania: {
    medianAge: 43.2,
    flag: romania,
    dataPoints: [
      {
        allDeathPerMillion: 524,
        lastWeekAverageDeathPerMillionEachDay: 8.34,
        updatedAt: 1606125820016,
      },
    ],
  },
  Hungary: {
    medianAge: 43.3,
    flag: hungary,
    dataPoints: [
      {
        allDeathPerMillion: 394,
        lastWeekAverageDeathPerMillionEachDay: 10.46,
        updatedAt: 1606125820016,
      },
    ],
  },
  Indonesia: {
    medianAge: 29.7,
    flag: indonesia,
    dataPoints: [
      {
        allDeathPerMillion: 58,
        lastWeekAverageDeathPerMillionEachDay: 0.35,
        updatedAt: 1606125820016,
      },
    ],
  },
  Germany: {
    medianAge: 45.9,
    flag: germany,
    dataPoints: [
      {
        allDeathPerMillion: 171,
        lastWeekAverageDeathPerMillionEachDay: 2.81,
        updatedAt: 1606125820016,
      },
      {
        allDeathPerMillion: 225,
        lastWeekAverageDeathPerMillionEachDay: 4.32,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 313,
        lastWeekAverageDeathPerMillionEachDay: 7.20,
        updatedAt: 1608310859000,
      },
    ],
  },
  Greece: {
    medianAge: 43.4,
    flag: greece,
    dataPoints: [
      {
        allDeathPerMillion: 157,
        lastWeekAverageDeathPerMillionEachDay: 7.21,
        updatedAt: 1606125820016,
      },
    ],
  },
  Czechia: {
    medianAge: 43.2,
    flag: czech_republic,
    dataPoints: [
      {
        allDeathPerMillion: 671,
        lastWeekAverageDeathPerMillionEachDay: 13.16,
        updatedAt: 1606125820016,
      },
    ],
  },
  Argentina: {
    medianAge: 31.5,
    flag: argentina,
    dataPoints: [
      {
        allDeathPerMillion: 816,
        lastWeekAverageDeathPerMillionEachDay: 4.94,
        updatedAt: 1606125820016,
      },
    ],
  },
  Portugal: {
    medianAge: 46.2,
    flag: portugal,
    dataPoints: [
      {
        allDeathPerMillion: 383,
        lastWeekAverageDeathPerMillionEachDay: 7.27,
        updatedAt: 1606125820016,
      },
    ],
  },
  Tunisia: {
    medianAge: 31.3,
    flag: tunisia,
    dataPoints: [
      {
        allDeathPerMillion: 238,
        lastWeekAverageDeathPerMillionEachDay: 5.73,
        updatedAt: 1606125820016,
      },
    ],
  },
  Jordan: {
    medianAge: 23.8,
    flag: jordan,
    dataPoints: [
      {
        allDeathPerMillion: 218,
        lastWeekAverageDeathPerMillionEachDay: 6.54,
        updatedAt: 1606125820016,
      },
    ],
  },
  Ecuador: {
    medianAge: 27.9,
    flag: ecuador,
    dataPoints: [
      {
        allDeathPerMillion: 744,
        lastWeekAverageDeathPerMillionEachDay: 1.58,
        updatedAt: 1606125820016,
      },
    ],
  },
  Morocco: {
    medianAge: 29.5,
    flag: morocco,
    dataPoints: [
      {
        allDeathPerMillion: 143,
        lastWeekAverageDeathPerMillionEachDay: 2.05,
        updatedAt: 1606125820016,
      },
    ],
  },
  Austria: {
    medianAge: 43.2,
    flag: austria,
    dataPoints: [
      {
        allDeathPerMillion: 265,
        lastWeekAverageDeathPerMillionEachDay: 8.87,
        updatedAt: 1606125820016,
      },
    ],
  },
  Bulgaria: {
    medianAge: 43.4,
    flag: bulgaria,
    dataPoints: [
      {
        allDeathPerMillion: 416,
        lastWeekAverageDeathPerMillionEachDay: 15.46,
        updatedAt: 1606125820016,
      },
    ],
  },
  Pakistan: {
    medianAge: 22.8,
    flag: pakistan,
    dataPoints: [
      {
        allDeathPerMillion: 34,
        lastWeekAverageDeathPerMillionEachDay: 0.16,
        updatedAt: 1606125820016,
      },
    ],
  },
  SouthAfrica: {
    medianAge: 27.6,
    flag: south_africa,
    dataPoints: [
      {
        allDeathPerMillion: 351,
        lastWeekAverageDeathPerMillionEachDay: 1.59,
        updatedAt: 1606125820016,
      },
    ],
  },
  Canada: {
    medianAge: 40.9,
    flag: canada,
    dataPoints: [
      {
        allDeathPerMillion: 302,
        lastWeekAverageDeathPerMillionEachDay: 1.87,
        updatedAt: 1606125820016,
      },
      {
        allDeathPerMillion: 332,
        lastWeekAverageDeathPerMillionEachDay: 2.29,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 373,
        lastWeekAverageDeathPerMillionEachDay: 2.98,
        updatedAt: 1608310859000,
      },
    ],
  },
  Netherlands: {
    medianAge: 42.1,
    flag: netherlands,
    dataPoints: [
      {
        allDeathPerMillion: 518,
        lastWeekAverageDeathPerMillionEachDay: 3.38,
        updatedAt: 1606125820016,
      },
    ],
  },
  Japan: {
    medianAge: 48.4,
    flag: japan,
    dataPoints: [
      {
        allDeathPerMillion: 16,
        lastWeekAverageDeathPerMillionEachDay: 0.1,
        updatedAt: 1606125820016,
      },
    ],
  },
  China: {
    medianAge: 38.4,
    flag: china,
    dataPoints: [
      {
        allDeathPerMillion: 3,
        lastWeekAverageDeathPerMillionEachDay: 0,
        updatedAt: 1606125820016,
      },
    ],
  },
  Australia: {
    medianAge: 37,
    flag: australia,
    dataPoints: [
      {
        allDeathPerMillion: 35,
        lastWeekAverageDeathPerMillionEachDay: 0,
        updatedAt: 1606125820016,
      },
    ],
  },
  Nigeria: {
    medianAge: 17.9,
    flag: nigeria,
    dataPoints: [
      {
        allDeathPerMillion: 6,
        lastWeekAverageDeathPerMillionEachDay: 0.004,
        updatedAt: 1606125820016,
      },
    ],
  },
  United_States: {
    medianAge: 38.2,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 809,
        lastWeekAverageDeathPerMillionEachDay: 5.2,
        updatedAt: 1606385157000,
      },
      {
        allDeathPerMillion: 870,
        lastWeekAverageDeathPerMillionEachDay: 6.30,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 978,
        lastWeekAverageDeathPerMillionEachDay: 7.87,
        updatedAt: 1608310859000,
      },
    ],
  },
  South_Korea: {
    medianAge: 43.7,
    flag: skorea,
    dataPoints: [
      {
        allDeathPerMillion: 10,
        lastWeekAverageDeathPerMillionEachDay: 0.06,
        updatedAt: 1606385157,
      },
    ],
  },
  Illinois: {
    medianAge: 38.3,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 943,
        lastWeekAverageDeathPerMillionEachDay: 9.841,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 1088,
        lastWeekAverageDeathPerMillionEachDay: 12.31,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 1279,
        lastWeekAverageDeathPerMillionEachDay: 12.79,
        updatedAt: 1608310859000,
      },
    ],
  },
  Texas: {
    medianAge: 34.8,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 727,
        lastWeekAverageDeathPerMillionEachDay: 5.03,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 792,
        lastWeekAverageDeathPerMillionEachDay: 5.62,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 885,
        lastWeekAverageDeathPerMillionEachDay: 6.79,
        updatedAt: 1608310859000,
      },
    ],
  },
  Pennsylvania: {
    medianAge: 40.8,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 772,
        lastWeekAverageDeathPerMillionEachDay: 5.7,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 877,
        lastWeekAverageDeathPerMillionEachDay: 10.08,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 1071,
        lastWeekAverageDeathPerMillionEachDay: 15.39,
        updatedAt: 1608310859000,
      },
    ],
  },
  Michigan: {
    medianAge: 39.8,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 889,
        lastWeekAverageDeathPerMillionEachDay: 7.11,
        updatedAt: 1606078905916,
      },
    ],
  },
  Florida: {
    medianAge: 42.2,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 836,
        lastWeekAverageDeathPerMillionEachDay: 3.3,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 884,
        lastWeekAverageDeathPerMillionEachDay: 4.19,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 950,
        lastWeekAverageDeathPerMillionEachDay: 4.66,
        updatedAt: 1608310859000,
      },
    ],
  },
  Minnesota: {
    medianAge: 38.1,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 578,
        lastWeekAverageDeathPerMillionEachDay: 8.33,
        updatedAt: 1606078905916,
      },
    ],
  },
  Wisconsin: {
    medianAge: 39.6,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 516,
        lastWeekAverageDeathPerMillionEachDay: 9.28,
        updatedAt: 1606078905916,
      },
    ],
  },
  South_Carolina: {
    medianAge: 39.6,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 830,
        lastWeekAverageDeathPerMillionEachDay: 4.66,
        updatedAt: 1606078905916,
      },
    ],
  },
  Missouri: {
    medianAge: 38.7,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 617,
        lastWeekAverageDeathPerMillionEachDay: 5.87,
        updatedAt: 1606078905916,
      },
    ],
  },
  Colorado: {
    medianAge: 36.9,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 484,
        lastWeekAverageDeathPerMillionEachDay: 6.59,
        updatedAt: 1606078905916,
      },
    ],
  },
  Indiana: {
    medianAge: 37.9,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 779,
        lastWeekAverageDeathPerMillionEachDay: 7.72,
        updatedAt: 1606078905916,
      },
    ],
  },
  Georgia: {
    medianAge: 36.9,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 865,
        lastWeekAverageDeathPerMillionEachDay: 3.01,
        updatedAt: 1606078905916,
      },
    ],
  },
  South_Dakota: {
    medianAge: 37.1,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 878,
        lastWeekAverageDeathPerMillionEachDay: 25,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 1067,
        lastWeekAverageDeathPerMillionEachDay: 29.38,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 1502,
        lastWeekAverageDeathPerMillionEachDay: 19.21,
        updatedAt: 1608310859000,
      },
    ],
  },
  Montana: {
    medianAge: 39.9,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 561,
        lastWeekAverageDeathPerMillionEachDay: 11.32,
        updatedAt: 1606078905916,
      },
    ],
  },
  California: {
    medianAge: 36.8,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 473,
        lastWeekAverageDeathPerMillionEachDay: 1.54,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 501,
        lastWeekAverageDeathPerMillionEachDay: 2.51,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 568,
        lastWeekAverageDeathPerMillionEachDay: 5.75,
        updatedAt: 1608310859000,
      },
    ],
  },
  New_Jersey: {
    medianAge: 40,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 1900,
        lastWeekAverageDeathPerMillionEachDay: 3.15,
        updatedAt: 1606078905916,
      },
    ],
  },
  Arizona: {
    medianAge: 37.9,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 887,
        lastWeekAverageDeathPerMillionEachDay: 3.02,
        updatedAt: 1606078905916,
      },   
      {
        allDeathPerMillion: 946,
        lastWeekAverageDeathPerMillionEachDay: 5.77,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 1074,
        lastWeekAverageDeathPerMillionEachDay: 11.27,
        updatedAt: 1608310859000,
      },
    ],
  },
  Nevada: {
    medianAge: 38.1,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 653,
        lastWeekAverageDeathPerMillionEachDay: 4.87,
        updatedAt: 1606078905916,
      },
    ],
  },
  Ohio: {
    medianAge: 39.4,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 512,
        lastWeekAverageDeathPerMillionEachDay: 3.33,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 589,
        lastWeekAverageDeathPerMillionEachDay: 6.59,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 682,
        lastWeekAverageDeathPerMillionEachDay: 6.59,
        updatedAt: 1608310859000,
      },
    ],
  },
  New_York: {
    medianAge: 39,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 1759,
        lastWeekAverageDeathPerMillionEachDay: 1.74,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 1794,
        lastWeekAverageDeathPerMillionEachDay: 3.29,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 1862,
        lastWeekAverageDeathPerMillionEachDay: 5.86,
        updatedAt: 1608310859000,
      },
    ],
  },
  North_Carolina: {
    medianAge: 38.9,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 477,
        lastWeekAverageDeathPerMillionEachDay: 3.44,
        updatedAt: 1606078905916,
      },
    ],
  },
  Virginia: {
    medianAge: 38.4,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 461,
        lastWeekAverageDeathPerMillionEachDay: 2.34,
        updatedAt: 1606078905916,
      },
    ],
  },
  Iowa: {
    medianAge: 38.2,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 685,
        lastWeekAverageDeathPerMillionEachDay: 8.25,
        updatedAt: 1606078905916,
      },
    ],
  },
  New_Mexico: {
    medianAge: 38.1,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 644,
        lastWeekAverageDeathPerMillionEachDay: 9.57,
        updatedAt: 1606078905916,
      },
    ],
  },
  Oklahoma: {
    medianAge: 36.7,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 410,
        lastWeekAverageDeathPerMillionEachDay: 4.05,
        updatedAt: 1606078905916,
      },
    ],
  },
  Kentucky: {
    medianAge: 38.9,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 399,
        lastWeekAverageDeathPerMillionEachDay: 4.03,
        updatedAt: 1606078905916,
      },
    ],
  },
  Massachusetts: {
    medianAge: 39.4,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 1522,
        lastWeekAverageDeathPerMillionEachDay: 4.06,
        updatedAt: 1606078905916,
      },
    ],
  },
  West_Virginia: {
    medianAge: 42.7,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 367,
        lastWeekAverageDeathPerMillionEachDay: 6.7,
        updatedAt: 1606078905916,
      },
    ],
  },
  Maryland: {
    medianAge: 38.8,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 730,
        lastWeekAverageDeathPerMillionEachDay: 6.04,
        updatedAt: 1606078905916,
      },
    ],
  },
  North_Dakota: {
    medianAge: 35.2,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 1094,
        lastWeekAverageDeathPerMillionEachDay: 20.99,
        updatedAt: 1606078905916,
      },
      {
        allDeathPerMillion: 1298,
        lastWeekAverageDeathPerMillionEachDay: 17.06,
        updatedAt: 1607101259000,
      },
      {
        allDeathPerMillion: 1608,
        lastWeekAverageDeathPerMillionEachDay: 17.06,
        updatedAt: 1608310859000,
      },
    ],
  },
  Arkansas: {
    medianAge: 38.3,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 774,
        lastWeekAverageDeathPerMillionEachDay: 8.3,
        updatedAt: 1606078905916,
      },
    ],
  },
  Mississippi: {
    medianAge: 37.7,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 1229,
        lastWeekAverageDeathPerMillionEachDay: 5.38,
        updatedAt: 1606078905916,
      },
    ],
  },
  Utah: {
    medianAge: 31,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 245,
        lastWeekAverageDeathPerMillionEachDay: 3.43,
        updatedAt: 1606078905916,
      },
    ],
  },
  Tennessee: {
    medianAge: 38.8,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 617,
        lastWeekAverageDeathPerMillionEachDay: 7.02,
        updatedAt: 1606078905916,
      },
    ],
  },
  Oregon: {
    medianAge: 39.4,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 194,
        lastWeekAverageDeathPerMillionEachDay: 1.9,
        updatedAt: 1606078905916,
      },
    ],
  },
  Hawaii: {
    medianAge: 39.2,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 163,
        lastWeekAverageDeathPerMillionEachDay: 0.71,
        updatedAt: 1606078905916,
      },
    ],
  },
  Alabama: {
    medianAge: 39.2,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 705,
        lastWeekAverageDeathPerMillionEachDay: 6.12,
        updatedAt: 1606078905916,
      },
    ],
  },
  Idaho: {
    medianAge: 36.6,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 474,
        lastWeekAverageDeathPerMillionEachDay: 6.74,
        updatedAt: 1606078905916,
      },
    ],
  },
  District_Of_Columbia: {
    medianAge: 34,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 949,
        lastWeekAverageDeathPerMillionEachDay: 1.418,
        updatedAt: 1606078905916,
      },
    ],
  },
  New_Hempshire: {
    medianAge: 43,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 374,
        lastWeekAverageDeathPerMillionEachDay: 1.47,
        updatedAt: 1606078905916,
      },
    ],
  },
  Alaska: {
    medianAge: 34.6,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 138,
        lastWeekAverageDeathPerMillionEachDay: 0.81,
        updatedAt: 1606078905916,
      },
    ],
  },
  Maine: {
    medianAge: 44.9,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 129,
        lastWeekAverageDeathPerMillionEachDay: 0.74,
        updatedAt: 1606078905916,
      },
    ],
  },
  Vermont: {
    medianAge: 42.8,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 101,
        lastWeekAverageDeathPerMillionEachDay: 0.91,
        updatedAt: 1606078905916,
      },
    ],
  },
  Connecticut: {
    medianAge: 41,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 1354,
        lastWeekAverageDeathPerMillionEachDay: 3.65,
        updatedAt: 1606078905916,
      },
    ],
  },
  Louisiana: {
    medianAge: 37.2,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 1341,
        lastWeekAverageDeathPerMillionEachDay: 3.44,
        updatedAt: 1606078905916,
      },
    ],
  },
  Rhode_Island: {
    medianAge: 40.1,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 1221,
        lastWeekAverageDeathPerMillionEachDay: 4.76,
        updatedAt: 1606078905916,
      },
    ],
  },
  Delaware: {
    medianAge: 40.7,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 766,
        lastWeekAverageDeathPerMillionEachDay: 1.02,
        updatedAt: 1606078905916,
      },
    ],
  },
  Kansas: {
    medianAge: 36.9,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 484,
        lastWeekAverageDeathPerMillionEachDay: 7.56,
        updatedAt: 1606078905916,
      },
    ],
  },
  Nebraska: {
    medianAge: 36.6,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 464,
        lastWeekAverageDeathPerMillionEachDay: 9.32,
        updatedAt: 1606078905916,
      },
    ],
  },
  Washington: {
    medianAge: 37.7,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 346,
        lastWeekAverageDeathPerMillionEachDay: 1.97,
        updatedAt: 1606078905916,
      },
    ],
  },
  Wyoming: {
    medianAge: 38,
    flag: usa,
    dataPoints: [
      {
        allDeathPerMillion: 304,
        lastWeekAverageDeathPerMillionEachDay: 8.65,
        updatedAt: 1606078905916,
      },
    ],
  },
  London: {
    medianAge: 35.3,
    flag: united_kingdom,
    dataPoints: [
      {
        allDeathPerMillion: 1076,
        lastWeekAverageDeathPerMillionEachDay: 2.54,
        updatedAt: 1606305837,
      },
    ],
  },
  King_County: {
    medianAge: 37.1,
    flag: united_kingdom,
    dataPoints: [
      {
        allDeathPerMillion: 392,
        lastWeekAverageDeathPerMillionEachDay: 9.88,
        updatedAt: 1606305837,
      },
    ],
  },
};