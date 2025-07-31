import { v4 as uuidv4 } from 'uuid';

export const comUtils = () => {
    const today = new Date();
    const rtn = {
        today: today.toISOString().split('T')[0]
        , uid: uuidv4()
    }
    return rtn
};
