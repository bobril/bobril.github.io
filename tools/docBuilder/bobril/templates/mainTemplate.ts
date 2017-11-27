import * as colors from '../../../../src/components/colors';
import * as appBar from '../../../../src/components/appBar/appBarHeight';

interface IMainPageData {
    menu: string;
    content: string;
}

const menuWidth = 240;
const topMarginMenu = 30;
const bottomMarginMenu = 30;
const contetntPaddingRight = 90;
const rightMarginMenu = 30;

export function generateMainPage(data: IMainPageData): string {
    let elem: HTMLElement ;
    return `
    import * as b from 'bobril';
    let top = b.getWindowScroll()[1];
    interface ICtx extends b.IBobrilCtx {
        top: number
    }

    export function create() {
        return {
            tag : 'div',
            attrs: {
                class: 'markdown-body'
            },
            children: [
                {
                    tag: 'div',
                    attrs: {id:'menu'},
                    children: [
                        {
                            tag: 'div',
                            children: ['CONTENT'],
                            style: {
                                textAlign: 'center',
                                fontSize: '16px',
                                marginBottom: 40,
                                marginTop: 40,
                                fontWeight: 'bold',
                            }
                        },
                        ${data.menu}
                    ],
                    style: {
                        width: ${menuWidth},
                        right: ${rightMarginMenu},
                        
                        height: 'calc(100vh - ${appBar.appBarHeight + topMarginMenu + bottomMarginMenu}px)',
                        background: '${colors.color01}',
                        position: 'absolute',
                        
                        overflow: 'auto'
                    },
                    component: {
                        postInitDom(ctx: ICtx, me: b.IBobrilCacheNode, element: HTMLElement){
                            top = b.getWindowScroll()[1];
                            element.style.top = \`\${top+ 60 + 30}px\`;
                            console.log(ctx.top);
                            b.invalidate();
                        },
                        postUpdateDom(ctx: ICtx, me: b.IBobrilNode,element:HTMLElement){
                            top = b.getWindowScroll()[1];
                            
                            element.style.top = \`\${top+ 60 + 30}px\`;
                            console.log(ctx.top);
                            b.invalidate();
                        }
                    }
                },
                {
                    tag: 'div',
                    children: [${data.content}],
                    style: {

                        marginRight: '90px',
                        padding: '16px ${menuWidth + contetntPaddingRight}px 16px 32px'
                    }
                }
            ]
        }
    }`;
}
