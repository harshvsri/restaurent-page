import LandingPage from "./landing.js";
import MenuPage from "./menu.js";

function NavBar() {
  const contentContainer = document.querySelector("#content");

  const navBar = document.createElement("div");
  navBar.classList.add("navbar");

  const navList = document.createElement("ul");

  const navListItems = ["Home", "Menu", "Contact"];

  navListItems.forEach((item) => {
    const navItem = document.createElement("li");
    navItem.textContent = `${item}`;
    navList.appendChild(navItem);
  });

  navBar.appendChild(navList);
  contentContainer.appendChild(navBar);

  // Handle the navigation item click events and load the corresponding page
  const navItems = document.querySelectorAll("li");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Load the appropriate page based on the selected navigation item.
      const page = item.textContent.toLowerCase();
      switch (page) {
        case "home":
          clearContent();
          LandingPage();
          break;
        case "menu":
          clearContent();
          MenuPage();
          break;
        default:
          break;
      }
    });
  });

  /* The clearContent() function removes dynamically added content from the contentContainer,
  while preserving the navbar element. */

  function clearContent() {
    const children = contentContainer.childNodes;
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      if (!child.classList.contains("navbar")) {
        contentContainer.removeChild(child);
      }
    }
  }
}

export default NavBar;
