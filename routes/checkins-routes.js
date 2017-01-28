'use strict';

const bodyParser = require('body-parser');
const Checkin = require(__dirname + '/../models/checkins-model');


module.exports = (apiRouter) => {
  apiRouter.route('/checkins')
    .get((req, res) => {
      console.log('GET route hit for /checkins');
      // Checkin.find({}).populate('products').exec((err, checkins) => {
      //   res.json(checkins);
      // });
      res.end();
    })
    .post((req, res) => {
      console.log('POST route hit for /checkins');
      var newCheckin = new Checkin(req.body);
    newCustomer.save((err, event) => {
      res.json(event);
    });
    });

  apiRouter.route('checkins/:id')
    .get((req, res) => {
      console.log('GET route hit for /checkins/:id');
    })
    .put((req, res) => {
      console.log('PUT route hit for /checkins/:id');
    })
    .delete((req, res) => {
      console.log('DEL route hit for /checkins/:id');
    })
};
