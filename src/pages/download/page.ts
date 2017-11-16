import * as b from 'bobril';
import * as styles from '../styles';
import * as Colors from '../../components/colors';

import * as Download from '../../pages/download/download';
interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const home = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                Download.create(), bobrilPromoStyle)
        ];
    }
});

const imageContainerPadding = 42;
const bobrilPromoStyle = b.styleDef({
    textAlign: 'center',
    background: Colors.color02,
    marginTop: -imageContainerPadding,
    marginLeft: -imageContainerPadding,
    marginRight: -imageContainerPadding,
    paddingTop: imageContainerPadding,
    paddingLeft: imageContainerPadding,
    paddingRight: imageContainerPadding,
});

export default home;
