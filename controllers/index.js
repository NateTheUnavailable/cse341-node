
const coolfunction = ('/', (req, res, next) =>{
    res.json('Rey Moon');
});
const whyfunction = ('/why', (req, res, next) => {
    res.send('Steve Gardner');
});

module.exports = {coolfunction, whyfunction};