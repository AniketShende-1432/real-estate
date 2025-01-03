const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type :String,
        required : true,
    },
    email: {
        type :String,
        required : true,
        unique:true,
    },
    password: {
        type :String,
        required : true,
    },
    phone: {
        type: String,
        required: true,
    },
    usertype: {
        type :String,
        required:true,
    },
    agreement: {
        type: Boolean,
        required: true,   // Must agree to terms and conditions
    },
    sell: [
        { type: mongoose.Types.ObjectId, ref: 'Sell' },
    ],
    rent: [
        { type: mongoose.Types.ObjectId, ref: 'Rent' },
    ],
},{ timestamps: true });

module.exports = mongoose.model("User",userSchema);