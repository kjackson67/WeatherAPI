PROJECT OVERVIEW
To create an application that can update a UI and make requests to the API for being able to check both local and global weather information and details.  This app can be utilized so that people can be informed of what the weather will be like for the day(s) as well as if traveling and will be able to render a different locations weather forecast.  This app will let a user to enter into their current locations daily forecast for a quick detailed overview.

PROJECT PLANNING
The group used the approach of wireframe using Lucidchart utilizing a snapshot program to capture what we wanted our product to look like - both home page and details page (this can be found in /Planning/WeatherAPI Website blockframe - Home page.png and /Planning/WeatherAPI Website blockframe - details page.png).  A data flow diagram was also created detailing our Home Page(App.js) flowing into the Weather informations page(weatherinfo.js and forecastdetail.js) as well tying a navigation bar to both home and details pages.


USER STORIES
As a user, I want to be able to go into the weather site UI.
As a user, I want to be able to see my local weather forecast.
As a user, I want to be able to type in a location and click a button to get that locations weather.
As a user, I want to be able to click a button to take me to my current conditions and daily forecast for my location.
As a user, I want to be able to check local weather anywhere globally.
As a user, I want to be able to see what my day will look like, if it will be sunny, cloudy, rainy by visually seeing an icon.
As a user, I want to be able to see what the tempature really feels like.
As a user, I want to be able to see global location forecasts for traveling or just wanting to check other areas weather.
As a user, I want to be able to go back to the home page.


TECHNOLOGIES UTILIZED
A front-end React application using dependencies pulled from Axios,     REACT-Bootstrap, REACT-DOM, REACT-Router and REACT-Scripts.
Weatherbit.io API
WeatherUndergound.com for sample of site tools utilized.
GitHub.com repository
Heroku for pushing into production.
MVC executed for file structures - Models, Views and Controllers.

INSTALL INSTRUCTIONS
Fork and clone project repo
Install any dependencies mentioned above
Confirm by checking package.json under "dependencies" under the "name" of the Appp at top of page.
open up VSCode - code . in terminal
also start browser using "npm run start" to get into the app.

ADDITIONAL RESOURCES UTILIZED
Google, StackOverflow, Grepper, cssreference.io, developer.mozilla.org, w3schools.com, Postman
<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

STRUGGLES
As always one of the biggest struggles was page layouts using CSS.
Trying to utilize two different calls into the same page for "astronomy" on our forecast details page of sun rise/sets and moon crescents and rise/sets.  Sun JSON response was in current weather API and moon phases was in weather forecasts API.
Using many classnames that were similar to other folder .js classnames caused some mis-happs when running CSS in each file rather than having one centralized CSS file for all layout functions.
The App.js file was not utilized as much for the rendering of child files instead it was used to send data back into child files.
For Korby - being able to keep up with Brian and Scott in adding coding to files.

Future Enhancements
Have a fully usable astronomy of our sun and moon rise/set and phase times in current users standard time.
Being able to click on each days forecast to show houry or at least quarterly of the day's forecast.
Have a functional globall render of getting weather from any where around the globe and not show just a country code.
Have a drop-down or list of all cities, states, countries when type in a city and just click on the one looking for.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
