const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const expresspage = fs.readFileSync("./public/pages/expresspage/expresspage.html").toString();
const contactpage = fs.readFileSync("./public/pages/contactpage/contactpage.html").toString();

const frontpagePage = nav.replace("%%DOCUMENT_TITLE%%", "Home") + frontpage + footer;
const expressPage = nav.replace("%%DOCUMENT_TITLE%%", "Express") + expresspage + footer;
const contactPage = nav.replace("%%DOCUMENT_TITLE%%", "Contact") + contactpage + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/expresspage", (req, res) => {
    res.send(expressPage)
});

app.get("/contactpage", (req, res) => {
    res.send(contactPage)
});


app.listen(3000, () => console.log("Server is running on", 3000));
