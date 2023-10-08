import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { newTaskModel, TaskModel } from '../models/TaskModel';

const eId = 63149;

export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://185.244.172.108:8081/' }),
    endpoints: (builder) => ({
        getTaskList: builder.query<TaskModel, void>({
            query: () => `v1/outlay-rows/entity/${eId}/row/list`,
        }),
        createTask: builder.mutation({
            query: (newTask: newTaskModel) => ({
                url: `v1/outlay-rows/entity/123/row/create`,
                method: 'POST',
                body: newTask,
            }),
        }),
    }),
});

export const { useCreateTaskMutation, useGetTaskListQuery } = projectsApi;
