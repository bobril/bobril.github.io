import * as b from 'bobril';
import * as DownloadTable from './downloadTable/lib';
import * as styles from './styles';
import * as Label from '../../components/label/lib';
import * as Paragraph from '../../components/paragraph/lib';

export const create = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            Label.create({
                label: 'DOWNLOAD',
                size: Label.LabelSize.HeaderText01,
                style: styles.downloadLabelStyle
            }),
            DownloadTable.create(),
            Paragraph.create({
                content: ``,
                style: styles.bottomTextStyle
            })
        ];
        b.style(me, {
            height: 'calc(100vh - 60px)',
            textAlign: 'left',
            minHeight: '700px',
            width: 720
        });
    }
});
