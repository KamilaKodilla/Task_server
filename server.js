const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use('/user', (req, res, next) => {
    res.show('noway.html');
  });

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.show('home.html');
});

app.get('/home', (req, res) => {
  res.show('home.html');
}); 

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.get('/404.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/404.png'));
});

app.use((req, res) => {
  res.status(404).show('404.html');
})

app.listen(9000, () => {
  console.log('Server is running on port: 9000');
});