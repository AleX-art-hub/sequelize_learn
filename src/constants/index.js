export const NAME_PATTER = /^[A-Z][a-z]{0,64}$/;
export const LOGIN_PATTER = /^(?!.*?[\\/\[\]:;=,+*?<>]).{6,16}$/;
export const PASSWORD_PATTER = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?^\-]{8,63}$/;

export const ROLE = Object.freeze({
    USER: 'USER',
    ADMIN: 'ADMIN',
    MODERATOR: 'MODERATOR',
});

export const ACTION = Object.freeze({
    CREATE: 'CREATE',
    READ: 'READ',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
});