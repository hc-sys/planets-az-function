'use strict';

const schema = require('./schemas');
const Joi = require('joi');

module.exports.create = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');  

  const data = req.body;
 
  Joi.validate(data, schema, (err, value) => {    
    if (err) {
      context.res = {
        status: 400,
        body: { 
          message: 'Invalid request data',
          data: data
        }
      };
    } else {
      const output = JSON.stringify(data);
      context.bindings.record = output; 
      context.log('Finish writing to CosmosDB');      
    }
  });
  
};
