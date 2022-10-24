var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

var AdminSchema = new Schema({
    fname: String,
    lname:String,
    username: String,
    hashed_password: String,
    salt: String
});

AdminSchema.virtual('password').set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
}).get(function () {
    return this._password;
});

AdminSchema.methods = {

    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    },

    encryptPassword: function (password) {
        if (!password) return '';
        return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    }
};

mongoose.model('Admin', AdminSchema);
