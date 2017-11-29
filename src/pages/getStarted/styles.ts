import * as b from 'bobril';
import * as styles from '../../components/styles';
import * as colors from '../../components/colors';

export const headerText01: b.IBobrilStyleDef = b.styleDef([
    {
        paddingBottom: '60px',
    },
    styles.headertext01,
]);

export const headerText02: b.IBobrilStyleDef = b.styleDef([
    {
        textDecoration: 'underline',
        marginBottom: 16
    },
    styles.headertext02,
]);

export const paragText: b.IBobrilStyleDef = b.styleDef([
    {
        marginBottom: 16
    },
    styles.paragtext01,
]);

export const bottomText: b.IBobrilStyleDef = b.styleDef([
    {
        textAlign: 'center'
    },
    styles.headertext02,
]);

export const leftContentPosition: b.IBobrilStyleDef = b.styleDef([
    {
        paddingRight: 210,
    }
]);

export const rightContentPosition: b.IBobrilStyleDef = b.styleDef([
    {
        width: 240,
        maxWidth: 240,
        position: 'absolute',
        right: '30px',
        background: colors.color01,
        height: 'calc(100vh - 120px)',
    }
]);