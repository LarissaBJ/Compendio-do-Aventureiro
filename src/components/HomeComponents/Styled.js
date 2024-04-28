import styled from 'styled-components';
import BannerImagem from '../../assets/Imagens/Imagem Apresentacao.jpg'
export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1105px;
  height: 373px;
  background: rgba(0, 0, 0, 0.4);
`;

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 456.93px;
    height: 100%;
    margin: 0 80px;
    padding: 10px 0;
`;

export const Title = styled.h1`
    font-family: "Adventure";
    font-size: 2.5em;
    color: #FFF;
    margin: 10px 0 0 0;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #FFF;
  margin: 0;
  font-family: "Amethysta";
`;

export const CreateButton = styled.button`
  background-color: #4A0204;
  width: 181px;
  height: 48px;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 19px;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background-color: #800003;
  }
`;

export const ImagemContenier = styled.div`
  width: 648.07px;
  height: 373px;
`;

export const BoxButton = styled.div`
    display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     font-family: "Amethysta";
     margin-top: 10px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;


// BANNER 

export const MainBanner = styled.section`
  color: white;
  height: 526px;
  background-image: url(${BannerImagem});
  background-size: cover;
  padding: 40px;
  text-align: justify;
  position: relative; 
  margin-bottom: 71px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6); 
    z-index: 1;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 3rem; 
  font-family: "Adventure";
  text-align: left; 
  margin-bottom: 20px;
`;

export const BannerContent = styled.div` 
  font-size: 1.25rem;
  position: relative;
  z-index: 2; 
`;

export const Paragrafo = styled.p`
  margin-top: 20px; 
  font-size: 16px;
`;
//FOOTER
export const FooterContainer = styled.footer`
  color: #FFB8BA;
  height:118px;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  background-color: #890004;
  border-top: solid 4px #FFB8BA;
`;

export const CopyrightText = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "Inter";
  align-items: center;
  justify-content: center;
`;