import express from 'express';
import { buscarPostsLinkedin } from './services/linkedin.js';

const router = express.Router();

router.post('/buscar-vagas', async (req, res) => {
    const { email, senha, tags } = req.body;

    try {
        const posts = await buscarPostsLinkedin(email, senha);

        const postsFiltrados = posts.map(post => {
            const texto = post.texto.toLowerCase();
            const tagsEncontradas = (tags || []).filter(tag =>
                texto.includes(tag.toLowerCase())
            );

            return { ...post, tagsEncontradas };
        }).filter(p => p.tagsEncontradas.length > 0);

        res.json({
            total: postsFiltrados.length,
            posts: postsFiltrados
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar vagas' });
    }
});

export default router;
