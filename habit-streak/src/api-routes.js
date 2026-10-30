export const BASE_API_URL = import .meta.env.VITE_API_URL

export const SIGN_UP_API_ROUTE = "/auth/signup"
export const LOGIN_API_ROUTE ="/auth/login"
export const CURRENT_USER_API_ROUTE = "/auth/me"
export const HABITS_API_ROUTE = "habits"
export const HABIT_BY_ID_API_ROUTE =(id) => '/habits/${id}'