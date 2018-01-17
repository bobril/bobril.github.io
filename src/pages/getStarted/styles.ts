import * as b from 'bobril';
import * as fonts from '../../components/fonts';
import * as colors from '../../components/colors';
import * as AppBar from '../../components/appBar/lib';

const rightMenuMargin = 30;
const rightMenuWidth = 240;

export const headerText01: b.IBobrilStyleDef = b.styleDef([
    {
        paddingBottom: 10
    },
    fonts.headertext01
]);

export const headerText02: b.IBobrilStyleDef = b.styleDef([
    {
        paddingTop: 60,
        textDecoration: 'underline',
        marginBottom: 16
    },
    fonts.headertext02
]);

export const paragText: b.IBobrilStyleDef = b.styleDef([
    {
        marginBottom: 16
    },
    fonts.paragtext01
]);

export const bottomText: b.IBobrilStyleDef = b.styleDef([
    {
        textAlign: 'center',
        paddingTop: 64
    },
    fonts.headertext02
]);

export const leftContentPosition: b.IBobrilStyleDef = b.styleDef([
    {
        paddingRight: rightMenuMargin * 3 + rightMenuWidth + 90
    }
]);

// noinspection JSSuspiciousNameCombination
export const rightContentPosition: b.IBobrilStyleDef = b.styleDef([
    {
        width: rightMenuWidth,
        position: 'fixed',
        top: AppBar.appBarHeight + rightMenuMargin,
        right: rightMenuMargin,
        bottom: rightMenuMargin,
        background: colors.color01,
        height: `calc(100vh - ${AppBar.appBarHeight + 2 * rightMenuMargin}px)`,
        overflow: 'auto'
    }
]);
