import * as b from 'bobril';
import { width as menuWidth } from '../menu/styles';
import { color02 } from '../colors';

export const footerHeight = 0;

export const basicLayout = b.styleDef({
    minHeight: '750px',
    minWidth: '1200px',
    position: 'relative',
    overflow: 'hidden',
});

export const header = b.styleDef({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 100
});

export const menu = b.styleDef({
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 100
});

export const withMenu = b.styleDef({
    width: `calc(100% - ${menuWidth}px)`,
    marginLeft: menuWidth,
});

export const content = b.styleDef({
    paddingBottom: footerHeight,
    paddingTop: 64,
    background: color02,
});

export const footer = b.styleDef({
    height: footerHeight,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0
});
