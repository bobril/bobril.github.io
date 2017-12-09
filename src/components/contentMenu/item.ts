import * as b from 'bobril';
import * as styles from './styles';
import * as Label from './../../components/label/lib';

export enum EItemType {
    SectionLabel,
    Label
}

export interface IItem {
    type: EItemType;
    name: string;
    id: string;
}

export interface IData extends IItem {}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    init(ctx: IContext, me: b.IBobrilNode) {
        me.attrs = { id: `${ctx.data.id}Record` };
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;
        me.children = Label.create({
            label: d.name,
            size: Label.LabelSize.DownloadPacksLabel,
            style: getItemStyle(d.type)
        });
        b.style(me, styles.contentMenu);
    },

    onClick(ctx: IContext): boolean {
        const d = ctx.data;
        const e = document.getElementById(d.id);
        if (e === undefined || e === null) {
            console.warn(
                'Cannot find element with id:',
                '${menuItemCfg.menuAnchor}'
            );
            return;
        }

        const offsetTop = e.offsetTop - 70; // Header compensation + 10px
        window.scrollTo(0, offsetTop);
    }
});

function getItemStyle(type: EItemType): b.IBobrilStyleDef {
    switch (type) {
        case EItemType.Label:
            return styles.contentMenuElements;
        case EItemType.SectionLabel:
            return styles.contentHeader02;
        default:
            return styles.contentMenuElements;
    }
}
