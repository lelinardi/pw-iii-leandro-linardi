import React from 'react';
import { useRouter } from 'next/router';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';

const CadastroForm = () => {
    const [form] = Form.useForm();
    const router = useRouter(); // use Next.js router

    const onFinish = async (values) => {
        try {
            const response = await axios.post('/api/create', values);
            form.resetFields();
            // console.log('Form submitted successfully!');
            // Redirect to a success page or show a success message
            message.success('Usuário cadastrado com sucesso!', 2);

        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            message.error('Erro ao criar usuário. Tente novamente.');
        }
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
                name="name"
                label="Nome"
                rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    { required: true, message: 'Por favor, insira seu email!' },
                    { type: 'email', message: 'Email inválido!' },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Cadastrar
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CadastroForm;
// This component is a form for user registration using Ant Design and Axios.
// It captures the user's name and email, validates the input, and sends a POST request to the `/api/create` endpoint.
// Upon successful registration, it displays a success message and resets the form fields.  