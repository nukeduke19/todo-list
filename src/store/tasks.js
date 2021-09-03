import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    taskAdded: (tasks, action) => {
      tasks.list.push(action.payload);
    },
    taskDeleted: (tasks, action) => {
      console.log("delete", action);
      const updatedList = tasks.list.filter((task) => task !== action.payload);
      tasks.list = updatedList;
    },
    tasksReseted: (tasks, action) => {
      console.log("reset", action);
      tasks.list = [];
    },
  },
});

export const { taskAdded, taskDeleted, tasksReseted } = slice.actions;
export default slice.reducer;
