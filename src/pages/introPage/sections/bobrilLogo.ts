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
                    width: '26vw',
                    height: '100vh',
                    style: {
                        margin: 'auto'
                    }
                }),
            ],
            {
                marginTop: -24
            }
        )
    }
});