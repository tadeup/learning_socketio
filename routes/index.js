module.exports = function (io) {
    var express = require('express');
    var router = express.Router();

    const {Offer} = require('../models/Offers');

    // io.on('connection', function (socket) {
        // console.log('a user connectedd');
        /* GET home page. */
        router.get('/', function(req, res, next) {
            io.of('/form').emit("aaaa", "BBBBBBBB");
            res.render('index', { title: 'Express' });
        });

        router.get('/form', function (req, res, next) {
            // io.emit("aaaa", "its working");
            Offer.find().then((offers) => {
                res.render('form', {
                    layout:null,

                });
            });

        });

    // });


    router.post('/form', function (req, res, next) {
        var {
            body: {
                asset,
                quantity,
                price
            }
        } = req;

        let newOffer = new Offer({
            asset,
            quantity,
            price,
        });

        newOffer.save(newOffer).then(() => {

            res.redirect('back')
        })

    });

    return router;
};