import * as colors from '../../../../src/components/colors';
//import {height as appBarHeight} from '../../../../src/components/appBar/styles';

let appBarHeight = 60;

interface IMainPageData {
    menu: string;
    content: string;
    
}

const menuWidth = 240;
const topMarginMenu = 30;
const bottomMarginMenu = 30;
const contetntPaddingRight = 30;
const rightMarginMenu = 30;

export function generateMainPage(data: IMainPageData): string {
    
    return `export function create() {
        return {
            tag : 'div',
            attrs: {
                class: 'markdown-body'
            },
            children: [
                {
                    tag: 'div',
                    children: [
                        {
                            tag: 'div',
                            children: ['CONTENT'],
                            style: {
                                textAlign: 'center',
                                fontSize: '20px',
                                marginBottom: 20,
                                marginTop: 20
                            }
                        },
                        ${data.menu}
                    ],
                    style: {
                        width: ${menuWidth},
                        right: ${rightMarginMenu},
                        bottom: ${bottomMarginMenu},
                        height: 'calc(100vh - ${appBarHeight + topMarginMenu + bottomMarginMenu}px)',
                        background: '${colors.color01}',
                        position: 'fixed',
                    }
                },
                {
                    tag: 'div',
                    children: [${data.content}],
                    style: {
                        
                        padding: '16px ${menuWidth + contetntPaddingRight}px 16px 32px'
                    }
                }
            ]
        }
    }`;
}
