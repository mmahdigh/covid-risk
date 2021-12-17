# Covid Event Risk Calculator

<b> THIS TOOL IS NO LONGER MAINTAINED AND UPDATED WITH NEW DATA. </b>

Available at: https://mmahdigh.github.io/covid-risk/

It's very likely that there's an indoor event or party you don't want to miss 
but you also can't shrug off the possibility of contracting Covid19.

This very small app helps you determine how risky events of different sizes 
are in different regions of the world.

Currently we cover 3700 regions all over the world. We update the data using
JHU CSSE COVID-19 Data (https://github.com/CSSEGISandData/COVID-19) consistently.


# How can you help?

Reporting bugs, opening issues and sending PRs are very welcome.

Currently median age data regarding US counties aren't accurate, every 
county is having the same median age data as the state it's located in.
having people who correct this data and maintain other data would be 
very useful.

# How is the probability calculated?

It's basically a Binomial distribution when we're looking for all the n people not to be infectious.

There are some important premises:
- 40% of cases are asymptomatic.
- symptomatic cases after their incubation period refrain from participating in gatherings.
- cases are infectious up to 12 days after showing symptoms.
- IFR of the US is 0.0065 per CDC report.
- Other regions' IFR are calculated based on the US IFR and their median age. (https://www.imperial.ac.uk/mrc-global-infectious-disease-analysis/covid-19/report-34-IFR/) 

<b> I also fully welcome the idea that people with expertise in software development, statistics or epidemiology join this effort to make a more accurate and useful app together. </b>

# Incoming features

- tiding up the code because it was rapidly developed. (adding linter as a first step)
- add vaccine data and incorporate it in our model 
- better and more user-friendly UX and UI.
- detailed results. (like the probability that there are two (or 3, 4, etc) covid cases in an event)
- writing tests. (primarily for the logic)
- whatever you find interesting!
