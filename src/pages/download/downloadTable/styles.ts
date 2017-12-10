import * as b from 'bobril';
import * as colors from "../../../components/colors";

export const rowLabel: b.IBobrilStyleDef = b.styleDef({
    cssFloat: 'left',
    width: 240,
    paddingTop: 7.5,
});

export const rowContent: b.IBobrilStyleDef = b.styleDef({
    paddingTop: 8,
    letterSpacing: '0px',
});

export const rowStyle: b.IBobrilStyleDef = b.styleDef({
    height: 40
});

export const packagesTableStyle: b.IBobrilStyleDef = b.styleDef({
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 80,
    background: colors.downloadTableColor
});
