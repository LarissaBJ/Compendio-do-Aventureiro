import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderMagicContent, InfoMagicBox, Value, Pagination, Linha, Button, Img,TitleValue,HeaderTitleBox, NumberPag} from './Styled.js';
import SetaToPrevious from '../../assets/Magias e Conjuracoes/Icones e Botões/Icone Seta Esquerda.svg';
import SetaToNext from '../../assets/Magias e Conjuracoes/Icones e Botões/Icone Seta direita.svg';
import {GlobalSelect} from '../GlobalStyled.js'
const MagicHeader = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const goToNextPage = () => {
        if(currentPage < 3) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            navigate(`/charactersheet/magicconjuration/SpellPagination-${nextPage}`);
        }
    };

    const goToPreviousPage = () => {
        if(currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            navigate(`/charactersheet/magicconjuration/SpellPagination-${prevPage}`);
        }
    };

    return (
        <HeaderMagicContent>

            <InfoMagicBox>    
                <GlobalSelect $width="183px" $padding="15px" $margin="0" $borderBottom ="none" name="atributo-conjuracao" id=""></GlobalSelect>
                <Value>0</Value>
                <Value>0</Value>
            </InfoMagicBox>
            
            <HeaderTitleBox>     
                <TitleValue>
                    CATRIBUTO DE 
                    CONJURAÇÃO
                </TitleValue>
                <TitleValue>
                    CD DE 
                    SALVAGUARDA
                </TitleValue>
                <TitleValue>
                    BÔNUS DE 
                    ATAQUE MÁGICO
                </TitleValue>
            </HeaderTitleBox>
       
            <Linha />

            <Pagination>
                {currentPage > 1 && (
                    <Button onClick={goToPreviousPage}><Img src={SetaToPrevious} alt="Previous" /></Button>
                )}
                <NumberPag>{currentPage}</NumberPag>
                {currentPage < 3 && (
                    <Button onClick={goToNextPage}><Img src= {SetaToNext} alt="Next" /></Button>
                )}
            </Pagination>
        </HeaderMagicContent>
    );
};

export default MagicHeader;
