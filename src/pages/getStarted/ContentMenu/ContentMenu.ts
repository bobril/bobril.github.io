import * as b from 'bobril';
import * as styles from './styles';
import * as colors from '../../../components/colors';
import * as Label from '../../../components/label/lib';
import { color02 } from '../../../components/colors';
export interface IData {
    children: b.IBobrilChildren;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            Label.create({
                label: 'CONTENT',
                size: Label.LabelSize.Headline,
                style: styles.contentHeader01
            }),
            Label.create({
                label: 'GET STARTED',
                size: Label.LabelSize.Subheading,
                style: styles.contentHeader02
            }),
            addRecordToMenu('Install in 3 steps', 'installIn3Steps'),
            addRecordToMenu('Hello World!', 'helloWorld'),
            addRecordToMenu('First component - Counter', 'firstComponent'),
            addRecordToMenu('Todo list - more real example', 'toDoList')
        ];

        b.style(me, styles.contentTexts);
    }
});

function addRecordToMenu(label: string, id: string): b.IBobrilChildren {
    return [
        Label.create({
            label: label,
            action: (): boolean => {
                let e = document.getElementById(id);
                let f = document.getElementById(id + 'Record');
                if (e === undefined || e === null) {
                    console.warn(
                        'Cannot find element with id:',
                        '${menuItemCfg.menuAnchor}'
                    );
                    return;
                }
                let offsetTop = e.offsetTop - 70; // Header compensation + 10px
                console.log(f);
                f.style.color = 'red';
                window.scrollTo(0, offsetTop);
            },
            size: Label.LabelSize.DownloadPacksLabel,
            style: styles.contentMenuElements,
            id: id + 'Record'
        })
    ];
}
