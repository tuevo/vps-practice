const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const MongoClient = require('mongodb').MongoClient;
const mongoClient = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true });
const ObjectId = require('mongoose').Types.ObjectId;
let db;

if (dotenv.error)
  throw new Error(dotenv.error);

mongoClient.connect(err => {

  if (err)
    throw new Error(err);

  console.log('Connected to mongodb successfully !!!');
  db = mongoClient.db("mini-mart");

  app.listen(port, async (err) => {
    if (err)
      console.error(err);
    else {
      console.log('Server is listening on port', port);
    }
  });
});

app.get('/', (req, res) => {
  res.render('cv');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await db.collection('users').findOne({ username, password });
  if (!user) {
    return res.json({
      status: 400,
      errors: ['Wrong username or password']
    });
  }

  res.json({
    status: 200,
    data: {
      token: jwt.sign(user, privateKey)
    },
    messages: ['logged in done !!!']
  });
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.json({
      status: 400,
      errors: ['User not found']
    });

  const user = await db.collection('users').findOne({ _id: ObjectId(id) });

  if (!user)
    return res.json({
      status: 400,
      errors: ['User not found']
    });

  res.json({
    status: 200,
    data: { user },
    messages: ['Get user done !!!']
  });
});

app.get('/users', (req, res) => {
  const { username, token } = req.query;

  jwt.verify(token, privateKey, async err => {
    if (err)
      return res.json({
        status: 404,
        errors: ['Permission denied']
      });

    if (username) {
      const user = await findUserByUsername(username);
      if (!user)
        return res.json({
          status: 400,
          errors: ['User not found']
        })

      return res.json({
        status: 200,
        data: { user },
        messages: ['Get user done !!!']
      });
    }

    const users = await findAllUsers();
    res.json({
      status: 200,
      data: { users },
      messages: ['Get list of users done !!!']
    })
  })
})

app.get('/ga', (req, res) => {
  res.render('gg-analytics');
});

const findAllUsers = async () => await db.collection('users').find().toArray();

const findUserByUsername = async (username) => await db.collection('users').findOne({ username });

const createUser = async (userData) => {
  return await db.collection('users').insertOne(userData);
}
