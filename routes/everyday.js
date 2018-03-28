//매일 extra 테이블 삭제, 날짜 설정

module.exports = (cronJob, date) => {
    new cronJob('00 00 00 * * 1-5', ()=> {
        db.run('TRUNCATE TABLE extra', (err) => {
            if (err) {
                console.log(err);
            }
        });

        var dt = new Date();
        date.date = String(dt.getMonth()+1)+"/"+String(dt.getDate());

    }, null, true, "Asia/Seoul");
}