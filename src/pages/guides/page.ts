import * as b from 'bobril';
import * as LCenter from '../../components/lCenter/lib';
import * as GuidesImporter from './guidesImporter'

const documentation = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            LCenter.create({
                    children: GuidesImporter.create()
                }
            )
        ];
    }
});

export default documentation;