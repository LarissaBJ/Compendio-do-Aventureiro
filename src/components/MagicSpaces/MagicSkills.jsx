import React, {useEffect, useState} from 'react';
import axios from "axios";
import {
    DescriptionWrapper, DetailsWrapper, HorizontalRow, ItensWrapper,
    MagicSkillsBox,
    MagicSpacesHeader,
    MagicSpacesHeaderText,
    MagicSpacesNumberInput,
    MagicSpacesNumbertext,
    MagicSpacesNumberTextWrapper,
    MagicSpacesTextWrapper,
    MagicSpacesWrapper, MagicTitle, MagicTitleMinorText, MinorText, TitleWrapper, TittleButton
} from "./styled.js";


const MagicSkills = () => {
    const [dados, setDados] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.dnd5eapi.co/api/spells/fireball');
                setDados(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados da API', error);
            }
        };

        fetchData();
    }, []);

    if (!dados) {
        return <div>Carregando...</div>;
    }

    return (
        <MagicSkillsBox>
                <MagicSpacesWrapper>
                    <MagicSpacesTextWrapper>
                        <MagicSpacesHeader>
                            <MagicSpacesHeaderText>TOTAL DE ESPAÇO</MagicSpacesHeaderText>
                            <MagicSpacesHeaderText>ESPAÇOS GASTOS</MagicSpacesHeaderText>
                        </MagicSpacesHeader>
                        <MagicSpacesNumberTextWrapper>
                            <MagicSpacesNumbertext>{1}</MagicSpacesNumbertext>
                            <MagicSpacesNumberInput type="number"
                                                    defaultValue={1}/>
                            <MagicSpacesNumberInput
                                type="number"
                                defaultValue={0}
                                style={{marginLeft: '69px'}}/>
                        </MagicSpacesNumberTextWrapper>
                    </MagicSpacesTextWrapper>
                </MagicSpacesWrapper>
                <ItensWrapper>
                    <div className="item">
                        <TitleWrapper>
                            <TittleButton onClick={handleClick}
                                          style={{backgroundSize: 'cover' }}>
                            </TittleButton>
                            <div>
                                <MagicTitle>{dados.name}</MagicTitle>
                                <MagicTitleMinorText>{dados.school.name} ({dados.ritual ? 'Ritual' : 'Magia'})</MagicTitleMinorText>
                            </div>
                            <div className="checkboxes">
                            </div>
                        </TitleWrapper>
                        {isExpanded && (
                            <>
                                <DetailsWrapper>
                                    <MinorText>Tempo de Conjuração: {dados.casting_time}</MinorText>
                                    <MinorText>Duração: {dados.duration}</MinorText>
                                    <MinorText>Alcance: {dados.range}</MinorText>
                                    <MinorText>Componentes: {dados.components}</MinorText>
                                    <MinorText>Concentração: {dados.concentration ? 'Sim' : 'Não'}</MinorText>
                                </DetailsWrapper>
                                <DescriptionWrapper>
                                    <span>DESCRIÇÃO</span>
                                    <HorizontalRow/>
                                    <p style={{overflowY: 'auto', maxHeight: '40px'}}>{dados.desc}</p>
                                </DescriptionWrapper>
                                <DescriptionWrapper>
                                    <span>EM NÍVEL SUPERIOR</span>
                                    <HorizontalRow/>
                                    <p style={{overflowY: 'auto', maxHeight: '40px'}}>{dados.higher_level}</p>
                                </DescriptionWrapper>
                            </>
                        )}
                    </div>
                </ItensWrapper>
        </MagicSkillsBox>
    );
};

export default MagicSkills;