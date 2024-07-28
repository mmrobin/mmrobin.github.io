import * as d3 from "https://d3js.org/d3.v5.min.js";

console.log("Is this gonna fuckin work?");

console.log("Retrieving dataset as csv");
// import both datasets from csv files
d3.csv("/data/Coffee_import.csv", function(data){
    for (var i = 0; i < data; i++) {
        console.log(data[i]);
    }
});

// d3.csv("/data/Coffee_importers_consumption.csv")