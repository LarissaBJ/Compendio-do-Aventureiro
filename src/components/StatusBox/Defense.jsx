import React from 'react';
import { StatusWrapper,StatusTitle,StatusBoxWrapper,StatusBox,StatusSubTitle,StatusValue,StatusShieldBox,StatusShieldTitle} from './styled';
import DefenserShildBoxValueImage from '../../assets/Atributos e Combates/Inputs e Selects/Input de Defesa.svg'
const Defense = () => {
    return (
        <StatusWrapper>
        
            <StatusTitle>STATUS DE BATALHA</StatusTitle>
        
            <StatusBoxWrapper>
                <StatusBox>
                    <StatusSubTitle>Iniciativa</StatusSubTitle>
                    <StatusValue>0</StatusValue>
                </StatusBox>
                <StatusShieldBox $image={DefenserShildBoxValueImage} width="115px" height="131px">
                    <StatusShieldTitle>CA</StatusShieldTitle>
                    <StatusValue>0</StatusValue>
                </StatusShieldBox>
                <StatusBox>
                    <StatusSubTitle>Deslocamento</StatusSubTitle>
                    <StatusValue>0</StatusValue>
                </StatusBox>
            </StatusBoxWrapper>
        
        </StatusWrapper>
    );
};

export default Defense;