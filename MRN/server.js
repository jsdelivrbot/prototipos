const express = require('express');

let app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('home.hbs', {
        "page_title":"Home"
    })
})

app.get('/info', (request, response) => {
    response.send({
        "name":"Ever",
        "age":24,
        "occupation":"Front End Developer"
    })
})

app.listen(3000, () => {
    console.log('Server is up on 3000');
});