// import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';



$(document).ready(() => {
    $('#searchForm').on('submit', (event) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        event.preventDefault();
    });
});


function getMovies(searchText) {
    // call API with activatec api key
    axios.get('http://www.omdbapi.com/?s='+searchText+'&apikey=1ddd3fff')
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
        console.log(err);
    });

}
