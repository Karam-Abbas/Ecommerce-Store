const mongoose = require('mongoose');

const userSchema = mongoose.createSchema({
    fullName: String,
    email: String,
    password: String,
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    isAdmin: Boolean,
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    contact: Number,
    picture: String
});

 module.exports = mongoose.createModel("user",userSchema);

