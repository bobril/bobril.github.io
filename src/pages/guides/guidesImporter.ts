import * as b from 'bobril';
import * as MarkdownHtml from '../../components/html/lib'
import {html as guidesHtml} from '../../generatedGuides/page';

b.asset('../../generatedGuides/helpers.js');
declare var $doc;

interface IContext extends b.IBobrilCtx {
}

export const create = b.createComponent<never>({
    render(_ctx: IContext, me: b.IBobrilNode){
        me.children = MarkdownHtml.create({
            html: guidesHtml
        });
    }
});