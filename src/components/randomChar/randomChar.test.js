import React from 'react';
import RandomChar from './randomChar';
import {shallow} from 'enzyme';
import '../../setupTests';;

describe('Testing <RandomChar/>.', () => {
    it('RandomChar have rendered corretcly', () => {
        const char = shallow(<RandomChar/>);
        expect(char).toMatchSnapshot();
    });

});
