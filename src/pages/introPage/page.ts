import * as b from 'bobril';
import * as styles from '../styles';
import * as Colors from '../../components/colors';
import * as About from './sections/about';
import * as LCenter from '../../components/lCenter/lib';

import * as Intro from '../introPage/sections/intro';
import { maxPageWidth } from '../styles';
interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const contentAboutMinHeight = 1180;

const home = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
                    b.styledDiv(Intro.create(), bobrilIntroStyle),
                    b.styledDiv(
                        [
                            LCenter.create({
                                children: [About.create()],
                                maxWidth: styles.maxPageWidth
                            })
                        ],
                        bobrilAboutStyle,
                    )
        ];
    }
});

const bobrilIntroStyle = b.styleDef({
    textAlign: 'center',
    minHeight: '500px',
});

const bobrilAboutStyle = b.styleDef({
    textAlign: 'center',
    background: Colors.color01,
    padding: 120
});

export default home;
