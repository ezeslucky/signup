const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const usersRoute = require('./routes/users');
const app = express();

dotenv.config();


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const MONGO_URI = "mongodb+srv://aurobindo:L.3uckypatra@cluster1.sww4y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
mongoose.connect(process.env. MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));


app.use('/api/users', usersRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
