function MenuPage() {
  const contentContainer = document.querySelector("#content");

  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuItems = [
    ["Paneer Tikka", 100],
    ["Chicken Tikka", 200],
    ["Rajma Chawal", 150],
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.textContent = `${item[0]}`;
    menu.appendChild(menuItem);
  });

  menuPage.appendChild(menu);
  contentContainer.appendChild(menuPage);
}

export default MenuPage;
