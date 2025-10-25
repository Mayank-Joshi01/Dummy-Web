const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const notesRoute = require('./routes/NoteRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // allows us to parse JSON in request body

// // Connect to MongoDB
mongoose.connect('mongodb+srv://MayankJoshi:Mayank1234@cluster0.ohmcrjh.mongodb.net/').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
});

// Routes
app.use('/api/notes',notesRoute);

const PORT = 5000;
app.listen(PORT,'0.0.0.0',()=>{ console.log(`Server is running on port ${PORT}`);});

