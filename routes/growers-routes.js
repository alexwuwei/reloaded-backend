'use strict';

const bodyParser = require('body-parser');
const Grower = require(__dirname + '/../models/growers-model');


module.exports = (apiRouter) => {
  apiRouter.route('/growers')
    .get((req, res) => {
      console.log('GET route hit for /growers');
    })
    .post((req, res) => {
      console.log('POST route hit for /growers');
    });

  apiRouter.route('growers/:id')
    .get((req, res) => {
      console.log('GET route hit for /growers/:id');
    })
    .put((req, res) => {
      console.log('PUT route hit for /growers/:id');
    })
    .delete((req, res) => {
      console.log('DEL route hit for /growers/:id');
    })
};
