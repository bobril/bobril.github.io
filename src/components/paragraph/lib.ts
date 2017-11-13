import * as b from 'bobril';

export const create = (content: b.IBobrilChildren) => {
    return {
        tag: 'p',
        children: content
    };
};