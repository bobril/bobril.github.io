import * as b from 'bobril';
import * as row from './row';
import * as npmFury from '../npmFury/lib';
import { centeredPosition, downloadTablePosition } from './styles';

export interface IData {}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}
export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            row.create(),
            row.create({
                label: 'Bobril',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobril',
                    urlSvg: 'https://badge.fury.io/js/bobril.svg'
                })
            }),
            row.create({
                label: 'Bobril Build',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobril-build',
                    urlSvg: 'https://badge.fury.io/js/bobril-build.svg'
                })
            }),
            row.create({
                label: 'Bobril Material UI',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobril-m',
                    urlSvg: 'https://badge.fury.io/js/bobril-m.svg'
                })
            }),
            row.create({
                label: 'BobX',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobx',
                    urlSvg: 'https://badge.fury.io/js/bobx.svg'
                })
            }),
            row.create()
        ];

        b.style(me, downloadTablePosition);
    }
});
