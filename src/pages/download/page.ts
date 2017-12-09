import * as b from 'bobril';
import * as LCenter from '../../components/lCenter/lib';
import * as Download from '../../pages/download/download';

const download = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                LCenter.create({
                    children: Download.create()
                })
            )
        ];
    }
});

export default download;
