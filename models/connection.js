const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:jmcYFjjhAIMU4ndZ@cluster0.w2cfn2x.mongodb.net/blackboard';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
