const express = require('express');
require('dotenv').config();
const path = require('path');
const colors = require('colors');
const connectDB = require('./config/dbConfig');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 5000;
const app = express();

// 1. Database Connection
connectDB();

// 2. Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 3. API Routes (Must be defined BEFORE static files)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/product", require("./routes/productRoutes"));
app.use("/api/message", require("./routes/messageRoutes"));
app.use("/api/event", require("./routes/eventRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

// 4. Correct Path Resolution for Nested Folders
// Since this file is in /server, we go UP one level to reach the root, then into /client/dist
const buildPath = path.resolve(__dirname, '../client/dist');

// 5. Static File Serving & SPA Routing
if (process.env.NODE_ENV === "production") {
    // Serve static files from the build directory
    app.use(express.static(buildPath));

    // Express v5 requires a named parameter for wildcards (/*splat)
    app.get('/*splat', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'), (err) => {
            if (err) {
                // If index.html is missing, this provides a clearer error
                res.status(500).send("Build file index.html not found. Ensure you ran 'npm run build' in the client folder.");
            }
        });
    });
} else {
    app.get("/", (req, res) => {
        res.send("API is running... (Development Mode)");
    });
}

// 6. Error Handler Middleware (Must be after all routes)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue.black);
    if (process.env.NODE_ENV === "production") {
        console.log(`Serving static files from: ${buildPath}`.yellow);
    }
});
