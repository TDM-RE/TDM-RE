//매일 extra 테이블 삭제, 날짜 설정

module.exports = (cronJob, todayDate, db) => {
    new cronJob('00 00 00 * * 1-5', ()=> {
        console.log("everyday");
        db.serialize(()=> {
            db.run('DROP TABLE extra', (err)=> {
                if(err) {
                    console.log("drop err: ", err);
                }
            });

            db.run(`create table extra(
                number integer not null,
                name text not null,
                reason text not null,
                time text not null,
                allow integer,
                reject_reason text)`, (err)=> {
                    if(err) {
                        console.log("create err: ", err);
                    }
                });

            // db.run('TRUNCATE TABLE extra', (err) => {
            //     if (err) {
            //         console.log(err);
            //     }
            // });

            db.run('UPDATE user SET user_check = ? WHERE user_check = ?', [0, 1], (err)=> {
                if(err) {
                    console.log(err);
                }
            });

            var dt = new Date();
            todayDate.date = String(dt.getMonth()+1)+"/"+String(dt.getDate());

        });
    }, null, true, "Asia/Seoul");
}