import * as b from 'bobril';
import * as Image from '../../components/image/lib';
import * as assets from '../../assets/assets';
import * as Label from '../../components/label/lib';
import * as m from 'bobril-m';
import * as Href from '../../components/href/lib';
import * as Splitter from '../../components/splitter/lib';
import * as List from '../../components/list/lib';
import * as NpmFury from '../../components/npmFury/lib';
import * as styles from '../styles';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const home = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                b.styledDiv(
                    Splitter.create({
                        children: [
                            getFeatureListSection(),
                            getBobrilLogoSection(),
                            getFurrySection(),
                        ]
                    }),
                    {
                        maxWidth: styles.maxPageWidth,
                        margin: 'auto'
                    }
                ),
                bobrilPromoStyle
            ),
            b.styledDiv([
                    Splitter.create({
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
                                        href: 'https://github.com/Bobris/bobril-build'
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
                                        href: 'https://github.com/Bobril/Bobril-m'
                                    }),
                                    '. It is heavily inspired by ',
                                    Href.create({
                                        label: 'www.material-ui.com',
                                        href: 'http://www.material-ui.com'
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
                    }),
                ],
                {
                    maxWidth: styles.maxPageWidth,
                    margin: 'auto'
                }
            )
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
    paddingLeft: imageContainerPadding,
    paddingRight: imageContainerPadding,
    boxShadow: '0 1px 6px rgba(0,0,0,0.120), 0 1px 4px rgba(0,0,0,0.120)',
});

export default home;

function getFeatureListSection(): b.IBobrilChildren {
    return b.styledDiv([
            Label.create({
                label: 'Features',
                size: Label.LabelSize.Display2,
                style: {
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: 'left'
                }
            }),
            List.create({
                items: [
                    {
                        children: 'Component Oriented Framework'
                    },
                    {
                        children: 'Small'
                    },
                    {
                        children: 'Fast Virtual DOM diffing'
                    },
                    {
                        children: 'Media detection'
                    },
                    {
                        children: 'Normalization of events'
                    },
                    {
                        children: '... and a lot of more'
                    }
                ]
            }),
            {
                textAlign: 'left'
            }
        ]
    );
}

function getBobrilLogoSection(): b.IBobrilChildren {
    return b.styledDiv(
        [
            Label.create({
                label: 'Bobril',
                size: Label.LabelSize.Display2,
                style: {
                    fontSize: 30,
                    fontWeight: 600
                }
            }),
            Image.create({
                asset: assets.bobrilLogo,
                width: 300,
                height: 284,
                style: {
                    margin: 'auto'
                }
            })
        ]
    );
}

function getFurrySection(): b.IBobrilChildren {
    return b.styledDiv(
        [
            Label.create({
                label: 'Release',
                size: Label.LabelSize.Display2,
                style: {
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: 'right'
                }
            }),
            b.styledDiv(
                [
                    b.styledDiv('Bobril', {marginRight: 8}),
                    NpmFury.create({
                        url: 'https://badge.fury.io/js/bobril',
                        urlSvg: 'https://badge.fury.io/js/bobril.svg'
                    })
                ],
                {
                    textAlign: 'right',
                    marginTop: 8
                }
            ),
            b.styledDiv(
                [
                    b.styledDiv('Bobril Build', {marginRight: 8}),
                    NpmFury.create({
                        url: 'https://badge.fury.io/js/bobril-build',
                        urlSvg: 'https://badge.fury.io/js/bobril-build.svg'
                    })
                ],
                {
                    textAlign: 'right',
                    marginTop: 16
                }
            ),
            b.styledDiv(
                [
                    b.styledDiv('Bobril Material UI', {marginRight: 8}),
                    NpmFury.create({
                        url: 'https://badge.fury.io/js/bobril-m',
                        urlSvg: 'https://badge.fury.io/js/bobril-m.svg'
                    })
                ],
                {
                    textAlign: 'right',
                    marginTop: 16
                }
            )
        ]
    );
}