import * as b from 'bobril';
import * as styles from './styles';
import * as Label from './../../components/label/lib';
import * as ContentMenuItem from './item';

export { EItemType } from './item';

export interface IData {
    label: string;
    items: ContentMenuItem.IItem[];
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            Label.create({
                label: ctx.data.label,
                size: Label.LabelSize.Headline,
                style: styles.contentHeader01
            }),

            b.styledDiv(
                d.items.map(item => ContentMenuItem.create(item)),
                styles.contentMenu
            )
        ];
    }
});
