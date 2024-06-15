import { addTask, createTask, removeTask, tasksReducer } from "./tasks-slice";

describe('tasksSlice', () => {
    const initialState = {entities: [
        createTask({title: 'Write tests'}),
        createTask({title: 'Make them pass'})
    ]}
    it(`should add a task when the ${addTask}`, () => {
        const task = createTask({title: 'Profit'})
        const action  = addTask(task)
        const newState = tasksReducer(initialState, action);

        expect(newState.entities).toEqual([task, ...initialState.entities]);
    })

    it(`should remove a task when ${removeTask}`, () => {
        const tasks = initialState.entities;
        const action = removeTask(tasks[0].id);
        const newState = tasksReducer(initialState, action);

        expect(newState.entities.length).toBe(1);
        expect(newState.entities[0].title).toBe('Make them pass');
    })  
})