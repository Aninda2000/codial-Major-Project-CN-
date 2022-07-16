const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codial_test');

const db=mongoose.connection;
db.on('error',console.error.bind(console, 'Error connecting to db'));

db.once('open',function(){
    console.log('Connected to Database :: MongoDb');
});
module.exports= db;