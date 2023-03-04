const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const rootRoute = require('./routes/rootRoute');

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

app.use("/api",rootRoute)
