import * as b from 'bobril';
import * as Label from '../../../components/label/lib';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        const d = ctx.data;

        me.children = [
            // TODO
            // Label.create({
            //     label: 'Get Started',
            //     size: Label.LabelSize.Title
            // }),

        ];

        b.style(me, {});
    }
});