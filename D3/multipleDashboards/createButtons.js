// createButtons.js

// Create a button for each unique venue plus one for "total" (aggregated).
function createButtons(data) {
    // Get unique venues.
    let venues = Array.from(new Set(data.map(d => d.venue)));
    venues.sort();
    let filters = ["total"].concat(venues);
    
    d3.select("#buttons")
      .selectAll("button")
      .data(filters)
      .enter()
      .append("button")
      .text(d => d.toUpperCase())
      .on("click", (event, d) => {
        updateAll(d);
      });
  }
  