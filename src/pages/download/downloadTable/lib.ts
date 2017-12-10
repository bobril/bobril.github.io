import * as b from 'bobril';
import * as row from './row';
import * as npmFury from '../../../components/npmFury/lib';
import {color02} from "../../../components/colors";

export const create = b.createComponent<never>({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = [
            row.create({
                label: 'Bobril',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobril',
                    urlSvg: 'https://badge.fury.io/js/bobril.svg'
                })
            }),
            row.create({
                label: 'Bobril Native',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobriln',
                    urlSvg: 'https://badge.fury.io/js/bobriln.svg'
                })
            }),
            row.create({
                label: 'Bobril Build',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobril-build',
                    urlSvg: 'https://badge.fury.io/js/bobril-build.svg'
                })
            }),
            row.create({
                label: 'BobX',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobx',
                    urlSvg: 'https://badge.fury.io/js/bobx.svg'
                })
            }),
            row.create({
                label: 'Bobflux',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobflux',
                    urlSvg: 'https://badge.fury.io/js/bobflux.svg'
                })
            }),
            row.create({
                label: 'Bobrilstrap',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobrilstrap',
                    urlSvg: 'https://badge.fury.io/js/bobrilstrap.svg'
                })
            }),
            row.create({
                label: 'Bobril Material UI',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobril-m',
                    urlSvg: 'https://badge.fury.io/js/bobril-m.svg'
                })
            }),
            row.create({
                label: 'Bobril-Highcharts',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobril-highcharts',
                    urlSvg: 'https://badge.fury.io/js/bobril-highcharts.svg'
                })
            }),
            row.create({
                label: 'Bobril-ChartJS',
                content: npmFury.create({
                    url: 'https://badge.fury.io/js/bobril-chartjs',
                    urlSvg: 'https://badge.fury.io/js/bobril-chartjs.svg'
                })
            })
        ];

        b.style(me, {
            width: 720,
            paddingTop: 40,
            paddingBottom: 40,
            paddingLeft: 80,
            background: '#65697A'
        })
    }
});
