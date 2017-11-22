import * as b from 'bobril';
import { paragtext01, headertext01 } from '../../components/styles';

export const downloadLabelStyle: b.IBobrilStyleDef = b.styleDef([
    {
        marginBottom: '50px',
        width: 720
    },
    headertext01
]);

export const bottomTextStyle: b.IBobrilStyleDef = b.styleDef([
    {
        width: 720,
        marginTop: '50px'
    },
    paragtext01
]);
