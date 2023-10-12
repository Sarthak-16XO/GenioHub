import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";


// configureStore is a function that takes in an object 
//store is a global state which stores entire info of our app 

// reducer is a function that takes in the entire state and returns a new state

export const store = configureStore({
    // reducing the entire state to get what we need

    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    // middleware is a function that takes in the action and returns a new action
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})
