var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db.db');

db.serialize(() => {
    db.run(`create table record(
        number integer not null,
        name text not null,
        reason text not null,
        time text not null,
        date text not null,
        allow boolean,
        reject_reason text)`);

    db.run(`create table extra(
        number integer not null,
        name text not null,
        reason text not null,
        time text not null,
        allow boolean,
        reject_reason text)`);
    
    db.run(`create table user(
        user_name text not null,
        user_number integer not null,
        user_id text not null,
        user_pw text not null,
        admin boolean not null)`);
});

db.close();