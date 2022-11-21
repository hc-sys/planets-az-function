'use strict';

module.exports.get = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  
  context.res = {
      status: 200,
      body: context.bindings.record
  };

  
};
