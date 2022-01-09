const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            // required: true
        },
        
        pinCode: {
            type: String,
            // required: true
           
        },
        mobileNo: {
            type: String,
            // required: true
        },
        dob: {
            type: String,
            // required: true
        },
        email: {
            type: String,
            // required: true
        },
        jobType: {
            type: String,
            // required: true
        },
        location: {
            type: String,
            // required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
