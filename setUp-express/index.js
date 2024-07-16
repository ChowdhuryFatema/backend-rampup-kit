const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();

// const logger = require('./middleware/logger')

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// init middleware
// app.use(logger);

// handlebars middleware 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Homepage Route
app.get('/', (req, res) => res.render('index'))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// members api routes
app.use('/api/members', require('./routes/api/membersAPI'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});