import * as b from 'bobril';
import * as downloadTable from '../../components/downloadTable/lib';
import {
    downloadTableStyle,
    bottomTextStyle,
    downloadLabelStyle
} from './styles';

import { paragtext01 } from '../../components/styles';

import { color04 } from '../../components/colors';
interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv(['DOWNLOAD'], downloadLabelStyle),

            downloadTable.create(),

            b.styledDiv(
                [
                    'bottom text here'
                ],
                bottomTextStyle
            )
        ];

        b.style(
            me,
            {
                position: 'relative',
                height: 'calc(100vh - 60px)',
                color: color04,
                textAlign: 'left',
                marginTop: '60px'
            },
            paragtext01
        );
    }
});
