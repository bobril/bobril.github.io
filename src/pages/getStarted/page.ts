import * as b from 'bobril';
import * as styles from '../styles';
import * as Colors from '../../components/colors';

import * as GetStarted from './getStarted';
import * as LCenter from '../../components/lCenter/lib';
import { maxPageWidth } from '../styles';
interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const getStarted = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            LCenter.create({
                children: b.styledDiv(GetStarted.create(), bobrilPromoStyle),
                maxWidth: 1200
            })
        ];
    }
});

const bobrilPromoStyle = b.styleDef({
    color: Colors.color04,
    textAlign: 'left',
});

export default getStarted;
