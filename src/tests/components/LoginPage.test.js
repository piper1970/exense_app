import {shallow} from 'enzyme';
import React from 'react';
import {LoginPage} from '../../components/LoginPage';

let wrapper, startLogin;
beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin}/>);
})
describe('LoginPage', () => {
    test('should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should call login function when button is clicked', () => {
        wrapper.find('button').simulate('click');
        expect(startLogin).toHaveBeenCalled();
    });
});