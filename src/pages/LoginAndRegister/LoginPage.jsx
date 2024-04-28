import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import {
  LoginContainer,
  LoginBox,
  LoginTitle,
  LoginForm,
  Input,
  LoginButton,
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
    <LoginContainer>
      <LoginBox>
        <LoginForm onSubmit={handleLogin}>
          <LoginTitle src={logo} />
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
          <LoginButton type="submit">LOGAR</LoginButton>
        </LoginForm>
        <SignUpPrompt>
          <SignUpText> Pronto para embarcar em uma jornada épica? </SignUpText>
          <ForgotPasswordLink to="/register">Torne-se um Aventureiro agora mesmo!</ForgotPasswordLink>
        </SignUpPrompt>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
