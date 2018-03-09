// import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './App.css';
import 'bootstrap';

$(document).ready(() => {
    sessionStorage.clear();
    $('#table').hide();

    $('#searchForm').on('submit', (event) => {
        event.preventDefault();
        $('#table').show();
        let searchString = $('#searchString').val();
        sessionStorage.setItem('searchString', `${searchString}`)
        getMovies(searchString);
    });

});

function getMovies(searchString) {

    const apiKey = '&apikey=1ddd3fff';
    const encodedKey = encodeURI(apiKey);

    axios.get('http://www.omdbapi.com/?s='+searchString+encodedKey)
        .then((response) => {

            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
                <tr>
                <td>${movie.Title}</td>
                <td>${movie.Year}</td>
                <td>${movie.Type}</td>
                <td id="details"> <a  class="btn btn-warning" onclick="sessionStorage.setItem('movieId', '${movie.imdbID}'); return false;"  >More Details</a></td>
                </tr>
        `;
            });
            $('#movies').html(output);
            $('#details').on('click', getMovie)
        })
        .catch((err) => {
            console.log(err);
        });
}


function getMovie(){
    let movieId = sessionStorage.getItem('movieId');

    const apiKey = '&apikey=1ddd3fff';
    const encodedKey = encodeURI(apiKey);

    axios.get('http://www.omdbapi.com?i='+movieId+encodedKey)
        .then((response) => {
            let movie = response.data;

            let output =`
     <div class="metaInfo">
       <h2>${movie.Title}</h2>
        <div class="row">
          <div class="col-md-4">
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank">
            <img src="${movie.Poster}"></a>
          </div>
          <div class="col-md-8">
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
              <li class="list-group-item"><strong>Plot:</strong> ${movie.Plot}</li>
            </ul>
             <div class="row">
            <button id="backButton" href="index.html" class="btn btn-outline-secondary btn-sx">Go Back To Search</button>
        </div>

          </div>
        </div>
        </div>
      `;
            $('#searchArea').hide();
            $('#movieInfo').html(output);
            $('#backButton').on('click', reset)

        })
        .catch((err) => {
            console.log(err);
        });
};

function reset() {
    $('#movieInfo').hide();
    let searchString = sessionStorage.getItem('searchString')
    getMovies(searchString);
    $('#searchArea').show();
};

