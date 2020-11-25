# Covid Event Risk Calculator
It's very likely that there's an indoor event or party you don't want to miss 
but you also can't shrug off the possibility of contracting Covid19.

This very small app helps you determine how risky events of different sizes 
are in different regions of the world.

Currently we cover 95 regions all over the world. We update the data regarding these regions
consistently.

# Add A Region And Update The Data

It's clear that the smaller a region, the better the prediction but unfortunately
not all the countries report detailed stats for their cities so we need to rely on
the country-level stats (for those countries who do, it's a lot of work to single-handedly track the data for all their provinces, I need your help :) ) . so for example currently (11/25/20), Italy is experiencing 
another wave of Covid, but this time, south of Italy is affected too. whereas in the previous wave,
it harmed the north of the country the most.

In order to add a region, you need to go to src/logic/data.ts, add a region
and fill in the needed data (average daily deaths in the previous week per million, all time deaths per million, median age of the region). please attach source of your data in your pull request.
if you're not on Github, you can email me the above info. (mahdighajary@gmail.com)

# How is the probability calculated?

TBA. for the time being, you can read the code for yourself :)

# Incoming features

- tiding up the code because it was rapidly developed.
- better and more user-friendly UX and UI.
- detailed results. (like the probability that there are two (or 3, 4, etc) covid cases in an event)
- writing tests. (primarily for the logic)
- whatever you find interesting!
