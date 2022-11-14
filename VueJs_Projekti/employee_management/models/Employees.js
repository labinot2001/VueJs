const mongoose = require('mongoose');

const EmployeesSchema = mongoose.Schema({
    name: String,
    email: String,
    position: String,
    review: String,
    // image_url: String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Employees', EmployeesSchema);