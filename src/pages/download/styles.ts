import * as b from 'bobril';
import * as styles from '../../components/styles';
import * as colors from '../../components/colors';

export const downloadLabelStyle: b.IBobrilStyleDef = b.styleDef([
    {
        marginBottom: '50px',
        width: 720
    },
    styles.headertext01
]);

export const bottomTextStyle: b.IBobrilStyleDef = b.styleDef([
    {
        width: 720,
        marginTop: '50px',
        color: colors.color03,
    },
    styles.paragtext01
]);
