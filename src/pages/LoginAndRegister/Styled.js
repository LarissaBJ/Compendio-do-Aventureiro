import styled from 'styled-components';
import BackgroundImage from '../../assets/Imagens/Plano de Fundo Login&Cadastro.jpeg'; 
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  position: relative; 
  font-family: "Amethysta";
  
  &::before {
    content: ''; 
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 0; 
  }

  
  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const LoginBox = styled.div`
  background: rgba(251, 157, 157, 0.3);
  border-radius: 20px;
  width: 411px;
  height: 411px;
  text-align: center;
`;


export const LoginTitle = styled.img`

`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #CC9193;
  width: 316px;
  height: 38px; 
  background-color: white; 
  border-radius: 4px;
  color: #4A0204; 

  &::placeholder {
    color: #CC9193; 
  }
  &:focus {
    outline: none; 
    border-color: #4A0204; 
  }
`;

export const LoginButton = styled.button`
  font-family: "Amethysta";
  background-color: #4A0204;
  color: white;
  width: 181px;
  height: 48px;
  padding: 0.5rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: darkred;
  }
`;

export const ForgotPasswordLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;
  margin: 0;
  transition: color 0.3s ease; 

  &:hover {
    color: #4A0204; 
    text-decoration: underline; 
  }

  &:active {
    color: #BA8186; 
    text-decoration: none; 
  }
`;

export const SignUpPrompt = styled.div`
  color: white;
  font-size: 13px;
  width:411px;
  height: 50px;
  margin-top: 10px;
  padding: 0;
  border-radius: 0 0 20px 20px;
  background: rgba(251, 157, 157, 0.4);

`;

export const SignUpText = styled.p`
  margin-bottom: 5px;
  margin-top: 0;
  padding-top: 3px;

`;

