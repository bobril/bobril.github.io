import * as b from 'bobril';
import * as styles from '../styles';
import * as GetStarted from './getStarted';
import * as LCenter from '../../components/lCenter/lib';


const getStarted = b.createComponent<never>({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            LCenter.create({
                children: b.styledDiv(GetStarted.create()),
                maxWidth: styles.maxPageWidth
            })
        ];
    }
});

export default getStarted;
