const TOKEN_KEY = 'auth_token';

export const saveToken = (token: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(TOKEN_KEY, token);
    }
};

export const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(TOKEN_KEY);
    }
    return null;
};

export const removeToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(TOKEN_KEY);
    }
};
