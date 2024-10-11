require('dotenv').config();
const express = require('express');
const cors = require('cors');
const urlencoded = require('body-parser/lib/types/urlencoded');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(express.urlencoded({extended: true}))

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

const mainurls = []
const shorturls = []

app.post('/api/shorturl', (req, res) => {
  const originalurl = req.body.url;
  //const shorturl = indexOf(originalurl);
  if (originalurl.includes('https://' || originalurl.includes('http://')))
    mainurls.push(originalurl)

  return res.json({URL: mainurls})
  
 
 
});
