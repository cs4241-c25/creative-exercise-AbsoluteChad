import { race } from "https://cdn.jsdelivr.net/npm/racing-bars";

function setupRace(allData) {
    // configure options
    const options = {
        title: "COVID-19 Deaths by U.S. State",
        subTitle: "February 2020 to March 2023",
        caption: "Source: New York Times",
        dateCounter: "MMM DD, YYYY",
        showIcons: true,
        labelsPosition: "outside",
        topN: 30,
        height: "window*0.9",
        labelsWidth: 200
    };

    // start race
    race(allData, "#visualization", options);
}

window.onload = async function() {
    const response = await fetch("/data")
    const allData = await response.json()
    setupRace(allData)
}