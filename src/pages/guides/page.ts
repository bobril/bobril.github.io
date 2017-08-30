import * as b from 'bobril';
import * as Label from '../../components/label/lib';
import * as LCenter from '../../components/lCenter/lib';
import * as styles from '../styles';
import * as GuidesImporter from './guidesImporter'

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
                        GuidesImporter.create()
                    ],
                    maxWidth: styles.maxPageWidth,
                }
            )
        ];
    }
});

export default documentation;