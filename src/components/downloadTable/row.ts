import * as b from 'bobril';
import { rowLabel, rowStyle, rowContent } from './styles';
import * as Label from '../label/lib';
import { LabelSize } from '../label/lib';

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
                    Label.create({label: ctx.data.label, size: LabelSize.DownloadPacksLabel, style: rowLabel}),
                    // b.styledDiv([ctx.data.label], rowLabel),
                    b.styledDiv([ctx.data.content], rowContent)
                ],
                rowStyle
            )
        ];
    }
});
