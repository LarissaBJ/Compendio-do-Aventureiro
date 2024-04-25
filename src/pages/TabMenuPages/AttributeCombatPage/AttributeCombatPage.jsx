import React, { Component } from 'react';
import Skills from '../../../components/Skills/Skills';
import Life from '../../../components/StatusBox/Life';
import Defense from '../../../components/StatusBox/Defense';
import {StatusBox} from './styled';
import Equipment from '../../../components/Equipment/Equipment';
import Proficiency from '../../../components/Proficiency/Proficiency';

class AttributeCombatPage extends Component {
  render() {
    return (
      <div>
        <h1>ATTRIBUTECOMBATPAGE</h1>
        <StatusBox>
          <Life/>
          <Defense/>
        </StatusBox>
        <Skills/>
        <Proficiency/>
        <Equipment/>

      </div>
    
        
    );
  }
}

export default AttributeCombatPage;