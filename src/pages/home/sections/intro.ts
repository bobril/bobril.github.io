import * as b from 'bobril';
import * as styles from '../styles';
import * as Button from '../../../components/button/lib';
import * as Label from '../../../components/label/lib';
import * as router from '../../../pages/router';
import * as Image from '../../../components/image/lib';
import * as assets from '../../../assets/assets';

export const create = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            Image.create({
                asset: assets.bobrilLogo,
                width: 555,
                height: 549,
                style: styles.centeredPosition
            }),
            Label.create({
                label: 'BOBRIL',
                size: Label.LabelSize.HeaderText01,
                style: styles.introPageBobrilText
            }),
            Label.create({
                label:
                    'is a component-oriented framework for creating web applications inspired by' +
                    ' ReactJs (Virtual DOM, components with state) and Mithril (small size, more complete framework)',
                size: Label.LabelSize.HeaderText02,
                style: styles.introPageIsAComponentText
            }),
            Button.create({
                content: 'GET STARTED',
                hover: false,
                onClick: () =>
                    b.runTransition(b.createRedirectPush(router.getStarted)),
                variant: Button.ButtonVariants.white
            }),
            Button.create({
                content: 'DOWNLOAD',
                hover: false,
                onClick: () =>
                    b.runTransition(b.createRedirectPush(router.download)),
                variant: Button.ButtonVariants.black
            })
        ];

        b.style(me, {
            position: 'relative',
            top: '35%'
        });
    }
});
