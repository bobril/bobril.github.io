import * as b from 'bobril';
import * as styles from '../../components/styles';
import * as colors from '../../components/colors';

export const headerText01: b.IBobrilStyleDef = b.styleDef([
    {
        color: colors.color04,
        paddingBottom: '42px',
    },
    styles.headertext01,
]);

export const headerText02: b.IBobrilStyleDef = b.styleDef([
    {
        color: colors.color03,
        textDecoration: 'underline',
        marginBottom: 16
    },
    styles.headertext02,
]);

export const paragText: b.IBobrilStyleDef = b.styleDef([
    {
        color: colors.color03,
        marginBottom: 16
    },
    styles.paragtext01,
]);

export const bottomText: b.IBobrilStyleDef = b.styleDef([
    {
        color: colors.color03,
        textAlign: 'center'
    },
    styles.headertext02,
]);

export const leftContentPosition: b.IBobrilStyleDef = b.styleDef([
    {
        maxWidth: '720px'
    }
]);

export const rightContentPosition: b.IBobrilStyleDef = b.styleDef([
    {
        width: '240px',
        maxWidth: '240px',
        position: 'absolute',
        right: '30px',
        background: colors.color01,
        height: 'calc(100vh - 120px)',
    }
]);