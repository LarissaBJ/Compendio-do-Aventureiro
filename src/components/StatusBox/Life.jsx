import React from 'react';
import { StatusWrapper,StatusTitle,StatusBoxWrapper,StatusBox,StatusSubTitle,StatusValue,StatusShieldBox,StatusShieldTitle} from './styled';
import LifeShildBoxValueImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de Vida.svg'

const Life = () => {
    return (
        <StatusWrapper>
        
            <StatusTitle>PONTUAÇÃO DE VIDA</StatusTitle>
        
            <StatusBoxWrapper>
                <StatusBox>
                    <StatusSubTitle>Atual</StatusSubTitle>
                    <StatusValue>0</StatusValue>
                </StatusBox>
                <StatusShieldBox image={LifeShildBoxValueImage} width="112px" height="133px">
                    <StatusShieldTitle>MÁXIMA</StatusShieldTitle>;
                    <StatusValue>0</StatusValue>
                </StatusShieldBox>
                <StatusBox>
                    <StatusSubTitle>Temporária</StatusSubTitle>
                    <StatusValue>0</StatusValue>
                </StatusBox>
            </StatusBoxWrapper>
    
        </StatusWrapper>
    );
};

export default Life;