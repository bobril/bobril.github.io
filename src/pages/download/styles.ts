import * as b from 'bobril';
import { paragtext01, headertext01 } from '../../components/styles';

export const centeredPosition: b.IBobrilStyleDef = b.styleDef({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
});

export const downloadTableStyle: b.IBobrilStyleDef = b.styleDef([
    centeredPosition,
    paragtext01
]);

export const downloadLabelStyle: b.IBobrilStyleDef = b.styleDef([
    {
        marginTop: '-210px',
        width: 720,
    },
    centeredPosition,
    headertext01
]);

export const bottomTextStyle: b.IBobrilStyleDef = b.styleDef([
    {
        width: 720,
        marginTop: '156px'
    },
    centeredPosition,
    paragtext01
]);
