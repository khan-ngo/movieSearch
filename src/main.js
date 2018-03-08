// import React, { Component } from 'react';
import $ from 'jquery';
// import axios from 'axios';



$(document).ready(() => {
    $('#searchForm').on('submit', (event) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        event.preventDefault();
    });
});


function getMovies(searchText) {
    console.log(searchText);
}
