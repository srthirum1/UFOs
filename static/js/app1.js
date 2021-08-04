const tableData = data;
console.log("tableData")
console.log(tableData)
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(mydata) {
    // First, clear out any existing data
    tbody.html("");
  
    
    mydata.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
     
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
 
  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    console.log("date")
    console.log(date)
    
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);