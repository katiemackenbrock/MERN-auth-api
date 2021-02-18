require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();

// Middleware
// Cors
// bodyParsing middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: "MERN App API Home"})
})

// Controllers
app.use('/api', require('./controllers/auth'));

app.listen(process.env.PORT || 3000, () => 
    console.log(`🎧 You're listening to the smooth sounds of Port ${process.env.PORT || 3000}`)
);