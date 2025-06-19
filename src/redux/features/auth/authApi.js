import { baseApi } from "@/redux/api/baseApi";
export const authApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credentials) => ({
        url: "auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignUpMutation } = authApi;
