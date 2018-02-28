import authenticationReducer from '../../reducers/authentication';

describe('authentication reducer', () => {
    describe('@@INIT', () => {
        test('should initialize properly', () => {
            const state = authenticationReducer(undefined,{
                type:'@@INIT'
            });
            expect(state).toEqual({});
        });
    });
    describe('LOGIN', () => {
        test('should handle login request properly', () => {
            const uid = 123;
            const state = authenticationReducer(undefined,{
                type:'LOGIN',
                uid
            });
            expect(state).toEqual({
                uid
            });
        });
    });
    describe('LOGOUT', () => {
        test('should handle logout request properly', () => {
            const previousState = {uid:123};
            const state = authenticationReducer(previousState, {
                type:'LOGOUT'
            });
            expect(state).toEqual({});
        });
    });    
});