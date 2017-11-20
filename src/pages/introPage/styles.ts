import * as b from 'bobril';
import {
    headertext01,
    headertext02,
    paragtext01
} from '../../components/styles';
import { color04 } from '../../components/colors';

export const centeredPosition: b.IBobrilStyleDef = b.styleDef({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
});

export const introPageIsAComponentText: b.IBobrilStyleDef = b.styleDef([
    {
        color: color04,
        marginTop: '235px',
        minWidth: '912px'
    },
    headertext02,
    centeredPosition
]);

export const introPageBobrilText: b.IBobrilStyleDef = b.styleDef([
    {
        color: color04,
        marginTop: '172px'
    },
    headertext01,
    centeredPosition
]);

export const aboutPageTextStyles = b.styleDef([
    {
        color: color04
    },
    paragtext01
]);
