import React, { useContext } from 'react';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import { Container, Title, UploadButton, Icon, Section, Label, InputRow, Input, Header, Box, UploadImagemDiv, Body, Image } from './Styled';
import iconIdade from '../../assets/Detalhes do Personagem/Icones e Botões/Icone Idade.svg';
import iconAltura from '../../assets/Detalhes do Personagem/Icones e Botões/Icone Altura.svg';
import iconPeso from '../../assets/Detalhes do Personagem/Icones e Botões/Icone Peso.svg';
import iconOlhos from '../../assets/Detalhes do Personagem/Icones e Botões/Icone Olhos.svg';
import iconPele from '../../assets/Detalhes do Personagem/Icones e Botões/Icone Pele.svg';
import iconCabelo from '../../assets/Detalhes do Personagem/Icones e Botões/Icone Cabelo.svg';
import AdicionarImagem from '../../assets/Detalhes do Personagem/Icones e Botões/AdicionarImagem.svg';

const Appearance = () => {
    const { characterSheet, updateAppearance, uploadCharacterImage } = useContext(CharacterSheetContext);
    const { appearance } = characterSheet.characterDetails;

    const handleChange = (attribute, event) => {
        updateAppearance(attribute, event.target.value);
    };

    const handleImageUpload = (event) => {
        if (event.target.files[0]) {
            uploadCharacterImage(event.target.files[0]);
        }
    };

    return (
        <Container>
            <Header>
                <Title>APARÊNCIA DO PERSONAGEM</Title>
                <UploadButton onClick={() => document.getElementById('file-upload').click()}>
                    <Icon src={AdicionarImagem} alt="Upload" />
                </UploadButton>
                <input
                    type="file"
                    id="file-upload"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                />
            </Header>
            <Body>
                <Section>
                    {[
                        { label: "IDADE", icon: iconIdade, attribute: "age", type: "number" },
                        { label: "ALTURA", icon: iconAltura, attribute: "height", type: "number" },
                        { label: "PESO", icon: iconPeso, attribute: "weight", type: "number" },
                        { label: "OLHOS", icon: iconOlhos, attribute: "eyes", type: "text" },
                        { label: "PELE", icon: iconPele, attribute: "skin", type: "text" },
                        { label: "CABELO", icon: iconCabelo, attribute: "hair", type: "text" },
                    ].map((item, index) => (
                        <Box key={index}>
                            <Label>{item.label}</Label>
                            <InputRow>
                                <Icon src={item.icon} alt={item.label} />
                                <Input
                                    type={item.type}
                                    value={appearance[item.attribute] || ''}
                                    onChange={(e) => handleChange(item.attribute, e)}
                                />
                            </InputRow>
                        </Box>
                    ))}
                </Section>
                <UploadImagemDiv>
                    {appearance.image && <Image src={appearance.image} alt="Character" />}
                </UploadImagemDiv>
            </Body>
        </Container>
    );
};

export default Appearance;
