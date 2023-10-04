export const USER_INFO = 'USER_INFO';

const userAction = (email: string) => ({
    type: USER_INFO,
    payload: email,

});

export default userAction;