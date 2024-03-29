import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, require: true},
    password: {type: String, require: true},
    typeUser: {type: String, default:"usuario"},
    state: {type:Number, default: 1}
});


const userModel = mongoose.model('user', userSchema);

export {
    userModel
}