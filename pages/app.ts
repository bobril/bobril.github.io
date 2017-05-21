import * as b from 'bobril';
import * as m from 'bobril-m';
import * as BasicLayout from '../components/lBasicLayout/lib';
import * as LMainContent from '../components/lMainContent/lib';
import * as AppBar from '../components/appBar/lib';
import * as router from '../pages/router';

interface IData {

}

interface IContext extends b.IBobrilCtx {
    data: IData;
    appHeight: number;
}

const app = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {

        const actualPageId = getActualPageId();

        me.children = [
            BasicLayout.create({
                backgroundColor: m.grey100,
                header: AppBar.create({
                    buttons: [
                        AppBar.Button.create({
                            label: 'BOBRIL',
                            isActive: actualPageId === router.home,
                            action: () => {
                                b.runTransition(b.createRedirectPush(router.home));
                            }
                        }),
                        AppBar.Button.create({
                            label: 'DOCUMENTATION',
                            isActive: actualPageId === router.documentation,
                            action: () => {
                                b.runTransition(b.createRedirectPush(router.documentation));
                            }
                        })
                    ],
                    rightButtons: [
                        AppBar.Button.create({
                            label: 'GitHub',
                            action: () => {
                                window.open('https://github.com/Bobris/Bobril')
                            }
                        })
                    ]
                }),
                content: [
                    LMainContent.create({
                        content: [
                            me.data.activeRouteHandler()
                        ]
                    })
                ]
            }),
        ];

        b.style(
            me,
            ctx.appHeight && {height: ctx.appHeight}
        )
    },
    postUpdateDom(ctx: IContext) {
        // Update correct height of the application
        const currHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (currHeight !== ctx.appHeight) {
            ctx.appHeight = currHeight;
            b.invalidate(ctx);
        }
    },
});

function getActualPageId(): string {
    return b.getActiveRoutes()[0].name || router.home;
}

export default app;