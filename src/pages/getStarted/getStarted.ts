import * as b from 'bobril';
import * as Label from '../../components/label/lib';
import * as Paragraph from '../../components/paragraph/lib';
import * as Code from '../../components/code/lib';
import * as ContentMenu from '../../components/contentMenu/lib';
import * as styles from './styles';



interface IContext extends b.IBobrilCtx {
    top: number;
}



export const create = b.createComponent<never>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [

        ];
        b.style(me, {

        });
    }
});
