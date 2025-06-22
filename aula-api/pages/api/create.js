// pages\api\create.js
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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { name, email } = req.body; // LL Capture name and email from request body

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
  }

  try {
    // Conexão no MySQL
    const connection = await connectToDatabase();

    // Inserção de dados na tabela "User"
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const values = [name, email];
    const [result] = await connection.execute(query, values);
    
    await connection.end();

    // Resposta com o ID do novo usuário criado
    res.status(201).json({ id: result.insertId, name, email, message: 'Usuário criado com sucesso.' });
  } catch (error) {
    console.error('Erro de conexão com o banco:', error);
    res.status(500).json({ error: 'Erro Interno de Servidor' });
  }
}