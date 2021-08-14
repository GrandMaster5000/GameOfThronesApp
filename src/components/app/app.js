import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ButtonToggle from '../toggleBtn';
import ErrorMessage from '../errorMessage';


export default class App extends Component {  
    state = {
        charActive:true,
        selectedChar: 130,
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

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
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
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

