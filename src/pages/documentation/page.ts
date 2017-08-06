import * as b from 'bobril';
import * as Label from '../../components/label/lib';
import * as LCenter from '../../components/lCenter/lib';
import * as styles from '../styles';
import * as MarkdownHtml from '../../components/documentationHtml/lib'
import {html as docHtml} from '../../generatedDoc';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const documentation = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            LCenter.create({
                    children: [
                        Label.create({
                            label: 'Documentation under construction.',
                            size: Label.LabelSize.Title,
                            style: {
                                textAlign: 'center'
                            }
                        }),
                        b.styledDiv(
                            'We know, that it is not easy to develop application without any documentation. ' +
                            'We hope, that these materials will help you to start.',
                            {
                                marginTop: 24,
                                marginBottom: 24
                            }
                        ),
                        MarkdownHtml.create({
                            html: docHtml
                        })
                    ],
                    maxWidth: styles.maxPageWidth,
                }
            )
        ];
    }
});

export default documentation;