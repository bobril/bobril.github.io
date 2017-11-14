import * as b from 'bobril';
import * as Label from '../../components/label/lib';
import * as LCenter from '../../components/lCenter/lib';
import * as styles from '../styles';
import * as styless from '../../components/styles';
import * as DocImporter from './docImporter';
import * as Button from '../../components/button/button';

interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const documentation = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            Button.create({
                content: 'sdasd',
                style: { width: '20px', height: '20px' },
                color: 'red',
                hover: false,
                hoverStyle: { background: 'green' },
                fontStyle: styless.buttontext01,
                onClick: () => {
                    alert('bb');
                }
            }),
            LCenter.create({
                children: [DocImporter.create()],
                maxWidth: styles.maxPageWidth
            })
        ];
    }
});

export default documentation;
