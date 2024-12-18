import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
app.use(helmet());
app.get('/', (req, res) => {
    res.send('Hello World! from TS');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
