
const coolfunction = ('/', (req, res, next) =>{
    res.json('Awesome Person')
});
const whyfunction = ('/why', (req, res, next) => {
    res.send('bruh');
});

module.exports = {coolfunction , whyfunction};