import * as b from 'bobril';
import * as colors from '../../../components/colors';
import * as Grid from '../../../components/grid/lib';
import * as styles from '../styles';
import * as Href from '../../../components/href/lib';
import * as Panel from '../../../components/panel/lib';
import * as Image from '../../../components/image/lib';
import * as assets from '../../../assets/assets';
import { iconDim } from '../../../components/panel/styles';
import * as Paragraph from '../../../components/paragraph/lib';

export const create = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [comparedTextArea(), panels(), bobrilText()];

        b.style(me, {
            background: colors.color01,
            textAlign: 'center',
            width: '100%',
            height: '100%'
        });
    }
});

function comparedTextArea() {
    return Paragraph.create({
        content:
            ' Compared to ReactJS Added speed, autoprefixer, CSS in JS, router, additional lifecycle methods, ' +
            'only rAF based repaint. Bobril ignores Isomorphic JavaScript, because it would increase size and is not ' +
            'needed for SEO anyway (Google bot supports JavaScript). Client applications are expected to be written in ' +
            'TypeScript. Because it is heavily used in production, backward compatibility is king. Any new feature must ' +
            'be optional or its perceived value to minified size ratio must be high enough.',
        style: styles.aboutPageTextStyles
    });
}

function panels() {
    return b.styledDiv(
        Grid.create({
            columns: 3,
            items: [
                Panel.create({
                    icon: Image.create({
                        asset: assets.icDeveloperBoard,
                        height: iconDim,
                        width: iconDim
                    }),
                    label: 'Component oriented',
                    content: 'Design and create reusable components. Compose them to make complex UI.'
                }),
                Panel.create({
                    icon: Image.create({
                        asset: assets.icPanoramaVertical,
                        height: iconDim,
                        width: iconDim
                    }),
                    label: 'Small and fast',
                    content: 'Bobril combine the feature of React (fast) and Mithrill (small). It creates an ideal tool to create a complex apps.'
                }),
                Panel.create({
                    icon: Image.create({
                        asset: assets.icFlashOn,
                        height: iconDim,
                        width: iconDim
                    }),
                    label: 'Fast virtual DOM diffing',
                    content: ''
                }),
                Panel.create({
                    icon: Image.create({
                        asset: assets.icDevicesOther,
                        height: iconDim,
                        width: iconDim
                    }),
                    label: 'Media detection',
                    content: 'Mobile devices are owned by Bobril. Since the beginning Bobril has been designed to work properly on mobile devices.'
                }),
                Panel.create({
                    icon: Image.create({
                        asset: assets.icEventNote,
                        height: iconDim,
                        width: iconDim
                    }),
                    label: 'Bobril Build',
                    content: 'Compile the app using Bobril Build (see Downloads). It makes it easy to assemble the application. It has been developed directly for Bobril.'
                }),
                Panel.create({
                    icon: Image.create({
                        asset: assets.icTrendingUp,
                        height: iconDim,
                        width: iconDim
                    }),
                    label: 'Easy to learn',
                    content: 'Very easy to learn. You will be able to develop complex apps in a while! See guides section on this site.'
                })
            ]
        }),
        { marginTop: 120 }
    );
}

function bobrilText() {
    return [
        b.styledDiv(
            [
                Paragraph.create({
                    content: [
                        'For modern design you can use bobril material design implementation ',
                        Href.create({
                            href: 'https://github.com/Bobris/bobril-build',
                            newWindow: true,
                            label: 'Bobril Build'
                        }),
                        '. It will ensure continuous build of your application. ' +
                            'It supports: copying sprites, building big sprites, i18n.' +
                            ' Bobril provide all this during optimal TypeScript compilation.'
                    ],
                    style: styles.aboutPageTextStyles
                })
            ],
            { marginTop: 80 }
        ),
        b.styledDiv(
            [
                Paragraph.create({
                    content: [
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
                    style: styles.aboutPageTextStyles
                })
            ],
            { marginTop: 24 }
        )
    ];
}
