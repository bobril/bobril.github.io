import * as b from 'bobril';
import * as styles from './styles';
import * as Label from './../../components/label/lib';

export interface IData {
    names: string[];
    ids: string[];
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        let children: b.IBobrilChildren[] = [
            Label.create({
                label: 'CONTENT',
                size: Label.LabelSize.Headline,
                style: styles.contentHeader01
            }),

            Label.create({
                label: ctx.data.names[0],
                size: Label.LabelSize.Subheading,
                action: (): boolean => {
                    let e = document.getElementById('getStarted');
                    if (e === undefined || e === null) {
                        console.warn('Cannot find element with id:');
                        return;
                    }
                    let offsetTop = e.offsetTop - 70; // Header compensation + 10px
                    window.scrollTo(0, offsetTop);
                },
                style: styles.contentHeader02,
                id: ctx.data.ids[0]
            })
        ];

        for (let i = 1; i < ctx.data.names.length; i++) {
            children.push(addRecordToMenu(ctx.data.names[i], ctx.data.ids[i]));
        }

        me.children = children;
        b.style(me, styles.contentTexts);
    }
});

function addRecordToMenu(label: string, id: string): b.IBobrilChildren {
    return [
        Label.create({
            label: label,
            action: (): boolean => {
                let e = document.getElementById(id);
                if (e === undefined || e === null) {
                    console.warn(
                        'Cannot find element with id:',
                        '${menuItemCfg.menuAnchor}'
                    );
                    return;
                }
                let offsetTop = e.offsetTop - 70; // Header compensation + 10px
                window.scrollTo(0, offsetTop);
            },
            size: Label.LabelSize.DownloadPacksLabel,
            style: styles.contentMenuElements,
            id: id + 'Record'
        })
    ];
}
