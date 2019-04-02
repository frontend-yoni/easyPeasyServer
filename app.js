const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 6006;

app.use(express.static('client'));

app.get('/twitterPlease', (req, res) => {
    pleaseWork(res);
})

async function pleaseWork(res) {
    let headers = {
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAMP%2F9gAAAAAAaTFSloQpcaqAsXsVX8tgJKqL0iE%3DuOWU7ZsdwgGttHujWql8dFDZ7Bh9opAXGq3doSiwgCNrbvszaL',
    };

    var data = await fetch('https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=twitterdev&skip_status=true&include_user_entities=false', {
        method: 'get',
        headers: headers,
    });

    let result = await data.json();
    res.send(result);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))