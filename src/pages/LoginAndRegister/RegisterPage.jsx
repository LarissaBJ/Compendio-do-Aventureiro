import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  Container,
  Box,
  Title,
  Form,
  Input,
  Button,
  ForgotPasswordLink,
  SignUpPrompt,
  SignUpText
} from './Styled';
import logo from '../../assets/Imagens/Login  e Register Logo.svg';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    register({ email, password, userName }, navigate);
  };

  return (
    <Container>
      <Box $height = "443px">
        <Form onSubmit={handleRegister}>
          <Title src={logo} />
          <Input
          $height="25px"
            type="userName"
            placeholder="userName"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            $height="25px"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            $height="25px"
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">CADASTRAR</Button>
        </Form>
        <SignUpPrompt>
          <SignUpText> Já é um aventureiro?   </SignUpText>
          <ForgotPasswordLink to="/login">Faça login e retome sua jornada épica!</ForgotPasswordLink>
        </SignUpPrompt>
      </Box>
    </Container>
  );
};

export default RegisterPage;
