var mongoose = require('mongoose'),
Item = mongoose.model('Item');

exports.create = function (req, res) {
    var theItem = new Item(req.body);
    console.log("chandra",JSON.stringify(theItem));
    theItem.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send(theItem);
        }
    });
};

exports.all = function (req, res) {
    Item.find({}).exec(function (err, items) {
        if (err) {
            res.failure(err)
        } else {
            res.json(items);
        }
    })
}

exports.update = function (req, res) {
    var sid = req.body._id;
    Item.findById(sid, function (err, doc) {
        doc.name = req.body.name;
        doc.quantity = req.body.quantity;
        doc.date = req.body.date;
        doc.price = req.body.price;
        doc.save(function () {
            res.json(doc);
        })
    })
}