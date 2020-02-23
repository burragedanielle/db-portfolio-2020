const express = require('express');


const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + "/public")));

app.get("*", (req, res) => {
    return
});

app.listen(PORT, err => {
    if (err) {
        throw err;
    }
    console.warn(`Ready on http://localhost:${PORT}`);
});