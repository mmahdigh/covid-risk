import React, { useEffect, useRef, useState } from "react";
import people from "./icons/people.svg";
import Axios from 'axios'
import locationIcon from "./icons/location.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Select, Slider } from "antd";
// import { RegionData } from "./logic/data";
// import { calcRegionName } from "./utils/index";
import { RefSelectProps } from "antd/lib/select";
// import { contractionChanceRegion } from "./logic/main";
// import { trivia, TriviaPercentage,  } from './logic/trivia'; 
import { createUseStyles } from "react-jss";
import { RiskChart, timeStampToDate } from "./RiskChart";
import { availableRegions } from "./regions";
// import { RegionCovidData } from "./logic/regionData";
// import { getAllData } from "./logic/data/index";

const { Option } = Select;

const useStyles = createUseStyles({
  mainContainer: {
    display: "flex",
    justifyContent: 'space-evenly',
    minHeight: "calc(100vh - 300px)",
  },
  resultAndChart: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  inputCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // font-family: apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,
    width: 700,
    /* margin: auto; */
    justifyContent: 'space-between',
    backgroundColor: "rgb(250, 250, 250)",
    height: 500,
  },
  title: {
    marginTop: 25, 
    color: '#fff'
  },
  rowContainer: {
    display: "flex",
    width: "80%",
    justifyContent: "space-around",
    marginTop: 50,
    paddingBottom: 25,
    borderBottom: "1px solid #ddd",
    '& > div': {
      display: "flex",
      alignItems: "center",
    },
    '& p': {
      margin: "auto 0",
      fontSize: 18,
    },
    '& img': {
      borderRadius: "80%",
    },
  },
  resultContainer: {
    display: 'flex',
    padding: "20px 0",
    justifyContent: 'space-evenly',
    width: '100%'
  },
  table: {
    width: 300,
    fontSize: 14,
    border: "1px solid #000",
    '&:nth-child(even)': {backgroundColor: "#f2f2f2"},
    '& td:hover': {backgroundColor: "#ddd"},
    '& th': {
      paddingTop: 12,
      paddingBottom: 12,
      textAlign: "center",
      backgroundColor: "#76cdb2",
      color: "#000",
    },
    '& td': {
      padding: "12px 0",
    },
  },
  select: {
    marginLeft: 15,
    width: 250,
  },
  slider: {
    marginLeft: "25px !important",
    width: 250,
  },
  '@media screen and (max-width: 600px)': {
    mainContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    inputCard: {
      width: "95%",
      height: 'initial',
      marginBottom: 50,
    },
    title: {
      fontSize: 24,
      margin: 'auto',
    },
    resultAndChart: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    resultContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    select: {
      width: 175,
    },
    slider: {
      width: 175,
    }
  },
})

type Result = {
  risk: number;
  time: string;
}[]

const DefaultEventSize = 5;
function App() {
  const [location, setLocation] = useState<string[]>([]);
  const [eventSize, setEventSize] = useState(DefaultEventSize)
  const [result, setResult] = useState<Result>();

  const selectRef = useRef<RefSelectProps | null>();

  const classes = useStyles()

  const handleChange = (val: string[]) => {
    if (!val.length) {
      setLocation([]);
      return;
    }
    setLocation([val[0]]);
    selectRef.current?.blur();
  };

  const handleSliderChange = (size: number) => setEventSize(size);

  const handleButtonSubmit = async () => {
    const newResult = await Axios.post<Result>('https://api-covid.iran.liara.run', {
      number: eventSize,
      location: location[0]
    })
    setResult(newResult.data)
  }

  const startOver = () => {
    setResult(undefined);
  }

  return (
    <div className="App">
      <header style={{display: 'flex', flexDirection: 'row',marginBottom: 50, justifyContent: 'space-evenly', height: 100, width: "100%", backgroundColor: "#000"}}>
        <div style={{margin: "auto 50px"}}>
          <span style={{color: '#fff', verticalAlign:"super", marginRight: 5}}> Support: </span>
          <a className="github-button" 
          href="https://github.com/mmahdigh/covid-risk" data-icon="octicon-star" 
          data-size="large" 
          data-show-count="true"
          aria-label="Star mmahdigh/covid-risk on GitHub">Star</a>
        </div>
        <h1 className={classes.title}> Covid Event Risk Calculator </h1>
      </header>
      <div className={classes.mainContainer}>
        <div style={{ boxShadow: result === undefined ? "1px 1px 10px 1px rgb(180, 204, 248)" :
      "1px 1px 10px 1px #19cb94"}} className={classes.inputCard}>
        {result !== undefined &&
        <>
          <div style={{display: 'flex', fontSize: 30, color: "#0e6449",fontWeight: 650, padding: "12px 25px"}}>
            <p style={{marginBottom: 0}}> {`Risk of ${eventSize} people gathering in ${location}:`} </p>
          </div>
          <div className={classes.resultAndChart}>
            <div className={classes.resultContainer}>
              <div style={{color: `rgb(${Math.min(256, Number(result[result.length - 1]) * 5)}, 0, 0)`}} className="result">
                <p id="result"> {`${(result[result.length - 1].risk * 100).toFixed(2)}%`} </p>
              </div>
            </div>
            <RiskChart risks={result.map((item) => ({risk: parseFloat((item.risk * 100).toFixed(2)), time: item.time.split(" ")[0]}))} />
          </div>
          <button onClick={startOver} className="startOver">
            Start Over!
          </button>
        </>
        }
        {result === undefined && <> <div className={classes.rowContainer}>
             <div>
              <p> Event Size: </p>
              <Slider max={250} className={classes.slider}  
               tooltipVisible 
               defaultValue={DefaultEventSize}
               onAfterChange={handleSliderChange}
               />
            </div>
            <img src={people} width={50} />
          </div>
          <div className={classes.rowContainer}>
            <div>
              <p> Location: </p>
              <Select
                mode="multiple"
                className={classes.select}
                placeholder="Type One Country/Province/State"
                value={location}
                ref={(ref) => (selectRef.current = ref)}
                onChange={handleChange}
                optionLabelProp="label"
              >
                {availableRegions.map((region) => {
                  return (
                    <Option key={region} value={region}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {region}
                        {/* <span role="img" aria-label="China">
                          <img width={25} src={region.flag} />
                        </span> */}
                      </div>
                    </Option>
                  );
                })}
              </Select>
            </div>
            <img src={locationIcon} width={50} />
          </div>
          <button onClick={handleButtonSubmit} className="riskButton"> Calculate </button> </>}
          </div>
      <div className="info">
        <p style={{fontWeight: 700}}> This calculator predicts the chance that there's already at least one
          person infected with Covid19 in an event or party.
        </p>
        <p> Since testing capacity isn't the same all over the world,
          number of cases reported by different governments isn't accurate,
          hospitalization and death counts are better indicator of how Covid 
          is harming a region. in this calculator, we use death count to predict 
          the number of cases in a region </p>
        <p> We've presumed that 40% of cases are asymptomatic and symptomatic
          cases refrain from participating in events and parties. 
        <p> IFR of different countries and regions are predicted 
        using their median age and IFR of the US published by CDC. </p>
        </p>
      </div>
      </div>
      <footer style={{position: 'relative',height: 100, width: "100%", backgroundColor: "#000", marginTop: 50, padding: 25}}>
        <p style={{margin: "auto", color: '#fff'}}>  ALL RIGHTS RESERVED. COPYRIGHT © 2020. </p>
      </footer>
    </div>
  );
}

export default App;
