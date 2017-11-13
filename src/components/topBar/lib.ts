import * as b from 'bobril';

export interface IData {}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children [
            b.styledDiv([],{

            }),
        ]
    }
});
