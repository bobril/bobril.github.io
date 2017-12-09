import * as b from 'bobril';
import * as styles from './../../components/styles';
import * as colors from './../../components/colors';

export const contentHeader01: b.IBobrilStyleDef = b.styleDef([
    {
        textAlign: 'center',
        fontSize: '16px',
        marginBottom: 40,
        marginTop: 40,
        fontWeight: 'bold',
    }
]);

export const contentHeader02: b.IBobrilStyleDef = b.styleDef([
    {
        color: colors.color04,
        fontSize: 17,
    }
]);

export const contentMenu: b.IBobrilStyleDef = b.styleDef([
    {
        width: 145,
        margin: 'auto',
        fontSize: '16px',
        fontWeight: 400
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
