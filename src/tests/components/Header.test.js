import {shallow} from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

describe('Header', () => {
    test('should render header correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});