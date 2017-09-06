interface IMainPageData {
    menu: string;
    content: string;
}

const menuWidth = 190;

export function generateMainPage(data: IMainPageData): string {
    return `export function create() {
        return {
            tag : 'div',
            children: [
                {
                    tag: 'div',
                    children: [${data.menu}],
                    style: {
                        width: ${menuWidth},
                        cssFloat: 'left',
                        position: 'fixed'
                    }
                },
                {
                    tag: 'div',
                    children: [${data.content}],
                    style: {
                        marginLeft: ${menuWidth + 16},
                        borderLeft: '1px solid #bdbdbd',
                        padding: '16px 16px 16px 32px'
                    }
                }
            ],
            style : {
            
            }
        }
    }`

}