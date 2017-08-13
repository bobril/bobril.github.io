import * as b from 'bobril';
import * as MarkdownHtml from '../../components/html/lib'
import {html as docHtml} from '../../generatedDoc/doc';

b.asset('../../generatedDoc/helpers.js');
declare var $doc;

interface IContext extends b.IBobrilCtx {
}

export const create = b.createComponent<never>({
    render(_ctx: IContext, me: b.IBobrilNode){
        me.children = MarkdownHtml.create({
            html: docHtml
        });
    }
});