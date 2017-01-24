'use strict';

const bodyParser = require('body-parser');
const Badge = require(__dirname + '/../models/badges-model');


module.exports = (apiRouter) => {
  apiRouter.route('/badges')
    .get((req, res) => {
      console.log('GET route hit for /badges');
    })
    .post((req, res) => {
      console.log('POST route hit for /badges');
    });

  apiRouter.route('badges/:id')
    .get((req, res) => {
      console.log('GET route hit for /badges/:id');
    })
    .put((req, res) => {
      console.log('PUT route hit for /badges/:id');
    })
    .delete((req, res) => {
      console.log('DEL route hit for /badges/:id');
    })
}
