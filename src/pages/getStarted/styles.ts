import * as b from 'bobril';
import { headertext01, headertext02, paragtext01, smalltext01 } from '../../components/styles';
import { color03, color04, color01 } from '../../components/colors';

export const headerText: b.IBobrilStyleDef = b.styleDef([
    {
        color: color04,
        marginTop: '48px',
        paddingBottom: '42px'
    },
    headertext01,
]);

export const menuHeaderText: b.IBobrilStyleDef = b.styleDef([
    {
        color: color03,
        textDecoration: 'underline'
    },
    headertext02,
]);

export const paragText: b.IBobrilStyleDef = b.styleDef([
    {
        color: color03,
    },
    paragtext01,
]);

export const codeStyle: b.IBobrilStyleDef = b.styleDef([
    {
        color: color03,
        background: color01,
        paddingBottom: 7.5,
        paddingTop: 7.5,
        paddingLeft: 7.5,
        margin: 16
    },
    smalltext01
]);