import { addUser, createUser, removeUser, usersReducer } from "./users-slice";

const initialState = {
    entities: [
        createUser({realName: 'Beyonce Knowles', alterEgo: 'Sasha Fierce'}),
        createUser({realName: 'Michael Jackson', alterEgo: 'King of Pop'})
    ]
}

describe('usersSlice', () => {
    it('should add a new user', () => {
        const user = createUser({realName: 'Jane Doe', alterEgo: 'Dommy'});
        const action = addUser(user);
        const newState = usersReducer(initialState, action);

        expect(newState.entities).toEqual([user, ...initialState.entities]);
    })

   it('should remove a user', () => {
        const users = initialState.entities;
        const action = removeUser(users[0].id);
        const newState = usersReducer(initialState, action);

        expect(newState.entities.length).toBe(1);
        expect(newState.entities[0].realName).toBe('Michael Jackson')
   })
})