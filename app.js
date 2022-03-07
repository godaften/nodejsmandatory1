const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("public/pages/toolspage"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const htmlpage = fs.readFileSync("./public/pages/htmlpage/htmlpage.html").toString();
const csspage = fs.readFileSync("./public/pages/csspage/csspage.html").toString();
const javascriptpage = fs.readFileSync("./public/pages/javascriptpage/javascriptpage.html").toString();
const toolspage = fs.readFileSync("./public/pages/toolspage/toolspage.html").toString();

const frontpagePage = nav.replace("%%DOCUMENT_TITLE%%", "Home") + frontpage + footer;
const htmlPage = nav.replace("%%DOCUMENT_TITLE%%", "Html") + htmlpage + footer;
const cssPage = nav.replace("%%DOCUMENT_TITLE%%", "Css") + csspage + footer;
const javascriptPage = nav.replace("%%DOCUMENT_TITLE%%", "Javascript") + javascriptpage + footer;
const toolsPage = nav.replace("%%DOCUMENT_TITLE%%", "Tools") + toolspage + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/htmlpage", (req, res) => {
    res.send(htmlPage)
});

app.get("/csspage", (req, res) => {
    res.send(cssPage)
});

app.get("/javascriptpage", (req, res) => {
    res.send(javascriptPage)
});

app.get("/toolspage", (req, res) => {
    res.send(toolsPage)
});

app.listen(3000, () => console.log("Server is running on", 3000));
