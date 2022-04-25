const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('WelCOme to my Website');
})
const users = [
    {'id': 1, 'name': 'Sharif', 'email': 'sharif@gmail.com'},
    {'id': 2, 'name': 'hasan', 'email': 'hasan@gmail.com'},
    {'id': 3, 'name': 'shuvro', 'email': 'shuvro@gmail.com'},
    {'id': 4, 'name': 'hemadro', 'email': 'hemadro@gmail.com'},
    {'id': 5, 'name': 'nella', 'email': 'nella@gmail.com'},
    {'id': 6, 'name': 'hello', 'email': 'hello@gmail.com'},
    {'id': 7, 'name': 'shuvroSharif', 'email': 'shuvrosharif@gmail.com'},
]
//Search query
app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/users', (req, res) => {
    console.log(req.body);
    const user = req.body;
    const id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('port is', port);
})