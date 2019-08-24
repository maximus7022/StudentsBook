const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB (Atlas)
connectDB();

// Body parse middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send(`API rinning`));
const PORT = process.env.PORT || 5000;

//Define routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
