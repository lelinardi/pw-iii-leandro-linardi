// pages/cadastro.js
import React from 'react';
import CadastroForm from '../src/components/CadastroForm';

const CadastroPage = () => {
    return (
        <div style={{ maxWidth: '400px', margin: '50px auto' }}>
            <h1>Cadastro de Usuário</h1>
            <CadastroForm />
        </div>
    );
};

export default CadastroPage;
