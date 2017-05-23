import * as b from 'bobril';
import * as Label from '../../../components/label/lib';
import * as NpmFury from '../../../components/npmFury/lib';

export function getFurrySection(): b.IBobrilChildren {
    return b.styledDiv(
        [
            Label.create({
                label: 'Release',
                size: Label.LabelSize.Display2,
                style: {
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: 'right'
                }
            }),
            b.styledDiv(
                [
                    b.styledDiv('Bobril', {marginRight: 8}),
                    NpmFury.create({
                        url: 'https://badge.fury.io/js/bobril',
                        urlSvg: 'https://badge.fury.io/js/bobril.svg'
                    })
                ],
                {
                    textAlign: 'right',
                    marginTop: 8
                }
            ),
            b.styledDiv(
                [
                    b.styledDiv('Bobril Build', {marginRight: 8}),
                    NpmFury.create({
                        url: 'https://badge.fury.io/js/bobril-build',
                        urlSvg: 'https://badge.fury.io/js/bobril-build.svg'
                    })
                ],
                {
                    textAlign: 'right',
                    marginTop: 16
                }
            ),
            b.styledDiv(
                [
                    b.styledDiv('Bobril Material UI', {marginRight: 8}),
                    NpmFury.create({
                        url: 'https://badge.fury.io/js/bobril-m',
                        urlSvg: 'https://badge.fury.io/js/bobril-m.svg'
                    })
                ],
                {
                    textAlign: 'right',
                    marginTop: 16
                }
            )
        ]
    );
}