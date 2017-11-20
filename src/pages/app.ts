import * as b from 'bobril';
import * as BasicLayout from '../components/lBasicLayout/lib';
import * as LMainContent from '../components/lMainContent/lib';
import * as AppBar from '../components/appBar/lib';
import * as router from './router';
import * as Image from '../components/image/lib';
import * as assets from '../assets/assets';
import * as Button from '../components/button/lib';
import * as Menu from '../components/menu/lib';
interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
    appHeight: number;
    menuVisible: boolean;
}

let menuVisible = false;
const app = b.createComponent<IData>({
    init(ctx: IContext) {
        const actualPageId = getActualPageId();
        console.log(actualPageId);
        ctx.menuVisible =
            actualPageId === router.home || actualPageId === 'root';
    },
    render(ctx: IContext, me: b.IBobrilNode) {
        const actualPageId = getActualPageId();
        me.children = [
            BasicLayout.create({
                header: AppBar.create({
                    contentWidth: 1200,
                    leftChildren: [
                        AppBar.Button.create({
                            content: Image.create({
                                asset: assets.menuIcon,
                                height: 14,
                                width: 24
                            }),
                            onClick: () => {
                                ctx.menuVisible = !ctx.menuVisible;
                                b.invalidate(ctx);
                            },

                            variant: AppBar.Button.ButtonVariants.menuIconButton
                        }),

                        AppBar.Button.create({
                            content: 'MENU',
                            onClick: () => {
                                ctx.menuVisible = !ctx.menuVisible;
                                b.invalidate(ctx);
                            },

                            variant: AppBar.Button.ButtonVariants.menuButton
                        })
                    ],
                    rightChildren: [
                        AppBar.Button.create({
                            content: 'GitHub',
                            onClick: ctx => {
                                window.open('https://github.com/Bobris/Bobril');
                            },

                            variant: AppBar.Button.ButtonVariants.gitButton
                        })
                    ]
                }),
                menu:
                    ctx.menuVisible &&
                    Menu.create({
                        childern: [
                            Menu.Button.create({
                                isActive:
                                    actualPageId === router.introPage ||
                                    actualPageId === 'root',
                                onClick: () =>
                                    b.runTransition(
                                        b.createRedirectPush(router.home)
                                    ),
                                hover: false,
                                content: 'HOME'
                            }),
                            Menu.Button.create({
                                isActive: actualPageId === router.getStarted,
                                onClick: () =>
                                    b.runTransition(
                                        b.createRedirectPush(router.getStarted)
                                    ),
                                hover: false,
                                content: 'GET STARTED'
                            }),
                            Menu.Button.create({
                                isActive: actualPageId === router.download,
                                onClick: () =>
                                    b.runTransition(
                                        b.createRedirectPush(router.download)
                                    ),
                                hover: false,
                                content: 'DOWNLOAD'
                            }),
                            Menu.Button.create({
                                isActive: actualPageId === router.guides,
                                onClick: () =>
                                    b.runTransition(
                                        b.createRedirectPush(router.guides)
                                    ),
                                hover: false,
                                content: 'GUIDES'
                            }),
                            Menu.Button.create({
                                isActive: actualPageId === router.documentation,
                                onClick: () =>
                                    b.runTransition(
                                        b.createRedirectPush(
                                            router.documentation
                                        )
                                    ),
                                hover: false,
                                content: 'DOC'
                            }),
                            Menu.Button.create({
                                isActive: false,
                                onClick: () =>
                                    window.open(
                                        'https://github.com/Bobris/Bobril'
                                    ),
                                hover: false,
                                content: 'GITHUB'
                            })
                        ]
                    }),

                content: [
                    LMainContent.create({
                        content: [me.data.activeRouteHandler()]
                    })
                ]
            })
        ];

        b.style(me, ctx.appHeight && { height: ctx.appHeight });
    },
    postUpdateDom(ctx: IContext) {
        const currHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        );
        if (currHeight !== ctx.appHeight) {
            ctx.appHeight = currHeight;
            b.invalidate(ctx);
        }
    }
});

function getActualPageId(): string {
    return b.getActiveRoutes()[0].name || router.home;
}

export default app;
