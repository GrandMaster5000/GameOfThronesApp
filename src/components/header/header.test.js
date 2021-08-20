import React from 'react';
import Header from './header';
import {shallow} from 'enzyme';
import '../../setupTests';

global.shallow = shallow;

describe('Testing <Header/>.', () => {
    it('Header have rendered corretcly', () => {
        const header = shallow(<Header/>);
        expect(header).toMatchSnapshot();
    })
});