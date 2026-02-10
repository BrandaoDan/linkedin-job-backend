import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API do LinkedIn Job Bot rodando 🚀');
});

app.use('/api', routes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
