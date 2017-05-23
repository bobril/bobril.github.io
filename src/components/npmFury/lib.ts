import * as b from 'bobril';

interface IData {
    url: string;
    urlSvg: string;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        const d = ctx.data;

        me.tag = 'a';
        me.attrs = {
            href: d.url
        };
        me.children = [
            {
                tag: 'img',
                attrs: {
                    src: d.urlSvg,
                    alt: 'npm version',
                    height: 18
                },
            }
        ]
    }
});