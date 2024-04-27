import React from 'react';
import Life from '../../../components/StatusBox/Life.jsx';
import Defense from '../../../components/StatusBox/Defense.jsx';
import ResistanceTest from '../../../components/ResistanceTest/ResistanceTest.jsx';
import Skills from '../../../components/Skills/Skills.jsx';
import Attributes from '../../../components/Attributes/Attributes.jsx';
import Proficiency from '../../../components/Proficiency/Proficiency.jsx';
import Equipment from '../../../components/Equipment/Equipment.jsx';
import {PageContentMenuSheet,Row,Column,Exemplo} from './styled.js';

const AttributeCombatPage = () => {
  return (
    <PageContentMenuSheet>
      <Column width="997px" height="1519.5px">
        <Row width="997px" height="1063.51px">
          <Attributes/>
          <Column $gap="7px" width="821px" height="1058px">
            <Row  width="818px" height="192px" >
              <Life/>
              <Defense/>
            </Row>

            <Row $gap="11px" width="811px" height="859px">

              <Column  width="260px" height="838px">
                <ResistanceTest/>
                <Skills/>
              </Column>

              <Column $gap="42px"width="540px" height="859px">
                <Exemplo width="540px" height="227.5px">Ataques e conjuração</Exemplo>
                <Exemplo width="540px" height="590px">SalvaGuardas</Exemplo>
              </Column>
            </Row>
          </Column>
        </Row>

        <Row $gap="23px" width="991px" height="420.5px"> 
          <Proficiency/>
          <Equipment/>
          <Exemplo width="265px" height="410px">Habilidades e Traços</Exemplo>
        </Row>
      </Column>
      
      
      
      
     
    </PageContentMenuSheet>
  );
};

export default AttributeCombatPage;