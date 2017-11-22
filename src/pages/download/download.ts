import * as b from 'bobril';
import * as downloadTable from '../../components/downloadTable/lib';
import * as styles from './styles';
import * as Label from '../../components/label/lib';
import * as Paragraph from '../../components/paragraph/lib';

interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            Label.create({
                label: 'DOWNLOAD',
                size: Label.LabelSize.HeaderText01
            }),

            downloadTable.create(),

            Paragraph.create({
                label: `Fusce commodo tincidunt volutpat. Cras tempor odio ac felis ultrices euismod. Praesent accumsan id risus eu 
                            euismod. Phasellus eu facilisis nulla. Praesent turpis neque, posuere eleifend neque quis, condimentum rutrum
                            sapien. Sed iaculis mi id ex venenatis tempus. Mauris sit amet egestas orci. Aenean sit amet dignissim mi.
                            Vivamus quis imperdiet purus. Morbi mollis imperdiet velit eu placerat. Cras euismod fermentum libero ac
                             laoreet. Nulla id sodales dui.`,
                style: styles.bottomTextStyle,
            })
        ];
    }
});
