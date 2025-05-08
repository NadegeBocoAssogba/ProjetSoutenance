import {createApi} from "@reduxjs/toolkit/query";
const authAPI = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:500/api/auth",
        credentials: "include",
    })
});