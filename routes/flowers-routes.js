'use strict';

const bodyParser = require('body-parser');
const Flower = require(__dirname + '/../models/flowers-model');


module.exports = (apiRouter) => {
  apiRouter.route('/flowers')
    .get((req, res) => {
      console.log('GET route hit for /flowers');
    })
    .post((req, res) => {
      console.log('POST route hit for /flowers');
    });

  apiRouter.route('flowers/:id')
    .get((req, res) => {
      console.log('GET route hit for /flowers/:id');
    })
    .put((req, res) => {
      console.log('PUT route hit for /flowers/:id');
    })
    .delete((req, res) => {
      console.log('DEL route hit for /flowers/:id');
    })
}
