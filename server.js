const Coyote = require('coyote');
const App    = new Coyote(3000);

App.get('/:testing', (req, res) => {
    res.end('test');
});