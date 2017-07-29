import * as b from 'bobril';
import * as Label from '../../components/label/lib';
import * as List from '../../components/list/lib';
import * as Href from '../../components/href/lib';
import * as LCenter from '../../components/lCenter/lib';
import * as styles from '../styles';
import * as Paragraph from '../../components/paragraph/lib';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const documentation = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            LCenter.create({
                children: [
                    Label.create({
                        label: 'Documentation under construction.',
                        size: Label.LabelSize.Title,
                        style: {
                            textAlign: 'center'
                        }
                    }),
                    b.styledDiv(
                        'We know, that it is not easy to develop application without any documentation. ' +
                        'We hope, that these materials will help you to start.',
                        {
                            marginTop: 24,
                            marginBottom: 24
                        }
                    ),
                    getMotivationSection(),
                    getHowToStartSection(),
                    getExamplesSection()
                ],
                maxWidth: styles.maxPageWidth,
            }
            )
        ];
    }
});

function getHowToStartSection() {
    return b.styledDiv(
        [
            Label.create({
                label: 'How to start',
                size: Label.LabelSize.Title
            }),
            List.create({
                items: [
                    {
                        children: Href.create({
                            label: 'Bobril documentation',
                            href: 'https://github.com/Bobris/Bobril/blob/master/src/bobril.md',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - Getting started',
                            href: 'https://www.codeproject.com/Articles/1044425/Bobril-I-Getting-Started',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - I - Getting started',
                            href: 'https://www.codeproject.com/Articles/1044425/Bobril-I-Getting-Started',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - II - Bobflux Application Architecture',
                            href: 'https://www.codeproject.com/Articles/1055921/Bobril-II-Bobflux-application-architecture',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - III - Localizations and Formatting',
                            href: 'https://www.codeproject.com/Articles/1058132/Bobril-III-Localizations-and-formatting',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - IV - Routing',
                            href: 'https://www.codeproject.com/Articles/1058609/Bobril-IV-Routing',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - V - Bobril-build',
                            href: 'https://www.codeproject.com/Articles/1167901/bobril-build',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - Integration to Another Web Application',
                            href: 'https://www.codeproject.com/Articles/1184937/Bobril-Integration-to-Another-Web-Application',
                            newWindow: true
                        })
                    }
                ]
            })
        ]
    );
}

function getExamplesSection() {
    return b.styledDiv([
        Label.create({
            label: 'Examples',
            size: Label.LabelSize.Title
        }),
        List.create({
            items: [
                {
                    children: Href.create({
                        label: 'Bobril-build examples here.',
                        href: 'https://github.com/Bobris/Bobril/tree/master/bbExamples',
                        newWindow: true
                    })
                },
                {
                    children: Href.create({
                        label: 'Older examples here.',
                        href: 'https://github.com/Bobris/Bobril/tree/master/examples',
                        newWindow: true
                    })
                }
            ]
        })
        // tslint:disable-next-line:align
    ], { marginTop: 16 });
}

function getMotivationSection() {
    return b.styledDiv([
        Label.create({
            label: 'Why own framework',
            size: Label.LabelSize.Headline
        }),
        Paragraph.create(
            'For one of our products, we needed the ability to generate single-file websites (all resources embedded). '
            + 'We are using these websites as a new digital channel.'
        ),
        Paragraph.create(
            'We started with by our opinion the best choice at that time – Angular 1. '
            + 'However, we soon reached its performance and logic limits. '
            + 'After two years, Boris has evaluateed a lot of other frameworks. '
            + 'Mainly ReactJs. Unfortunately, it did not meet all our needs.'
        ),
        Label.create({
            label: 'Mobile focus',
            size: Label.LabelSize.Title
        }),
        Paragraph.create(
            'Touch/multitouch support in ReactJs was and is an afterthought. '
            + 'It was critical for us to simplify user code regardless of device and input type and browser (IE8+ at that time).'
        ),
        Label.create({
            label: 'Easy to generate',
            size: Label.LabelSize.Title
        }),
        Paragraph.create(
            'The core of our use is in Inspire Designer. It is not so easy to generate code in React. '
            + 'JSX is basically required to be used in React. '
            + 'It needs advanced JS optimizations in Babel to remove any JSX from resulting code, and the resulting code is still big.'
        ),
        Label.create({
            label: 'Size',
            size: Label.LabelSize.Title
        }),
        Paragraph.create(
            'When you generate millions of embedded websites, size matters. React gziped is 42K, Bobril is 17K. '
            + 'Unzipped size was also interesting for us, as the difference is even bigger. A similar problem is with Router libraries.'
        ),
        Label.create({
            label: 'Speed',
            size: Label.LabelSize.Title
        }),
        Paragraph.create([
            'Bobril is faster in most operations. ',
            Href.create({
                label: 'You can test it here.',
                href: 'https://localvoid.github.io/uibench/',
                newWindow: true
            }),
            ' And in 2015, React was slow, they keep improving it over time.'
        ]
        ),
        Label.create({
            label: 'Own',
            size: Label.LabelSize.Title
        }),
        Paragraph.create(
            'If you need modifications, you can do it on your own product easily without taking care about a lot of other use cases. '
            + 'Complexity is expensive. For example, Input element onChange behavior was broken in React in cases that were critical '
            + 'for us (it took them 3 years to fix these). Multiple virtual dom roots in Bobril simplify popups and modal dialogs. '
            + 'Unique CSS in JS solution is built in Bobril nearly from the beggining. '
            + 'Bobx (a Mobx-like library) benefits from deep integration with Bobril.'
        ),
        Paragraph.create(
            'All this was for Inspire Designer at the beginning. But when we were thinking about the framework for another big product, '
            + 'we found that size, speed and using your own framework are significant advantages and decided to use it on company level. '
            + 'Of course, this decision has a disadvantage in the lack of community.'
        ),
        // tslint:disable-next-line:align
    ], { marginTop: 16 });
}

export default documentation;