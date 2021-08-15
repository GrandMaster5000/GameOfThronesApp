import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage';
import ButtonToggle from '../toggleBtn';
import ErrorMessage from '../errorMessage';
import BooksItem from '../pages/booksItemPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';


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
            <Router>
                <div className='app'> 
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

                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousePage}/>
                        <Route path='/books' exact component={BookPage}/>
                        <Route path='/books/:id' render={({match}) => {
                        const {id} = match.params;
                        return <BooksItem bookId={id}/>}}/>
                    </Container>
                </div>
            </Router>
        );
    }
};

