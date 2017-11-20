import * as b from 'bobril';
import { paragtext01 } from '../../components/styles';

export const centeredPosition: b.IBobrilStyleDef = b.styleDef({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
});

export const downloadTableStyle: b.IBobrilStyleDef = b.styleDef([
    {
        marginLeft: '-250px',
        marginTop: '150px'
    },
    centeredPosition
]);

export const downloadLabelStyle: b.IBobrilStyleDef = b.styleDef([
    {
        marginLeft: '-250px',
        marginTop: '-350px',
        width: 720
    },
    centeredPosition
]);

export const bottomTextStyle: b.IBobrilStyleDef = b.styleDef([
    {
        width: 720,
        marginLeft: '-250px',
        marginTop: '0px'
    },
    centeredPosition,
    paragtext01
]);
