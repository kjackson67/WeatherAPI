// *** PROJECT OVERVIEW ***
// To create an application that can update a UI and make requests to the API for being able to check both local and global weather information and details.  This app can be utilized so that people can be informed of what the weather will be like for the day(s) as well as if traveling and will be able to render a different locations weather forecast.  This app will let a user to enter into their current locations daily forecast for a quick detailed overview. 

// const { useReducer } = require("react")

// The group used the approach of wireframe using Lucidchart utilizing a snapshot program to capture what we wanted our product to look like - both home page and details page (this can be found in /Planning/WeatherAPI Website blockframe - Home page.png and /Planning/WeatherAPI Website blockframe - details page.png).  A data flow diagram was also created detailing our Home Page(App.js) flowing into the Weather informations page(weatherinfo.js and forecastdetail.js) as well tying a navigation bar to both home and details pages.


// ** USER STORIES **
// As a user, I want to be able to go into the weather site UI.
// As a user, I want to be able to see my local weather forecast.
// As a user, I want to be able to type in a location and click a button to get that locations weather.
// As a user, I want to be able to click a button to take me to my current conditions and daily forecast for my location.
// As a user, I want to be able to check local weather anywhere globally.
// As a user, I want to be able to see what my day will look like, if it will be sunny, cloudy, rainy by visually seeing an icon.
// As a user, I want to be able to see what the tempature really feels like.
// As a user, I want to be able to see global location forecasts for traveling or just wanting to check other areas weather.
// As a user, I want to be able to go back to the home page.

// ** TECHNOLOGIES UTILIZED **
// A front-end React application using dependencies pulled from Axios,     REACT-Bootstrap, REACT-DOM, REACT-Router and REACT-Scripts.
// Weatherbit.io API
// WeatherUndergound.com for sample of site tools utilized.
// GitHub.com repository
// Heroku for pushing into production.
// MVC executed for file structures - Models, Views and Controllers.

// ** INSTALL INSTRUCTIONS **
// Fork and clone project repo
// Install any dependencies mentioned above
// Confirm by checking package.json under "dependencies" under the "name" of the Appp at top of page.
// open up VSCode - code . in terminal
// also start browser using "npm run start" to get into the app.

//  ** ADDITIONAL RESOURCES UTILIZED **
// Google, StackOverflow, Grepper, cssreference.io, developer.mozilla.org, w3schools.com

// ** STRUGGLES **
// As always one of the biggest struggles was page layouts using CSS.
// Trying to utilize two different calls into the same page for "astronomy" on our forecast details page of sun rise/sets and moon crescents and rise/sets.  Sun JSON response was in current weather API and moon phases was in weather forecasts API.
// Using many classnames that were similar to other folder .js classnames caused some mis-happs when running CSS in each file rather than having one centralized CSS file for all layout functions.
// The App.js file was not utilized as much for the rendering of child files 