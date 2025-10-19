const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/',async(req , res)=>{
console.log("Welcome to Note Backend");
res.json({message: "Welcome to Note Backend"});
});

router.get('/all',async(req,res)=>{
    const notes = await Note.find();
    res.json({message: "Here are all the notes", data: notes});
})

router.post('/addNote',async(req,res)=>{
    const {title,content,name,email} = req.body;
    const newNote = new Note({
        title,content,name,email
    });
    await newNote.save();
    res.json({message: "Note added sucessfully", date: newNote});
});

   module.exports = router;