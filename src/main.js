// import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './App.css';
import 'bootstrap';

$(document).ready(() => {
    $('#searchForm').on('submit', (event) => {
        event.preventDefault();

        let searchString = $('#searchString').val();
        getMovies(searchString);
    });
});

function getMovies(searchString) {

    const apiKey = '&apikey=1ddd3fff';
    const encodedKey = encodeURI(apiKey);

    axios.get('http://www.omdbapi.com/?s='+searchString+encodedKey)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
                <tr>
                <td>${movie.Title}</td>
                <td>${movie.Year}</td>
                <td>${movie.Type}</td>
                <td> <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">More Details</td>
                </tr>
        `;
            });

            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}


function movieSelected(id){
    console.log('movieSelefted ' +id)
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}


function getMovie(){
    let movieId = sessionStorage.getItem('movieId');

    axios.get('http://www.omdbapi.com?i='+movieId+'&apikey=1ddd3fff')
        .then((response) => {
            console.log(response);
            let movie = response.data;

            let output =`
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;

            $('#movie').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}
