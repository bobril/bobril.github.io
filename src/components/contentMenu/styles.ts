import * as b from 'bobril';
import * as colors from './../../components/colors';

export const contentHeader01: b.IBobrilStyleDef = b.styleDef([
    {
        textAlign: 'center',
        fontSize: '16px',
        marginBottom: 40,
        marginTop: 40,
        fontWeight: 'bold'
    }
]);

export const contentHeader02: b.IBobrilStyleDef = b.styleDef([
    {
        color: colors.color04,
        fontSize: 15,
        margin: 'auto auto 13px',
        textTransform: 'uppercase'
    }
]);

export const contentMenu: b.IBobrilStyleDef = b.styleDef([
    {
        paddingLeft: 24,
        fontSize: '16px',
        fontWeight: 400
    }
]);

export const contentMenuElements: b.IBobrilStyleDef = b.styleDef([
    {
        color: 'rgb(148, 154, 169)',
        width: 150,
        margin: 'auto auto 13px',
        listStyle: 'disc',
        lineHeight: '15px',
        display: 'list-item',
        fontSize: 15,
        cursor: 'pointer'
    }
]);
