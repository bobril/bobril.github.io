import * as b from 'bobril';
import * as GeneratedDoc from '../../generatedGuides/page';

interface IContext extends b.IBobrilCtx {
}

export const create = b.createComponent<never>({
    render(_ctx: IContext, me: b.IBobrilNode) {
        me.children = GeneratedDoc.create()
    }
});