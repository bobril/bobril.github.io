import * as b from 'bobril';
import * as styles from './styles';
import * as LCenter from '../lCenter/lib';

interface IData {
    content: b.IBobrilChildren;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    media: b.IBobrilMedia;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        ctx.media = b.getMedia();

        const data = ctx.data;
        const media = ctx.media;

        me.children = data.content;

        b.style(
            me,
            styles.contentPc
        );
    },
});