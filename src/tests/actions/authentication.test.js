import {login, logout} from '../../actions/authentication';

describe('Authentication', () => {
    describe('login', () => {
        test('should set the appropriate action when called with uid', () => {
            const uid = 123;
            const result = login(uid);
            expect(result).toEqual({
                type:'LOGIN',
                uid
            });
        });
    });
    describe('logout', () => {
        test('should set the appropriate action when called', () => {
            const result = logout();
            expect(result).toEqual({
                type:'LOGOUT'
            });
        });
    });
});