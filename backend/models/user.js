const mongoose = require('mongoose')

//เชื่อม mongoDB
mongoose.set('strictQuery', false);
const dbUrl = 'mongodb://127.0.0.1/profile'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log('Database successfully connected');
})
.catch(err => console.log(err))

// ออกแบบ Schema 
let UserSchema = mongoose.Schema({
    name: String,
    email: String
})

//สร้าง Model
const User = mongoose.model('users', UserSchema);

module.exports = User