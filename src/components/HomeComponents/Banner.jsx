// Banner.jsx
import React from 'react';
import { MainBanner, BannerTitle, BannerContent, Paragrafo } from './Styled';

const Banner = () => {
  return (
    <MainBanner>
   
      <BannerContent>
        <BannerTitle>DUNGEONS & DRAGONS</BannerTitle>
        <Paragrafo>
          Em Dungeons and Dragons, a aventura aguarda além da imaginação. Seja você um guerreiro corajoso, um mago poderoso ou um ladrão astuto, em D&D você terá a oportunidade de explorar mundos épicos, enfrentar perigos inimagináveis e forjar sua própria lenda.
        </Paragrafo>
     
        <Paragrafo>
          Desenvolvido na década de 1970, Dungeons and Dragons é um jogo de mesa que se tornou um fenômeno cultural, inspirando uma comunidade apaixonada de jogadores ao redor do mundo. Com uma mistura única de estratégia, improvisação e imaginação, D&D oferece uma experiência única e envolvente para todos os que ousam entrar em seu mundo de fantasia.
        </Paragrafo>
    
        <Paragrafo>
          Embarque em uma jornada emocionante, onde as escolhas que você faz moldam o destino do seu personagem e influenciam o curso da história. Crie laços de amizade com seus companheiros de equipe, enfrente desafios épicos e descubra os segredos ocultos em masmorras sombrias e reinos encantados.
        </Paragrafo>

        <Paragrafo>
          Então, prepare-se para uma aventura que vai além dos limites da realidade. Junte-se a nós em Dungeons and Dragons e descubra o que espera por você além das muralhas da cidade, nas profundezas das florestas ancestrais e nas cavernas escuras onde os dragões adormecidos aguardam. Onde quer que sua jornada o leve, o mundo de Dungeons and Dragons está pronto para recebê-lo. Venha, herói, a aventura aguarda!
        </Paragrafo>

      </BannerContent>
    </MainBanner>
  );
};

export default Banner;
