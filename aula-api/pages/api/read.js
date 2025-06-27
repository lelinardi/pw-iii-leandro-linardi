// pages/api/read.js 
import { createConnection } from 'mysql2/promise';
// Função para conectar no MySQL 
async function connectToDatabase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });
}
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Metodo não permitido' });
    }

    const { id } = req.query; // Capture id from URL if present

    try {
        // Conexão no MySQL 
        const connection = await connectToDatabase();

        // Choose query dynamically based on presence of 'id'
        let query, values;
        if (id) {
            query = 'SELECT * FROM users WHERE id = ?';
            values = [id];
        } else {
            query = 'SELECT * FROM users';
            values = [];
        }

        // Execução da query para receber dados da tabela "User" 
        const [rows] = await connection.execute(query, values);
        await connection.end();

        // Verificar se o usuário existe 
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        // Fechar a conexão 

        // Resposta com os dados do usuário 
        res.status(200).json(rows);
    } catch (error) {
        console.error('Erro de conexão com o banco:', error);
        res.status(500).json({ error: 'Erro Interno de Servidor' });
    }
}
// Usage Examples
// To get all users: GET /api/read
// To get a specific user by ID 12: GET /api/read?id=12