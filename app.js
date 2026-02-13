let express = require('express');
let path = require('path');

let app = express();
let PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/submit-booking', (req, res) => {

  console.log('Booking received:', req.body);
  

  res.redirect('/thank-you.html');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});