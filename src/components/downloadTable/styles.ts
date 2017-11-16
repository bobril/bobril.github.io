import * as b from 'bobril';
import { paragtext01 } from '../styles';
import { color04, color02 } from '../colors';

export const centeredPosition: b.IBobrilStyleDef = b.styleDef({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
});

export const rowLabel: b.IBobrilStyleDef = b.styleDef([
    {
        textAlign: 'left',
        marginLeft: '80px',
        paddingTop: '7.5px',
    },
    paragtext01
]);

export const rowStyle: b.IBobrilStyleDef = b.styleDef({
    width: '720px',
    height: '40px',
    position: 'relative',
    background: 'gray'
});

export const downloadTablePosition: b.IBobrilStyleDef = b.styleDef([{
    marginLeft: '-250px',
    marginTop: '-150px',
    background: 'gray'
}, centeredPosition]);
