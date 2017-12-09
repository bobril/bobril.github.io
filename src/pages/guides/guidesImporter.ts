import * as b from 'bobril';
import * as GeneratedDoc from '../../generatedGuides/page';

export const create = b.createComponent<never>({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = GeneratedDoc.create()
    }
});