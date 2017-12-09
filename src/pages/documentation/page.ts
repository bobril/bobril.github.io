import * as b from 'bobril';
import * as LCenter from '../../components/lCenter/lib';
import * as DocImporter from './docImporter';

const documentation = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            LCenter.create({
                children: DocImporter.create()
            })
        ];
    }
});

export default documentation;
