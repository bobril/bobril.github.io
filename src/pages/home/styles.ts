import * as b from 'bobril';
import * as colors from '../../components/colors';
import  * as fonts from '../../components/fonts';
import { appBarHeight } from '../../components/appBar/lib';

const introPartMinHeight = 700;

export const introPartStyle = b.styleDef({
    textAlign: 'center',
    height: `calc(100vh - ${appBarHeight}px)`,
    minHeight: `${introPartMinHeight}px`
});

export const aboutPartStyle = b.styleDef({
    textAlign: 'center',
    background: colors.color01,
    padding: 120
});

export const mixinCenterPosition: b.IBobrilStyleDef = b.styleDef({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
});

export const introPageIsAComponentText: b.IBobrilStyleDef = b.styleDef([
    {
        marginTop: '235px',
        minWidth: '912px'
    },
    fonts.headertext02,
    mixinCenterPosition
]);

export const introPageBobrilText: b.IBobrilStyleDef = b.styleDef([
    {
        marginTop: '172px'
    },
    fonts.headertext01,
    mixinCenterPosition
]);

export const aboutPageTextStyles = b.styleDef([fonts.paragtext01]);
