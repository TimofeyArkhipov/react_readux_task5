import React, {useContext, useState} from 'react';
import Container from '@material-ui/core/Container';
import store from "./redux/store";
import {Provider} from "react-redux";
import GitsList from "./components/gitsList";
import GitsInfo from "./components/gitsInfo";

export default function GitsApp() {

    return(
        <Provider store={store}>
            <Container  maxWidth="1200">
                <div className='amount-position'>
                    <GitsList/>
                    <GitsInfo/>
                </div>
            </Container>
        </Provider>
    )
}

