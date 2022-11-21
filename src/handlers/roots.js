'use strict';

const axios = require('axios');

module.exports.roots = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');  

  try {
    const response = await axios.get(SWAPI_URL);
    let data = {
      personas : response.data.people,
      planetas : response.data.planets,
      peliculas : response.data.films, 
      especies : response.data.species,
      vehiculos : response.data.vehicles,
      naves : response.data.starships
    };
    context.res = {
      body : data
    }   
  } catch (error) {
    context.log(error);
  }
  
};
