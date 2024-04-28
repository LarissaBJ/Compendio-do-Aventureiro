import React from 'react';
import {PageContenier,BoxOptionContenier,HomePageContent} from '../../App.js';
import CreateBoxOption from '../../components/HomeComponents/CreateBoxOption.jsx';
import ManegeBoxOption from '../../components/HomeComponents/ManegeBoxOption.jsx'
import Banner from '../../components/HomeComponents/Banner.jsx';


const HomePage = () => {
    return (
        <PageContenier>
            <HomePageContent>
                <Banner/>
                <BoxOptionContenier>
                    <CreateBoxOption/>
                    <ManegeBoxOption/>
                </BoxOptionContenier>
            </HomePageContent>
          
         
        </PageContenier>
    );
};

export default HomePage;