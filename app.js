const app = require("express")();
const routes = require("./routes")(app);

app.listen(1212, () => {
    console.log('Server running at 1212');
});