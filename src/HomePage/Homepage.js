import React from "react";
import CardGroup from './components/CardGroup';
import SwitchGroup from './components/SwitchGroup';
import {Container} from '@material-ui/core'
import FadeIn from 'react-fade-in';
function HomePage(props)
{
    return<FadeIn><Container><CardGroup/>
    <SwitchGroup/>
    </Container></FadeIn>  ;
}
export default HomePage;