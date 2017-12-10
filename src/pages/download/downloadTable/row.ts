import * as b from 'bobril';
import * as styles from './styles';
import * as Label from '../../../components/label/lib';

export interface IData {
    label: string;
    content: b.IBobrilChildren;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}
export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                [
                    Label.create({
                        label: ctx.data.label,
                        size: Label.LabelSize.DownloadPacksLabel,
                        style: styles.rowLabel
                    }),
                    b.styledDiv(ctx.data.content, styles.rowContent)
                ],
                styles.rowStyle
            )
        ];
    }
});
