import * as b from 'bobril';
import * as DownloadTable from './downloadTable/lib';
import * as styles from './styles';
import * as Label from '../../components/label/lib';
import * as Paragraph from '../../components/paragraph/lib';
import * as Link from '../../components/href/lib';

export const create = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            Label.create({
                label: 'DOWNLOAD & COMMUNITY',
                size: Label.LabelSize.HeaderText01,
                style: styles.downloadLabelStyle
            }),
            DownloadTable.create(),
            Paragraph.create({
                content: [
                    `Community of Bobril has created much more. See `,
                    Link.create({
                        label: `Bobril on NPM`,
                        href: `https://www.npmjs.com/search?q=bobril`,
                        newWindow: true
                    }),
                    ` where you can see all available packages. `
                ],
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
