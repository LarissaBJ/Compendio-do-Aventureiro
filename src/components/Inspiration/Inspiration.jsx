import React from 'react';
import {InspirationCheckBox, InspirationElementsWrapper, InspirationText, InspirationWrapper} from "./styled.js";

const Inspiration = () => {
    return (
        <InspirationWrapper>

            <InspirationElementsWrapper>

                <InspirationCheckBox/>

                <InspirationText>INSPIRAÇÃO</InspirationText>
            </InspirationElementsWrapper>

        </InspirationWrapper>
    );
};

export default Inspiration;