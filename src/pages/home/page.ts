import * as b from 'bobril';
import * as m from 'bobril-m';
import * as Splitter from '../../components/splitter/lib';
import * as styles from '../styles';
import * as Divider from '../../components/divider/lib';
import * as LCenter from '../../components/lCenter/lib';

import * as FurrySection from './sections/furry';
import * as GetStartedSection from './sections/getStarted';
import * as FeatureListSection from './sections/featureList';
import * as BobrilLogoSection from './sections/bobrilLogo';
import * as CoreFeaturesPromo from './sections/coreFeaturesPromo';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const home = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                LCenter.create({
                    children: Splitter.create({
                        children: [
                            FeatureListSection.create(),
                            BobrilLogoSection.create({
                                onGetStartedClick: () => {

                                }
                            }),
                            FurrySection.create(),
                        ]
                    }),
                    maxWidth: styles.maxPageWidth
                }),
                bobrilPromoStyle
            ),
            LCenter.create({
                children: [
                    CoreFeaturesPromo.create(),
                    Divider.create(),
                    GetStartedSection.create()
                ],
                maxWidth: styles.maxPageWidth,
            })
        ]
    }
});

const imageContainerPadding = 24;
const bobrilPromoStyle = b.styleDef({
    textAlign: 'center',
    background: m.grey300,
    marginTop: -imageContainerPadding,
    marginLeft: -imageContainerPadding,
    marginRight: -imageContainerPadding,
    paddingTop: imageContainerPadding,
    paddingLeft: imageContainerPadding,
    paddingRight: imageContainerPadding,
    boxShadow: '0 1px 6px rgba(0,0,0,0.120), 0 1px 4px rgba(0,0,0,0.120)',
});

export default home;


