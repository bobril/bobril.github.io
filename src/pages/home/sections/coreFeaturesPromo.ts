import * as b from 'bobril';
import * as Label from '../../../components/label/lib';
import * as Href from '../../../components/href/lib';
import * as Splitter from '../../../components/splitter/lib';
import * as styles from '../../styles';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = Splitter.create({
            children: [
                b.styledDiv(
                    [
                        Label.create({
                            label: 'Component Oriented Framework',
                            size: Label.LabelSize.Title
                        }),
                        'Inspired by ReactJs' +
                        ' (Virtual DOM, components with state) and Mithril (small size, more complete framework).' +
                        ' Compared to ReactJS Added speeeed, autoprefixer, CSS in JS, router, additional livecycle methods, ' +
                        'only rAF based repaint. Bobril ignores Isomorphic JavaScript, because it would increase size and is not ' +
                        'needed for SEO anyway (Google bot supports JavaScript). Client applications are expected to be written in ' +
                        'TypeScript. Because it is heavily used in production, backward compatibility is king. Any new feature must ' +
                        'be optional or its perceived value to minified size ratio must be high enough.',
                    ],
                    {
                        padding: 16,
                        marginTop: 24
                    }
                ),
                b.styledDiv(
                    [
                        Label.create({
                            label: 'Bobril Build',
                            size: Label.LabelSize.Title
                        }),
                        'Bobril is intend to be used with ',
                        Href.create({
                            label: 'Bobril Build',
                            href: 'https://github.com/Bobris/bobril-build',
                            newWindow: true
                        }),
                        '. It will ensures continuous build of your application. ' +
                        'It supports: copying sprites, building big sprites, i18n.' +
                        ' Bobril provide all this during optimal TypeScript compilation.'
                    ],
                    {
                        padding: 16,
                        marginTop: 24
                    }
                ),
                b.styledDiv(
                    [
                        Label.create({
                            label: 'Material Design',
                            size: Label.LabelSize.Title
                        }),
                        'For modern design you can use bobril material design implementation ',
                        Href.create({
                            label: 'Bobril-m',
                            href: 'https://github.com/Bobril/Bobril-m',
                            newWindow: true
                        }),
                        '. It is heavily inspired by ',
                        Href.create({
                            label: 'www.material-ui.com',
                            href: 'http://www.material-ui.com',
                            newWindow: true
                        }),
                        '.'
                    ],
                    {
                        padding: 16,
                        marginTop: 24
                    }
                )
            ],
            style: {
                textAlign: 'left'
            }
        });
    }
});