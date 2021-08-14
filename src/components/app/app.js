import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ButtonToggle from '../toggleBtn';


export default class App extends Component {  
    state = {
        charActive:true
    }
    onToggleChar = () => {
        this.setState({
            charActive: !this.state.charActive
        });
    }

    render() {
        const {charActive} = this.state;

        const charContent = charActive ? <RandomChar/> : null;
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
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

