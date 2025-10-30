const express = require("express");
const path = require("path");
const { spawn } = require("child_process");

const app = express();
const PORT = 5000;

// Serve Streamlit frontend
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

// Route to start Streamlit
app.get("/start-streamlit", (req, res) => {
    const streamlitProcess = spawn(
        "streamlit",
        ["run", path.join(__dirname, "../app.py")],
        {
            stdio: "inherit", // show Streamlit logs in Node console
            shell: true,
            cwd: path.join(__dirname, "..") // ✅ Run from project root
        }
    );

    streamlitProcess.on("close", (code) => {
        console.log(`Streamlit process exited with code ${code}`);
    });

    res.send("✅ Streamlit is starting...");
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
