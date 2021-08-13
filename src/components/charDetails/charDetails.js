import React, {Component} from 'react';
import styled from 'styled-components';

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
export default class CharDetails extends Component {

    render() {
        return (
            <CharDetail>
                <h4>John Snow</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Gender</Term>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Born</Term>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Died</Term>
                        <span>1820</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term className="term">Culture</Term>
                        <span>First</span>
                    </li>
                </ul>
            </CharDetail>
        );
    }
}