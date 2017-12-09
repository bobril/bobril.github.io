import * as b from 'bobril';
import * as styles from '../styles';
import * as Colors from '../../components/colors';
import * as About from './sections/about';
import * as LCenter from '../../components/lCenter/lib';
import * as Intro from '../introPage/sections/intro';
import {appBarHeight} from '../../components/appBar/lib';

const bobrilIntroMinHeight = 700;

const home = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(Intro.create(), bobrilIntroStyle),
            b.styledDiv(
                [
                    LCenter.create({
                        children: [About.create()],
                        maxWidth: styles.maxPageWidth
                    })
                ],
                bobrilAboutStyle
            )
        ];
    }
});

const bobrilIntroStyle = b.styleDef({
    textAlign: 'center',
    height: `calc(100vh - ${appBarHeight}px)`,
    minHeight: `${bobrilIntroMinHeight}px`
});

const bobrilAboutStyle = b.styleDef({
    textAlign: 'center',
    background: Colors.color01,
    padding: 120
});

export default home;
