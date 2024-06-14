import express from 'express';
import "dotenv/config";
import routerAgent from './routes/agent.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('assets'));
app.use('/', routerAgent);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    });