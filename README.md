[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ZZgHMM23)
Inclass Exercise - Creative Coding: Interactive Multimedia
===
For this in-class exercise, you will focus on client-side development using popular audio/graphics/visualization technologies. The goal of this assignment is to get aquainted with and explore some multimedia capabilities of the browser.

Requirements
---
Explore one of the four sites below or another Javascript/Typescript multimedia site of your choice. Take one of their examples, make a slight modification and get it to work using a simple back-end server (node.js, Express, NextJS) that serves just that example page(s). You may work with your teammates but each person has to create their own pages and their own unique code. The following lists some possibilities.

### SVG
 - Go through the [W3 Schools SVG Tutorial](https://www.w3schools.com/graphics/svg_intro.asp). Implement a web page that draws several different polygons in different colors using Canvas - the <canvas> tag. One of the polygons should include a color gradient. Create a button that when pressed changes either the size and/or position of a polygon. See [SVG Scripting](https://www.w3schools.com/graphics/svg_scripting.asp).
 - Add a simple animated SVG image to a web page. You may want to refer to [Add Animated SVGs to React](https://www.svgator.com/help/getting-started/add-animated-svgs-to-react-website)
### Canvas
- Go through the [W3 Schools Canvas Tutorial](https://www.w3schools.com/graphics/canvas_intro.asp). Implement a web page that draws text and several different polygons in different colors using Canvas - the <canvas> tag. One of the drawn items should include a color gradient.
### D3.js
- Create a single visualization using one of the techniques shown at [d3js.org](d3js.org). 
- Create a visualization using the one of the datasets found at [Awesome JSON Datasets](https://github.com/jdorfman/Awesome-JSON-Datasets).
### Web Audio API
- Create a screen-based musical instrument using the Web Audio API. You can use projects such as [Interface.js](http://charlie-roberts.com/interface/) or [Nexus UI](https://nexus-js.github.io/ui/api/#Piano) to provide common musical interface elements, or use dat.GUI in combination with mouse/touch events (use the Pointer Events API). If you want to use higher-level instruments instead of the raw WebAudio API sounds, consider trying the instruments provided by [Tone.js]() or [Gibber](https://github.com/charlieroberts/gibber.audio.lib).
### Three.js
- A generative algorithm creates simple agents that move through a virtual world. 
- A simple 3D game. You really want this to be super simple or it will be outside the scope of this exercise.
- An 3D audio visualization of a song of your choosing.

Deliverables
---
Do the following to complete this assignment:

1. Implement your project with the above requirements.
2. Test your project to make sure that when someone goes to your main page on Glitch/Heroku/etc., it displays correctly.
3. Ensure that your project has the proper naming scheme `creative-exercise-githubname` so we can find it.
4. Push your final solution to your GitHub repository and modify the README to the specifications below. 

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

## CS4241 Creative Assignment - COVID-19 Visualizer: Deaths by U.S. State
Vivek Voleti <br>
https://creative-exercise-githubname.glitch.me

For the creative assignment, I created a data visualization project that uses a bar-race to show the number of COVID-related deaths by U.S. State (including various territories: Puerto Rico, D.C., Guam, etc.). I used the [racing-bars JS library](https://github.com/hatemhosny/racing-bars), which is a wrapper on the `D3.js` library. From [this playground example](https://racing-bars.hatemhosny.dev/playground), I changed some of the options to fit my website (e.g. dimensions, number of bars shown, etc.), and added code to retrieve the data from the server. The server simply serves the `index.html` page and sends all the data on the `/data` route.

I used [this dataset](https://raw.githubusercontent.com/nytimes/covid-19-data/refs/heads/master/us-states.csv) from the New York Times. Each record contains a date, a state/territory (and their respective FIPS code), the number of cumulative cases recorded, and the number of cumulative deaths recorded. I took this data, converted it to `JSON` format, removed the unnecessary info to trim down the size, and renamed some variables to fit the requirements of the `racing-bars` library. 

Additionally, the library seems to have a bug where bars that start at the value `0` don't get rendered properly once they increasee in value - some of the bars would render halfway across the screen, which obviously isn't ideal. To fix, I just deleted the data entries that logged `0` deaths to avoivd this problem entirely.