import {shallow} from 'enzyme';
import React from 'react';
import {Header} from '../../components/Header';

let startLogout, wrapper;
beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout}/>);
});

describe('Header', () => {
    test('should render header correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call startLogout button on click', () => {
        wrapper.find('button').simulate('click');
        expect(startLogout).toHaveBeenCalled();
    });
});