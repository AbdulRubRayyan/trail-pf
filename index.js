const path = require('path')
const express = require('express')
const favicon = require('serve-favicon');
const ejs = require('ejs');



const app = express();
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './views')
const port = process.env.PORT || 3000

app.set('views', viewsPath)
app.set('view engine', 'ejs')
app.use(express.static(publicDirectoryPath))


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Me - Abdul Rub'
    })
})

app.listen(port, () => {
    console.log('Listening to port '+port);
    
})

