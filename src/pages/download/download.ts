import * as b from 'bobril';
import * as NpmFury from '../../components/npmFury/lib';

interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv(
                [
                    b.styledDiv(
                        [
                            b.styledDiv('Bobril', { marginRight: 8, display: 'table-cell' }),
                            NpmFury.create({
                                url: 'https://badge.fury.io/js/bobril',
                                urlSvg: 'https://badge.fury.io/js/bobril.svg',
                            })
                        ],
                        {
                            textAlign: 'left',
                            marginTop: 8,
                            display: 'table-row'
                        }
                    )
                ],
                {
                    width: '720px',
                    height: '40px',
                    background: 'green'
                }
            )
        ];

        b.style(me, {
            position: 'relative',
            height: 'calc(100vh - 60px)'
        });
    }
});
