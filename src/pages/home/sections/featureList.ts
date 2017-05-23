import * as b from 'bobril';
import * as Label from '../../../components/label/lib';
import * as List from '../../../components/list/lib';

export function getFeatureListSection(): b.IBobrilChildren {
    return b.styledDiv([
            Label.create({
                label: 'Features',
                size: Label.LabelSize.Display2,
                style: {
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: 'left'
                }
            }),
            List.create({
                items: [
                    {
                        children: 'Component Oriented Framework'
                    },
                    {
                        children: 'Small'
                    },
                    {
                        children: 'Fast Virtual DOM diffing'
                    },
                    {
                        children: 'Media detection'
                    },
                    {
                        children: 'Normalization of events'
                    },
                    {
                        children: '... and a lot of more'
                    }
                ]
            }),
            {
                textAlign: 'left'
            }
        ]
    );
}
