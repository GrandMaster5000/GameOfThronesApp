import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ButtonToggle from '../toggleBtn';
import ErrorMessage from '../errorMessage';


export default class App extends Component {  
    state = {
        charActive:true,
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    onToggleChar = () => {
        this.setState({
            charActive: !this.state.charActive
        });
    }

    render() {
        const {charActive} = this.state;

        const charContent = charActive ? <RandomChar/> : null;

        if(this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {charContent}
                            <ButtonToggle onToggleChar={this.onToggleChar}/>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};

