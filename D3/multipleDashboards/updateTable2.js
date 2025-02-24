// updateTable2.js

// Build Table2: Cumulative data table for selected venue.
function updateTable2(venue, data) {
    // Group by Day.
    let dailyData = d3.groups(data, d => d.Day)
      .map(([day, records]) => {
        let actual, projected;
        if (venue === "total") {
          actual = d3.sum(records, d => d.actual);
          projected = d3.sum(records, d => d.projected);
        } else {
          let filtered = records.filter(d => d.venue === venue);
          actual = d3.sum(filtered, d => d.actual);
          projected = d3.sum(filtered, d => d.projected);
        }
        return { day: day, actual: actual, projected: projected };
      });
    
    dailyData.sort((a, b) => a.day.localeCompare(b.day));
    
    // Compute cumulative sums.
    let cumulativeData = [];
    let cumActual = 0, cumProjected = 0;
    dailyData.forEach(d => {
      cumActual += d.actual;
      cumProjected += d.projected;
      let ratio = cumProjected === 0 ? 0 : (cumActual / cumProjected).toFixed(2);
      cumulativeData.push({ day: d.day, actual: cumActual, projected: cumProjected, ratio: ratio });
    });
    
    let container = d3.select("#table2");
    container.selectAll("*").remove();
    container.append("h3").text("Cumulative Data for " + venue.toUpperCase());
    
    let table = container.append("table");
    let thead = table.append("thead");
    let tbody = table.append("tbody");
    
    let columns = ["Day", "Cumulative Actual", "Cumulative Projected", "Ratio"];
    
    thead.append("tr")
      .selectAll("th")
      .data(columns)
      .enter()
      .append("th")
      .text(d => d);
    
    let rows = tbody.selectAll("tr")
      .data(cumulativeData)
      .enter()
      .append("tr");
    
    rows.selectAll("td")
      .data(d => [d.day, d.actual, d.projected, d.ratio])
      .enter()
      .append("td")
      .text(d => d);
  }
  