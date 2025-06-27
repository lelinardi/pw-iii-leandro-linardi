// pages\api\delete.js
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
    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    // const { id } = req.query; // Capture id from URL query
    const id = req.query.id || req.body.id; // Capture id from Postaman body

    if (!id) {
        return res.status(400).json({ error: 'ID é obrigatório.' });
    }

    try {
        // Conexão no MySQL
        const connection = await connectToDatabase();

        // Deleção de dados na tabela "User"
        const query = 'DELETE FROM users WHERE id = ?';
        const values = [id];
        const [result] = await connection.execute(query, values);

        await connection.end();

        // Verificar se o usuário foi encontrado e deletado
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        // Resposta de sucesso
        res.status(200).json({ message: 'Usuário deletado com sucesso.' });
    } catch (error) {
        console.error('Erro de conexão com o banco:', error);
        res.status(500).json({ error: 'Erro Interno de Servidor' });
    }
}

// Usage Example
// To delete a user by ID 12: DELETE /api/delete?id=12
// Note: Ensure that the MySQL server is running and the database 'teste-api' exists with a 'users' table.
// The 'users' table should have at least the columns 'id', 'name', and 'email' for this code to work correctly.
// Make sure to handle the database connection and queries properly in your production code.        