import React from 'react';
import {LifeWrapper,LifeBox,LifeStatusTitle,LifeStatusValue, LifeShieldBox,LifeTitle,StatusWrapper,StatusTitle} from "./styled";
const Life = () => {
    return (
    <StatusWrapper>
        
        <StatusTitle>PONTUAÇÃO DE VIDA</StatusTitle>
       
        <LifeWrapper>
            <LifeBox>
                <LifeStatusTitle>ATUAL</LifeStatusTitle>
                <LifeStatusValue>0</LifeStatusValue>
            </LifeBox>
            <LifeShieldBox>
                <LifeTitle>MÁXIMA</LifeTitle>
                <LifeStatusValue>0</LifeStatusValue>
            </LifeShieldBox>
            <LifeBox>
                <LifeStatusTitle>TEMPORÁRIA</LifeStatusTitle>
                <LifeStatusValue>0</LifeStatusValue>
            </LifeBox>
        </LifeWrapper>
        
  </StatusWrapper>
    );
};

export default Life;