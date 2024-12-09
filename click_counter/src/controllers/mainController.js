let counter = 0;
module.exports = {
    index: (req, res) => {
        res.render('index', { title:'Click Counter', count: counter })
    },
    counter: (req, res) => {
        document.getElementById('btn-onClick').addEventListener('click', () => {
            counter++
            res.json({ count: counter })
            console.log(counter);
        })
    }
}