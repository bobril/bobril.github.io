import * as b from 'bobril';
import { headertext01, headertext02, paragtext01, smalltext01 } from '../../components/styles';
import { color03, color04, color01 } from '../../components/colors';

export const headerText01: b.IBobrilStyleDef = b.styleDef([
    {
        color: color04,
        marginTop: '48px',
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

export const leftContentPaddings: b.IBobrilStyleDef = b.styleDef([
    {
        marginLeft: '120px',
        marginTop: '90px',
        marginRight: '90px',
        maxWidth: '720px'
    }
]);

export const rightContentPosition: b.IBobrilStyleDef = b.styleDef([
    {
        margin: '-88px 30px 30px 90px',
        width: '240px',
        maxWidth: '240px',
        position: 'fixed',
        right: '0px',
        background: color01,
        height: 'calc(100vh - 120px)',
    }
]);