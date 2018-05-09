module.exports = () => {
    app.post('/apply', (req, res) => {
        list = db.serialize(() => {
            db.get(`select * from record`, (err) => {
                if (err) {
                    console.log(err);
                    res.status(400).end();
                } else {
                    console.log('success');
                    res.status(200).end();
                }
            });
        });
        res.send(list);
    });
}