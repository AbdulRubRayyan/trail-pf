const path = require('path')
const express = require('express')
const ejs = require('ejs');

const app = express();
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './views')
const port = process.env.PORT || 3000

app.set('views', viewsPath)
app.set('view engine', 'ejs')
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('')
})


app.listen(3000, () => {
    console.log('Listening to port '+port);
    
})

