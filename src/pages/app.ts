import * as b from 'bobril';
import * as BasicLayout from '../components/lBasicLayout/lib';
import * as LMainContent from '../components/lMainContent/lib';
import * as AppBar from '../components/appBar/lib';
import * as router from './router';
import * as Image from '../components/image/lib';
import * as assets from '../assets/assets';
import * as Button from '../components/button/button';
import { ButtonVariants } from '../components/button/buttons';


interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
    appHeight: number;
}

const app = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const actualPageId = getActualPageId();

        me.children = [
            BasicLayout.create({
                header: AppBar.create({
                    contentWidth: 1200,
                    leftChildren: [
                        Button.create({
                            content: Image.create({
                                asset: assets.menuIcon,
                                height: 14,
                                width: 24
                            }),
                            onClick: () => {
                                alert('ss');
                            },
                            hover: false,
                            variant: ButtonVariants.menuIconButton
                        }),

                        Button.create({
                            content: 'MENU',
                            onClick: () => {
                                alert('ss');
                            },
                            hover: false,
                            variant: ButtonVariants.menuButton
                        }),
                    ],
                    rightChildren: [
                        Button.create({
                            content: 'GitHub',
                            onClick: () => {
                                window.open('https://github.com/Bobris/Bobril');
                            },
                            hover: false,
                            variant: ButtonVariants.gitButton
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
