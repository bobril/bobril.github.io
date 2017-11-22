import * as b from 'bobril';
import { paragtext01, headertext01 } from '../../components/styles';

export const downloadTableStyle: b.IBobrilStyleDef = b.styleDef([paragtext01]);

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

export const pagePaddings: b.IBobrilStyleDef = b.styleDef([
    {
        marginLeft: ' 120px',
        marginTop: ' 90px',
        marginRight: ' 360px',
    }
]);
