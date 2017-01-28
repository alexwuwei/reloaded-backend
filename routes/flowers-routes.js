'use strict';

const bodyParser = require('body-parser');
const Flower = require(__dirname + '/../models/flowers-model');


module.exports = (apiRouter) => {
  apiRouter.route('/flowers')
    .get((req, res) => {
      console.log('GET route hit for /flowers');
      // Flower.find({}).populate('products').exec((err, flowers) => {
      //   res.json(flowers);
      // });
      res.end();
    })
    .post((req, res) => {
      console.log('POST route hit for /flowers');
      var newFlower = new Flower(req.body);
    newCustomer.save((err, flower) => {
      res.json(flower);
    });
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
};
