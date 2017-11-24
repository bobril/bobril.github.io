import * as b from 'bobril';
import * as styles from '../styles';
import * as Colors from '../../components/colors';
import * as LCenter from '../../components/lCenter/lib';

import * as Download from '../../pages/download/download';
interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const download = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                [
                    LCenter.create({
                        children: [Download.create()],
                        maxWidth: styles.maxPageWidth
                    })
                ],
            )
        ];
    }
});

export default download;
