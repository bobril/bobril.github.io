import * as b from 'bobril';
import * as styles from './../../components/styles';
import * as colors from './../../components/colors';

export const s: b.IBobrilStyleDef = b.styleDef([
    {
        maxWidth: '720px'
    }
]);

export const contentHeader01: b.IBobrilStyleDef = b.styleDef([
    {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    styles.menutext01
]);

export const contentHeader02: b.IBobrilStyleDef = b.styleDef([
    {
        color: colors.color03
    }
]);

export const contentTexts: b.IBobrilStyleDef = b.styleDef([
    {
        width: '140px',
        margin: 'auto'
    }
]);

export const contentMenuElements: b.IBobrilStyleDef = b.styleDef([
    {
        color: '#949AA9',
        display: 'list-item',
        listStyle: 'inside',
        marginLeft: '5px',
        paddingTop: '5px',
        paddingBottom: '5px',
        cursor: 'pointer'
    },
    styles.smalltext01
]);
