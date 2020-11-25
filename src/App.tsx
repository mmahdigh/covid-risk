import React, { useEffect, useRef, useState } from "react";
import people from "./icons/people.svg";
import locationIcon from "./icons/location.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Select, Slider } from "antd";
import { RegionCovidData, RegionData } from "./logic/data";
import { calcRegionName } from "./utils/index";
import { RefSelectProps } from "antd/lib/select";
import { contractionChanceRegion } from "./logic/main";
import { trivia, TriviaPercentage,  } from './logic/trivia';
import { createUseStyles } from "react-jss";

const { Option } = Select;

const useStyles = createUseStyles({
  mainContainer: {
    display: "flex",
    justifyContent: 'space-evenly',
    minHeight: "calc(100vh - 300px)",
  },
  inputCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // font-family: apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,
    width: 700,
    /* margin: auto; */
    backgroundColor: "rgb(250, 250, 250)",
    height: 400,
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
    ['& > div']: {
      display: "flex",
      alignItems: "center",
    },
    ['& p']: {
      margin: "auto 0",
      fontSize: 18,
    },
    ['& img']: {
      borderRadius: "80%",
    },
  },
  select: {
    marginLeft: 15,
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
      marginBottom: 50,
    },
    title: {
      fontSize: 24,
      margin: 'auto',
    },
    select: {
      width: 200,
    }

  },
})

const getTrivia = (result: number) => {
  if (result < 5 && result > 1) return trivia['1'][0]
  else return trivia[`${Math.min(50, (Math.floor(result / 5) + 1) * 5)}` as TriviaPercentage][0]
}

const DefaultEventSize = 5;
function App() {
  const [location, setLocation] = useState<string[]>([]);
  const [eventSize, setEventSize] = useState(DefaultEventSize)
  const [result, setResult] = useState<string>();

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

  const handleButtonSubmit = () => {
    setResult((contractionChanceRegion(location[0], eventSize) * 100).toFixed(2))
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
        <div style={{display: 'flex', flexDirection: 'column', width: "100%"}}>
          <div style={{fontSize: 24, color: "#0e6449",fontWeight: 500, padding: "12px 25px"}}>
            <p> Odds There Is One Person  </p>
            <p> Infected With Covid19 Is: </p>
          </div>
          <div style={{color: `rgb(${Math.min(256, Number(result) * 5)}, 0, 0)`, borderBottom: "2px solid #eee"}} className="result">
            <p id="result"> {`${result}%`} </p>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-evenly', 
          alignItems: 'center' ,fontSize: 14, color: "#fff",
          fontWeight: 500, padding: 25, backgroundColor: "#222"}}>
            <div>
              <p> It's close to the odds that  </p>
              <p> {getTrivia(Number(result))} </p>
            </div>
            <button onClick={startOver} className="startOver">
              Start Over!
            </button>
          </div>
        </div>
        }
        {result === undefined && <> <div className={classes.rowContainer}>
             <div>
              <p> Event Size: </p>
              <Slider max={250} className="slider"  tooltipVisible value={eventSize} 
              onChange={handleSliderChange} defaultValue={DefaultEventSize} />
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
                {Object.keys(RegionCovidData).sort().map((key) => {
                  const region = RegionCovidData[key];
                  return (
                    <Option key={key} value={key}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {calcRegionName(key)}
                        <span role="img" aria-label="China">
                          <img width={25} src={region.flag} />
                        </span>
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
        <p> This calculator predicts the odds that there's already at least one
          person infected with Covid19 in an event or party.
        </p>
        <p> Since testing capacity isn't distributed evenly in the world,
          number of cases reported by different governments isn't accurate,
          hospitalization and death counts are better indicator of how Covid 
          is harming a region. in this calculator, we use death count to predict 
          the number of cases in a region </p>
        <p> We've presumed that 50% of cases are asymptomatic and symptomatic
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
