import * as b from 'bobril';
import * as Image from '../../../components/image/lib';
import * as assets from '../../../assets/assets';

interface IData {
    onGetStartedClick: () => void;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        const d = ctx.data;

        me.children = b.styledDiv(
            [
                Image.create({
                    asset: assets.bobrilLogo,
                    width: '300px',
                    height: '284px',
                    style: {
                        margin: 'auto'
                    }
                }),
                // TODO
                // b.styledDiv(
                //     m.Button({
                //         children: 'GET STARTED',
                //         type: m.ButtonType.Raised,
                //         action: () => {
                //             d.onGetStartedClick();
                //         }
                //     }),
                //     {
                //         marginBottom: 8
                //     }
                // )
            ],
            {
                marginTop: -24
            }
        )
    }
});