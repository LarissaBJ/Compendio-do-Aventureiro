import React from 'react';
import Life from '../../../components/StatusBox/Life.jsx';
import Defense from '../../../components/StatusBox/Defense.jsx';
import ResistanceTest from '../../../components/ResistanceTest/ResistanceTest.jsx';
import Skills from '../../../components/Skills/Skills.jsx';
import Attributes from '../../../components/Attributes/Attributes.jsx';
import Proficiency from '../../../components/Proficiency/Proficiency.jsx';
import Equipment from '../../../components/Equipment/Equipment.jsx';
import {PageContentMenuSheet ,Row,Column,Exemplo} from '../../../App.js';
import Inspiration from "../../../components/Inspiration/Inspiration.jsx";
import ProficiencyBonus from "../../../components/ProficiencyBonus/ProficiencyBonus.jsx";
import DeathSaves from "../../../components/DeathSaves/DeathSaves.jsx";
import HitDice from "../../../components/HitDice/HitDice.jsx";
import AttacksAndSpellcasting from "../../../components/AttacksAndSpellcasting/AttacksAndSpellcasting.jsx";
import RaceTraits from "../../../components/RaceTraits/RaceTraits.jsx";

const AttributeCombatPage = () => {
  return (
      <PageContentMenuSheet>
        <Column $width="997px" $height="1519.5px">
          <Row $width="997px" $height="1063.51px">
            <Attributes/>
            <Column $gap="7px" $width="821px" $height="1058px">
              <Row  $width="818px" $height="192px" >
                <Defense/>
                <Life/>
              </Row>

              <Row $gap="11px" $width="811px" $height="859px">

                <Column  $width="260px" $height="838px">
                  <ResistanceTest/>
                  <Skills/>
                </Column>

                <Column $gap="21px" $width="540px" $height="859px">
                  <Column $gap="9px" $width="540px" $height="227.5px">

                    <Row $gap='25px' $width='540px' $height='87.06px'>
                      <Inspiration/>
                      <ProficiencyBonus/>
                    </Row>

                    <Row $gap='14px' $width='348px' $height='130px' style={{alignSelf: "flex-start"}}>
                      <DeathSaves/>
                      <HitDice/>
                    </Row>

                  </Column>
                  <AttacksAndSpellcasting/>

                </Column>
              </Row>
            </Column>
          </Row>

          <Row $gap="21px" $width="991px" $height="420.5px">
              <Proficiency/>
              <Equipment/>
              <RaceTraits $width="268px" $height="414px"/>
          </Row>
        </Column>

      </PageContentMenuSheet>
  );
};

export default AttributeCombatPage;