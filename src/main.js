// import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './App.css';
import 'bootstrap';

$(document).ready(() => {
    $('#table').hide();

    $('#searchForm').on('submit', (event) => {
        event.preventDefault();
        $('#table').show();
        let searchString = $('#searchString').val();
        getMovies(searchString);
    });

    // $('#moreDetails').on('click', movieSelected());

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
                <td id="moreDetails"> <a  class="btn btn-warning" onclick="movieSelected('${movie.imdbID}')" >More Details</a></td>
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
    alert(1);
    sessionStorage.setItem('movieId', id);
    return false;
}



