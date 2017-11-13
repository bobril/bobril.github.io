import * as b from 'bobril';
import * as styles from '../../components/styles';
import * as AppButton from '../../components/appBar/button';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv(['BOBRIL'], styles.headertext01), // styles.color04
            //b.styledDiv(AppButton),
        ];

        b.style(
            me,
            
        );
    }
});