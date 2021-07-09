const express = require('express');
const { v4:uuid } = require('uuid');
const fs = require('fs');
const file = require('./users.json');

const app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.urlencoded({extended:false}));


app.get('/', (req, res) => {
    res.render('index', { users: [] });
})


app.get('/list', (req, res) => {
    fs.readFile('./users.json', (err, data) => {
        if (err) throw err;
        const object = JSON.parse(data);
        res.render('list', {users: object.users});
    })
})

app.post('/list', (req, res) => {
    let newUser = {
        id: uuidv4(),
        username: req.body.name,
        email: req.body.email,
        age: req.body.age
    };

    file.users.push(newUser);
    const info = JSON.stringify(file);
    
    fs.writeFile('./users.json', info, (err) => {
        if (err) throw err;
    })

    fs.readFile('./users.json', (err, data) => {
        if (err) throw err;
        const object = JSON.parse(data);
        res.render('list', {users: object.users})
    })
})



app.listen(8080, () => 
    console.log('listening on port: 8080'));