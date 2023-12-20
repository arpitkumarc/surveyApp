// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://arpitkumarc:v9lAQPhyPQUqRlHR@cluster0.e7bedb5.mongodb.net/arpitProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    nationality: String,
    mobile: String,
    address : String,
    message: String,
  });

  // Create a Mongoose model
const User = mongoose.model('User', userSchema);

// Your routes and other middleware go here

app.post('/submit-form', async (req, res) => {
    try {
      const { name, email, gender,nationality,mobile,address,message } = req.body;
  
      // Create a new user using the Mongoose model
      const newUser = new User({ name, email, gender,nationality,mobile,address,message });
  
      // Save the user to the database
      await newUser.save();
  
      res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
