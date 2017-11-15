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
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = b.styledDiv([
            Image.create({
                asset: assets.bobrilLogo,
                width: 555,
                height: 549,
                style: {
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }
            })
        ]);
    }
});
