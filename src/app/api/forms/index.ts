
import express from 'express';
import mongoose from 'mongoose';
import routes from './route';


const app = express();
const port = 3000;

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/testDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});