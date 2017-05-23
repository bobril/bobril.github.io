import * as b from 'bobril';
import * as m from 'bobril-m';

export const footerHeight = 30;

export const basicLayout = b.styleDef({
    minHeight: '100%',
    minWidth: 320,
    position: 'relative',
    background: m.grey100,
    overflow: 'hidden',
});

export const header = b.styleDef({
    width: '100%',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 500
});

export const content = b.styleDef({
    paddingBottom: footerHeight,
    paddingTop: 64
});

export const footer = b.styleDef({
    height: footerHeight,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0
});