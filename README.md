## CS4241 Creative Assignment - COVID-19 Visualizer: Deaths by U.S. State
Vivek Voleti <br>
https://creative-exercise-absolutechad.glitch.me

For the creative assignment, I created a data visualization project that uses a bar-race to show the number of COVID-related deaths by U.S. State (including various territories: Puerto Rico, D.C., Guam, etc.). I used the [racing-bars JS library](https://github.com/hatemhosny/racing-bars), which is a wrapper on the `D3.js` library. From [this playground example](https://racing-bars.hatemhosny.dev/playground), I changed some of the options to fit my website (e.g. dimensions, number of bars shown, etc.), and added code to retrieve the data from the server. The server simply serves the `index.html` page and sends all the data on the `/data` route.

I used [this dataset](https://raw.githubusercontent.com/nytimes/covid-19-data/refs/heads/master/us-states.csv) from the New York Times. Each record contains a date, a state/territory (and their respective FIPS code), the number of cumulative cases recorded, and the number of cumulative deaths recorded. I took this data, converted it to `JSON` format, removed the unnecessary info to trim down the size, and renamed some variables to fit the requirements of the `racing-bars` library. 

Additionally, the library seems to have a bug where bars that start at the value `0` don't get rendered properly once they increasee in value - some of the bars would render halfway across the screen, which obviously isn't ideal. To fix, I just deleted the data entries that logged `0` deaths to avoivd this problem entirely.