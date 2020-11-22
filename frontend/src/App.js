import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from 'react-bootstrap'

const App = () => {
    return (
        <>
            <Header/>
            <Container>
                <h1>Bienvenue</h1>
            </Container>
            <Footer/>
        </>
    );
}

export default App;
