const express = require("express");
const morgan = require("morgan");

const app = express();
app.listen(3000);
app.set("view engine", "ejs");
app.set("views", "views");

app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.render("index", { title: "Home Page" });
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About Page" });
});

app.get("/contact-me", (req, res) => {
	res.render("contactme", { title: "Contact-me" });
});

app.use((req, res) => {
	res.status(404).render("404", { title: "Not Found" });
});
