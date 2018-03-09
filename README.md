
## Purpose

I have been tasked with creating a simple web app that will utilize a common API to retrieve and resent data in a meaningful way.


## Requirements

- Create a web app in any framework of your choosing (react, angular, vue, etc)

- Have the browser client app hit against IMDB APIs (there are several “free” options online and may require a key)

- Display a list of at least 5 movies of any kind and display: Title, Year, and some other piece of meta-information (e.g. Metascore or Genre)

- Sort the list of movies by at least two different fields if not all of them

- Click on the title or row of each movie to get to another page where more metadata on the movie is displayed. Any additional data you decide to display on the details page for the movie is fine, but it must include movie poster image.

- Consider menu navigation when hitting back from display details to list

- Deliver solution as runnable code in a public repository - GitHub works fine for this

- Include any build instructions if necessary (node, npm, webpack, etc)

- Don’t get too hung-up on UI/design though bonus points if it looks half-way decent


## Wireframe
![picture](src/images/wireframe.png)

## Build Instructions
1) obtaining this repository from github
2) Install dependencies
    npm install
3) start local development App
    npm start

## Front End Framework

My Front-End framework of choice is React. However, eventhough the framework has been set up, I app does not yet utilize React components. I intend to followup and make this happen.

The following commands were executed to create my React App:

```js
npx create-react-app movieSearch
cd movieSearch
npm start
```

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## API

The Open Movie Database (OMDb) API is used to return data in JSON from the Internet Movie Database (IMDb). This OMDb API allows users to search for movies by title, IMDb identifier, date released, season or episode, among other information.
See the API documentation for more info. (http://www.omdbapi.com/)

Note that though this API has a free version, an API key is required.


## Axios

This promised-based HTTP client was used to make API calls to IMDb.

## sorttable

https://www.kryogenix.org/code/browser/sorttable/

1) obtain javascript Library
npm install --save sorttable

2) Reference the library:
import 'sorttable';

3) Add class to table level:
<table className="sortable">

4) Add styling
```css
/* Sortable tables */
table.sortable thead {
    background-color:#eee;
    color:#666666;
    font-weight: bold;
    cursor: default;
}
```

