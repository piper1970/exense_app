import {shallow} from 'enzyme';
import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';

describe('NotFoundPage', () => {
    test('should display 404 message', () => {
        const wrapper = shallow(<NotFoundPage />);
        expect(wrapper).toMatchSnapshot();
    });
});