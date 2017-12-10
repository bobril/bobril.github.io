import * as b from 'bobril';
import * as fonts from '../../components/fonts';
import * as colors from '../../components/colors';

export const downloadLabelStyle: b.IBobrilStyleDef = b.styleDef([
    {
        marginBottom: '50px'
    },
    fonts.headertext01
]);

export const bottomTextStyle: b.IBobrilStyleDef = b.styleDef([
    {
        marginTop: '50px',
        color: colors.color03
    },
    fonts.paragtext01
]);
