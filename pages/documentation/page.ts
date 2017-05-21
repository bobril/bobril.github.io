import * as b from 'bobril';
import * as Label from '../../components/label/lib';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const documentation = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
        ]
    }
});

export default documentation;