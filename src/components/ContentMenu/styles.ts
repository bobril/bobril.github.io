import * as b from 'bobril';
import * as styles from './../../components/styles';
import * as colors from './../../components/colors';

export const s: b.IBobrilStyleDef = b.styleDef([
    {
        maxWidth: 720
    }
]);

export const contentHeader01: b.IBobrilStyleDef = b.styleDef([
    {
        marginTop: 40,
        marginBottom: 40,
        textAlign: 'center'
    },
    styles.menutext01
]);

export const contentHeader02: b.IBobrilStyleDef = b.styleDef([
    {
        color: colors.color04,
        fontSize: 17,
    }
]);

export const contentTexts: b.IBobrilStyleDef = b.styleDef([
    {
        width: 145,
        margin: 'auto'
    }
]);

export const contentMenuElements: b.IBobrilStyleDef = b.styleDef([
    {
        color: '#949AA9',
        display: 'list-item',
        listStyle: 'inside',
        marginLeft: '5px',
        paddingTop: '7.5px',
        paddingBottom: '7.5px',
        fontSize: 15,
        cursor: 'pointer'
    }
]);
