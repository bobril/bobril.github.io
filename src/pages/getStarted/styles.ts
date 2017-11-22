import * as b from 'bobril';
import { headertext01, headertext02, paragtext01, smalltext01 } from '../../components/styles';
import { color03, color04, color01 } from '../../components/colors';

export const headerText01: b.IBobrilStyleDef = b.styleDef([
    {
        color: color04,
        paddingBottom: '42px',
    },
    headertext01,
]);

export const headerText02: b.IBobrilStyleDef = b.styleDef([
    {
        color: color03,
        textDecoration: 'underline',
        marginBottom: 16
    },
    headertext02,
]);

export const paragText: b.IBobrilStyleDef = b.styleDef([
    {
        color: color03,
        marginBottom: 16
    },
    paragtext01,
]);

export const bottomText: b.IBobrilStyleDef = b.styleDef([
    {
        color: color03,
        textAlign: 'center'
    },
    headertext02,
]);

export const leftContentPosition: b.IBobrilStyleDef = b.styleDef([
    {
        maxWidth: '720px'
    }
]);

export const rightContentPosition: b.IBobrilStyleDef = b.styleDef([
    {
        marginTop: '-60px',
        marginRight: '30px',
        width: '240px',
        maxWidth: '240px',
        position: 'fixed',
        right: '0px',
        background: color01,
        height: 'calc(100vh - 120px)',
    }
]);