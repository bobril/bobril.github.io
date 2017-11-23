import * as b from 'bobril';
import * as styles from './styles';

// Specification
// https://material.io/guidelines/style/typography.html#typography-styles

export enum LabelSize {
    Display4,
    Display3,
    Display2,
    Display1,
    Headline,
    Title,
    HeaderText01,
    HeaderText02,
    DownloadPacksLabel,
    Subheading, // TODO missing device def
    Body2, // TODO missing device def
    Body1, // TODO missing device def
    Caption,
    Button
}

interface IData {
    label: b.IBobrilChildren;
    size: LabelSize;
    style?: b.IBobrilStyle;
    id?: string;
    action?: () => boolean;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    init(ctx: IContext, me: b.IBobrilNode) {
        me.attrs = { id: ctx.data.id };
    },
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        if (ctx.data.id) me.attrs = { id: ctx.data.id };

        me.children = d.label;

        b.style(
            me,
            LabelSize.Display4 === d.size && styles.display4,
            LabelSize.Display3 === d.size && styles.display3,
            LabelSize.Display2 === d.size && styles.display2,
            LabelSize.Display1 === d.size && styles.display1,
            LabelSize.Headline === d.size && styles.headline,
            LabelSize.Title === d.size && styles.title,
            LabelSize.HeaderText01 === d.size && styles.headerText01,
            LabelSize.HeaderText02 === d.size && styles.headerText02,
            LabelSize.DownloadPacksLabel === d.size &&
                styles.downloadPacksLabel,
            LabelSize.Subheading === d.size && styles.subheading,
            LabelSize.Body2 === d.size && styles.body2,
            LabelSize.Body1 === d.size && styles.body1,
            LabelSize.Caption === d.size && styles.caption,
            LabelSize.Button === d.size && styles.button,
            d.style && d.style
        );
    },

    onClick(ctx: IContext, me: b.IBobrilNode): boolean {
        const d = ctx.data;
        
        return d.action && d.action();
    }
});
