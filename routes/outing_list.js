module.exports = () => {
    app.post('/check', (req, res) => {
            user_data = db.get(`select user_name, user_number from user where check=1`, (err) => {
                if (err) {
                    console.log(err);
                    res.status(400).end();
                } else {
                    console.log('success!');
                }
            })

            res.send('user_data : ' + user_data);
            res.status(200).end();
        });
}