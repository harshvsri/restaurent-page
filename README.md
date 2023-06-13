# Project Description

This project is a web application that implements a simple navigation system using HTML, CSS, and JavaScript. It allows users to switch between different pages without reloading the entire page. The project consists of the following components:

## NavBar Component

The `NavBar` component is responsible for rendering the navigation bar at the top of the page. It dynamically generates navigation items based on an array of predefined options. When a navigation item is clicked, it triggers an event to load the corresponding page.

## LandingPage Component

The `LandingPage` component represents the home page of the application. It displays information about a food outlet, including the outlet name, an image, and the opening hours in a table format.

## MenuPage Component

The `MenuPage` component represents the menu page of the application. It displays a list of menu items available at the food outlet.

## ContactPage Component

The `ContactPage` component represents the contact page of the application. It displays contact information for the food outlet.

## Page Navigation

When a navigation item is clicked in the navigation bar, the corresponding page component is loaded dynamically without reloading the entire page. This is achieved by manipulating the DOM using JavaScript. The existing content is cleared, and the new content is appended to the container element.

## Usage

To run the application, open the `index.html` file in a web browser. Click on the navigation items to switch between different pages.

## Development

To modify or extend the application, follow these steps:

1. Clone the project repository.
2. Make the desired changes to the HTML, CSS, and JavaScript files.
3. Test the changes locally by opening the `index.html` file in a web browser.
4. Deploy the modified application to a web server or hosting platform if necessary.

## Dependencies

The project has the following dependencies:

- HTML5
- CSS3
- JavaScript
