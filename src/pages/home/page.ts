import * as b from 'bobril';
import * as styles from './styles';
import * as commonStyles from '../styles';
import * as About from './sections/about';
import * as LCenter from '../../components/lCenter/lib';
import * as Intro from './sections/intro';

const home = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                Intro.create(),
                styles.introPartStyle
            ),
            b.styledDiv(
                [
                    LCenter.create({
                        children: [About.create()],
                        maxWidth: commonStyles.maxPageWidth
                    })
                ],
                styles.aboutPartStyle
            )
        ];
    }
});


export default home;
