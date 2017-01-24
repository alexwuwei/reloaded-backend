'use strict';

const bodyParser = require('body-parser');
const Seller = require(__dirname + '/../models/sellers-model');


module.exports = (apiRouter) => {
  apiRouter.route('/sellers')
    .get((req, res) => {
      console.log('GET route hit for /sellers');
    })
    .post((req, res) => {
      console.log('POST route hit for /sellers');
    });

  apiRouter.route('sellers/:id')
    .get((req, res) => {
      console.log('GET route hit for /sellers/:id');
    })
    .put((req, res) => {
      console.log('PUT route hit for /sellers/:id');
    })
    .delete((req, res) => {
      console.log('DEL route hit for /sellers/:id');
    })
}
