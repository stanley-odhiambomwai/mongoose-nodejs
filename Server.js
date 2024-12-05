require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const Person = require('./models/Person');

const createPerson = async () => {
    const person = new Person({
        name: 'Stanley Mwai',
        age: 25,
        favoriteFoods: ['Chapati', 'Meat', 'Rice'],
    });

    try {
        const savedPerson = await person.save();
        console.log(savedPerson);
    } catch (err) {
        console.error(err);
    }
};

createPerson();

const createManyPeople = async () => {
    const arrayOfPeople = [
        { name: 'Alice', age: 62, favoriteFoods: ['Chicken'] },
        { name: 'Stanley', age: 25, favoriteFoods: ['Steak'] },
        { name: 'Mwai', age: 27, favoriteFoods: ['Chapati'] },
    ];

    try {
        const people = await Person.create(arrayOfPeople);
        console.log(people);
    } catch (err) {
        console.error(err);
    }
};

createManyPeople();