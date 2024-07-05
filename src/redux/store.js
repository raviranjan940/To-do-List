import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem('tasks', serializedState);
  } catch {
    // Ignore write errors
  }
};

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  preloadedState: { tasks: loadState() }
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
