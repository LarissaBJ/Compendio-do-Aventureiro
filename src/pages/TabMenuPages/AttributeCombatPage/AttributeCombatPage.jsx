import React, { Component } from 'react';
import Skills from '../../../components/Skills/Skills';
import Life from '../../../components/StatusBox/Life';
import Defense from '../../../components/StatusBox/Defense';
import {StatusBox} from './styled';

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
      </div>
    
        
    );
  }
}

export default AttributeCombatPage;