import React, { useState, useEffect } from 'react';
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
import logo from '../../assets/Imagens/Login  e Register Logo.svg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuth, user } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth()) {
      navigate(`/home/${user.userId}`);
    }
  }, [isAuth, navigate, user]); 

  const handleLogin = async (event) => {
    event.preventDefault(); 
    await login({ email, password }, navigate);
  };

  return (
    <Container>
      <Box>
        <Form onSubmit={handleLogin}>
          <Title src={logo} />
          <Input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">LOGAR</Button>
        </Form>
        <SignUpPrompt>
          <SignUpText> Pronto para embarcar em uma jornada épica? </SignUpText>
          <ForgotPasswordLink to="/register">Torne-se um Aventureiro agora mesmo!</ForgotPasswordLink>
        </SignUpPrompt>
      </Box>
    </Container>
  );
};

export default Login;
