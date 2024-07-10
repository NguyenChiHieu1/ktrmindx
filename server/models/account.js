const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt')
// Declare the Schema of the Mongo model
var accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    nameuser: {
        type: String,
    }
}, { timestamps: true });
accountSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password, salt)
})
accountSchema.methods = {
    isCorrectPassword: async function (password) {
        return await bcrypt.compare(password, this.password)
    },
}
//Export the model
module.exports = mongoose.model('Account', accountSchema);