//매일 extra 테이블 삭제, 날짜 설정

module.exports = (cronJob, todayDate) => {
    new cronJob('00 00 00 * * 1-5', ()=> {
        db.run('TRUNCATE TABLE extra', (err) => {
            if (err) {
                console.log(err);
            }
        });

        db.run('UPDATE user SET check = ? WHERE check = ?', [0, 1], (err)=> {
            if(err) {
                console.log(err);
            }
        });

        var dt = new Date();
        todayDate.date = String(dt.getMonth()+1)+"/"+String(dt.getDate());

    }, null, true, "Asia/Seoul");
}