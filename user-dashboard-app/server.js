const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true
}));

// Default user (for demo)
let user = {
    username: "superman",
    password: "1234"
};

// Login Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});

// Handle Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        req.session.user = username;
        res.redirect("/dashboard");
    } else {
        res.send("Invalid Credentials");
    }
});

// Dashboard
app.get("/dashboard", (req, res) => {
    if (!req.session.user) return res.redirect("/");
    res.sendFile(path.join(__dirname, "views/dashboard.html"));
});

// Profile
app.get("/profile", (req, res) => {
    if (!req.session.user) return res.redirect("/");
    res.sendFile(path.join(__dirname, "views/profile.html"));
});

// Settings
app.get("/settings", (req, res) => {
    if (!req.session.user) return res.redirect("/");
    res.sendFile(path.join(__dirname, "views/settings.html"));
});

// Logout
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});