function LandingPage() {
  const contentContainer = document.querySelector("#content");

  const landingPage = document.createElement("div");
  landingPage.classList.add("landing-page");

  const outletName = document.createElement("div");
  outletName.classList.add("outlet-name");
  outletName.textContent = "HARSH'S FOOD OUTLET";
  landingPage.appendChild(outletName);

  const img = document.createElement("img");
  img.src = "../assets/51680.jpg";
  landingPage.appendChild(img);

  //Table
  const tableContainer = document.createElement("div");
  tableContainer.classList.add("timings");
  // Define the data for the table
  const data = [
    ["Day", "Opening Time", "Closing Time"],
    ["Monday", "10:00 AM", "10:00 PM"],
    ["Tuesday", "10:00 AM", "10:00 PM"],
    ["Wednesday", "10:00 AM", "10:00 PM"],
    ["Thursday", "10:00 AM", "10:00 PM"],
    ["Friday", "10:00 AM", "12:00 AM"],
    ["Saturday", "09:00 AM", "12:00 AM"],
    ["Sunday", "09:00 AM", "10:00 PM"],
  ];

  // Create the table element
  const table = document.createElement("table");
  table.id = "openingHours";

  // Create table rows and cells based on the data
  data.forEach((rowData) => {
    const row = document.createElement("tr");

    rowData.forEach((cellData) => {
      const cell = document.createElement("td");
      cell.textContent = cellData;
      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  // Append the table to the container
  tableContainer.appendChild(table);
  landingPage.appendChild(tableContainer);

  contentContainer.appendChild(landingPage);
}

export default LandingPage;
