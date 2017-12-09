import * as colors from '../../../../src/components/colors';
import {appBarHeight} from "../../../../src/components/appBar/dimensions";

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
                        position: 'fixed',
                        top: ${appBarHeight + topMarginMenu},
                        right: ${rightMarginMenu},
                        bottom: ${bottomMarginMenu},
                        background: '${colors.color01}',
                        overflow: 'auto',
                        width: ${menuWidth},
                        height: 'calc(100vh - ${appBarHeight + topMarginMenu + bottomMarginMenu}px)',
                     }
                },
                {
                    tag: 'div',
                    children: [${data.content}],
                    style: {

                        marginRight: '90px',
                        padding: '60px ${menuWidth + contetntPaddingRight}px 120px 90px'
                    }
                }
            ]
        }
    }`;
}
