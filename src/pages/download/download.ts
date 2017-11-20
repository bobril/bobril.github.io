import * as b from 'bobril';
import * as downloadTable from '../../components/downloadTable/lib';
import {
    downloadTableStyle,
    bottomTextStyle,
    downloadLabelStyle
} from './styles';

import { paragtext01 } from '../../components/styles';

import { color04 } from '../../components/colors';
import { centeredPosition } from '../../components/button/styles';
interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv(
                [
                    b.styledDiv(['DOWNLOAD'], downloadLabelStyle),

                    downloadTable.create(),

                    b.styledDiv(['bottom text here'], bottomTextStyle)
                ],
                {
                    position: 'absolute',
                    marginLeft: ' -50px',
                    color: color04,
                    textAlign: 'left'
                },
                centeredPosition,
                paragtext01
            )
        ];

        b.style(me);
    }
});
