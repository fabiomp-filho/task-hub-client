const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_info';

export const saveToken = (token: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(TOKEN_KEY, token);
    }
};

export const getToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem(TOKEN_KEY);

        return token ? token : null;
    }
    return null;
};

export const removeLogin = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    }
};

export const saveUser = (user: Object) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
};

export const getUser = () => {
    if (typeof window !== 'undefined') {
        const user = localStorage.getItem(USER_KEY);
        return user ? JSON.parse(user) : null;
    }
    return null;
};