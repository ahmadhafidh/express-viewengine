const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.render('index', {
    name: req.query.name || 'Guest'
  })
})

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});