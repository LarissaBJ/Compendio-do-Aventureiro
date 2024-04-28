import React from 'react';
import { useCRUD } from "../../context/CRUDContext.jsx";
import {
    AttSpell,
    AttSpellBox,
    AttSpellElementWrapper,
    AttSpellHeaderText,
    AttSpellHeaderWrapper,
    AttSpellList, AttSpellSelect, AttSpellText,
    AttSpellTittle
} from "./styled.js";
import BonusBoxImage from "../../assets/Atributos e Combates/Inputs e Selects/Input 6.svg";
import DamageBoxImage from "../../assets/Atributos e Combates/Inputs e Selects/Input 5.svg";
import {IconButton, IconImage} from "../GlobalStyled.js";
import IconeButtonAddImagem from "../../assets/Atributos e Combates/Icones e Botões/Icone de Criar.svg";
import IconeButtonDelImage from "../../assets/Atributos e Combates/Icones e Botões/Icone de Excluir.svg"

const AttacksAndSpellcasting = () => {
    const { attacks, addAttack, updateAttack, deleteAttack } = useCRUD();

    const handleAddAttack = () => {
        const newAttack = {
            name: '',
            bonus: 0,
            damage: '',
            type: '',
            id: attacks.length
        };
        addAttack(newAttack);
    };

    const handleUpdateAttack = (id, field, value) => {
        const attackToUpdate = attacks.find(attack => attack.id === id);
        const updatedAttack = { ...attackToUpdate, [field]: value };
        updateAttack(id, updatedAttack);
    };

    const handleDeleteAttack = (id) => {
        deleteAttack(id);
    };

    return (
        <AttSpellBox>

            <AttSpellElementWrapper>
                <AttSpellTittle>ATAQUES E CONJURAÇÃO</AttSpellTittle>

                <AttSpellHeaderWrapper>
                    <AttSpellHeaderText
                        style={{marginLeft: '85px'}}
                    >Nome</AttSpellHeaderText>
                    <AttSpellHeaderText
                        style={{marginLeft: '92px'}}
                    >Bonus</AttSpellHeaderText>
                    <AttSpellHeaderText
                        style={{marginLeft: '45px'}}
                    >Dano</AttSpellHeaderText>
                    <AttSpellHeaderText
                        style={{marginLeft: '47px'}}
                    >Tipo</AttSpellHeaderText>
                </AttSpellHeaderWrapper>
                {attacks.map((attack) => (
                    <AttSpell key={attack.id}>
                        <AttSpellSelect
                            value={"Fireball"}
                            onChange={(e) => handleUpdateAttack(attacks.id, 'name', e.target.value)}
                        />
                        <AttSpellText
                            $image={BonusBoxImage}
                            style={{width: '80px', height: '46px'}}
                        >{2}</AttSpellText>
                        <AttSpellText
                            $image={DamageBoxImage}
                            style={{width: '80px', height: '46px'}}
                        >{"3d6"}</AttSpellText>
                        <AttSpellText
                            $image={BonusBoxImage}
                            style={{width: '80px', height: '46px'}}
                        >{"fire"}</AttSpellText>
                        <IconButton onClick={() => handleDeleteAttack(attack.id)}>
                            <IconImage src={IconeButtonDelImage} alt="Deletar" />
                        </IconButton>
                    </AttSpell>
                ))}
            </AttSpellElementWrapper>

            <div>
                <IconButton onClick={handleAddAttack}>
                    <IconImage src={IconeButtonAddImagem} alt="Deletar" />
                </IconButton>

                <IconButton>
                    <IconImage src={IconeButtonDelImage} alt="Deletar" />
                </IconButton>
            </div>

        </AttSpellBox>

);
};

export default AttacksAndSpellcasting;