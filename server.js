const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.show = (name) => {
      res.sendFile(path.join(__dirname, `/views/${name}`));
    };
    next();
  });

  app.use(express.static(path.join(__dirname, '/public')));

  app.get('/', (req, res) => {
    res.show('index.html');
  });

  app.get('/about', (req, res) => {
    res.show('about.html');
  });
  
  app.get('/user/settings', (req, res) => {
    res.show('log.html');
  });

  app.get('/user/panel', (req, res) => {
    res.show('log.html');
  });

  app.use((req, res) => {
    res.show('404.png');
  });

  

