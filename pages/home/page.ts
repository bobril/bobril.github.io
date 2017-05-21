import * as b from 'bobril';
import * as Image from '../../components/image/lib';
import * as assets from '../../assets/assets';
import * as Label from '../../components/label/lib';
import * as m from 'bobril-m';
import * as Href from '../../components/href/lib';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const home = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {

        me.children = [
            b.styledDiv([
                    Label.create({
                        label: 'Bobril',
                        size: Label.LabelSize.Display3
                    }),
                    Image.create({
                        asset: assets.bobrilLogo,
                        width: 300,
                        height: 284,
                        style: {
                            margin: 'auto'
                        }
                    }),
                ],
                bobrilPromoStyle
            ),
            b.styledDiv([
                Label.create({
                    label: 'Component oriented framework...',
                    size: Label.LabelSize.Title
                }),
                Label.create({
                    label: '...inspired by ReactJs' +
                    ' (Virtual DOM, components with state) and Mithril (small size, more complete framework).' +
                    ' Compared to ReactJS Added speeeed, autoprefixer, CSS in JS, router, additional livecycle methods, ' +
                    'only rAF based repaint. Bobril ignores Isomorphic JavaScript, because it would increase size and is not ' +
                    'needed for SEO anyway (Google bot supports JavaScript). Client applications are expected to be written in ' +
                    'TypeScript. Because it is heavily used in production, backward compatibility is king. Any new feature must ' +
                    'be optional or its perceived value to minified size ratio must be high enough.',
                    size: Label.LabelSize.Body2
                })
            ], {
                marginTop: 24
            }),
            b.styledDiv([
                Label.create({
                    label: 'Create Bobril application in few minutes = Bobril Build',
                    size: Label.LabelSize.Title
                }),
                Label.create({
                    label: ['Bobril is intend to be used with ',
                        Href.create({
                            label: 'Bobril Build',
                            href: 'https://github.com/Bobris/bobril-build'
                        }),
                        '. It will ensures continuous build of your application. ' +
                        'It supports: copying sprites, building big sprites, i18n.' +
                        ' Bobril provide all this during optimal TypeScript compilation.'],
                    size: Label.LabelSize.Body2
                })
            ], {
                marginTop: 24
            })

        ]
    }
});

const imageContainerPadding = 24;
const bobrilPromoStyle = b.styleDef({
    textAlign: 'center',
    background: m.grey300,
    marginTop: -imageContainerPadding,
    marginLeft: -imageContainerPadding,
    marginRight: -imageContainerPadding,
    paddingTop: imageContainerPadding,
    boxShadow: '0 1px 6px rgba(0,0,0,0.120), 0 1px 4px rgba(0,0,0,0.120)',
});

export default home;