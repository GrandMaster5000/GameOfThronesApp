import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';

const CharDetail = styled.div`
     background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;
const Term = styled.span`
    font-weight: bold;
`;
const SelectError = styled.span`
    font-weight: bold;
    color: white;
    font-size: 30px;

`;
export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
            this.foo.bar = 0
    }

    render() {

        if(!this.state.char) {
            return <SelectError>Please select a character</SelectError>
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <CharDetail>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Gender</Term>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Born</Term>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Died</Term>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Culture</Term>
                        <span>{culture}</span>
                    </li>
                </ul>
            </CharDetail>
        );
    }
}