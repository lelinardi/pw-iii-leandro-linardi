// pages\api\update.js
import { createConnection } from 'mysql2/promise';
// Função para conectar no MySQL    
async function connectToDatabase() {
  return createConnection({
    host: 'localhost',
    user:   'root',
    password: '',
    database: 'teste-api',
  });
}   
export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { id, name, email } = req.body; // Capture id, name, and email from request body

  if (!id || !name || !email) {
    return res.status(400).json({ error: 'ID, nome e email são obrigatórios.' });
  }

  try {
    // Conexão no MySQL
    const connection = await connectToDatabase();

    // Atualização de dados na tabela "User"
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    const values = [name, email, id];
    const [result] = await connection.execute(query, values);

    await connection.end();

    // Verificar se o usuário foi encontrado e atualizado
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    // Resposta com os dados atualizados do usuário
    res.status(200).json({ id, name, email, message: 'Usuário atualizado com sucesso.' });
  } catch (error) {
    console.error('Erro de conexão com o banco:', error);
    res.status(500).json({ error: 'Erro Interno de Servidor' });
  }
}