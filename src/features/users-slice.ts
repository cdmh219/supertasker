import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import data from '../api/data.json';


export type UsersState = {
    entities: User[]
};

const initialState: UsersState = {
    entities: []
};

type DraftUser = {
    realName: string;
    alterEgo: string;
};

export const createUser = (draftUser: DraftUser): User => {
    return { id: nanoid(), tasks: [], ...draftUser }
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<DraftUser>) => {
            const user = createUser(action.payload);
            state.entities.unshift(user);
        },

        removeUser: (state, action: PayloadAction<User['id']>) => {
            const foundIndex = state.entities.findIndex(user => user.id === action.payload)
            state.entities.splice(foundIndex, 1);

        }
    }
})

export const usersReducer = usersSlice.reducer;

export const { addUser, removeUser } = usersSlice.actions;