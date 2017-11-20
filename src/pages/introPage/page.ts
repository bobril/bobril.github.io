import * as b from 'bobril';
import * as styles from '../styles';
import * as Colors from '../../components/colors';

import * as Intro from '../introPage/sections/intro';
interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const home = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                Intro.create(), bobrilPromoStyle)

            // About section
        ];
    }
});

const imageContainerPadding = 42;
const bobrilPromoStyle = b.styleDef({
    textAlign: 'center',
    height: 'calc(100vh - 60px)',
    minHeight: '700px',
    marginTop: -imageContainerPadding,
    marginLeft: -imageContainerPadding,
    marginRight: -imageContainerPadding,
    paddingTop: imageContainerPadding,
    paddingLeft: imageContainerPadding,
    paddingRight: imageContainerPadding,
});

export default home;
