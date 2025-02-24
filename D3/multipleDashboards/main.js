// main.js

// Global variables used by our modules.
let globalData;
let currentVenue = "total"; // default filter: "total" means across all venues

// Assume CSV data has columns: Day, venue, actual, projected.
// For example:
// Day,venue,actual,projected
// 2023-02-01,v1,100,120
// 2023-02-01,v2,90,100
// 2023-02-01,v3,150,160
// 2023-02-02,v1,110,130
// ...

// Load CSV data.
d3.csv("data.csv").then(data => {
  // Convert numerical values.
  data.forEach(d => {
    d.actual = +d.actual;
    d.projected = +d.projected;
    // You may leave d.Day as a string if the CSV day format (e.g., "2023-02-01") works for your ordering.
  });
  globalData = data;
  
  // Create dynamic filter buttons.
  createButtons(data);
  
  // Initial update for all visuals.
  updateAll(currentVenue);
}).catch(error => console.error("Error loading CSV:", error));

// When a filter button is clicked, update all visualizations.
function updateAll(venue) {
  currentVenue = venue;
  updateChart1(venue, globalData);
  updateTable1(venue, globalData);
  updateChart2(venue, globalData);
  updateTable2(venue, globalData);
}
