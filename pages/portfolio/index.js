import PassportLayout from '../../components/PassportLayout.js'
import SwapContainer from '../../components/future/SwapContainer.js'
import Showcase from '../../components/Showcase.js'

import webpageImage from '../../public/webpage.png'
import ansieImage from '../../public/ansie.png'
import ppImage from '../../public/picprompt.png'

function Page() {
    const works = [
        { imageSrc: webpageImage, href: 'https://github.com/Rebzzel/rebzzel-webpage', title: 'rebzzel.dev', description: 'Current website. Built on Next.js.' },
        { imageSrc: ansieImage, href: 'https://github.com/Rebzzel/ansie', title: 'Ansie', description: 'Python library that makes working with ANSI ESC easy and enjoyable.' },
        { imageSrc: ppImage, href: 'https://github.com/Rebzzel/PicPrompt', title: 'PicPrompt', description: 'Fast, simple and lightweight image viewer written on C# wpf.' },
    ]

    return (
        <PassportLayout>
            <SwapContainer className="py-4 grid grid-cols-1 gap-y-4 md:grid-cols-2">
                { works.map((work, i) =>
                    <Showcase
                        key={i}
                        className="text-center"
                        imageSrc={work.imageSrc}
                        href={work.href}
                    >
                        <h1>{work.title}</h1>
                        <p className="text-sm leading-5">{work.description}</p>
                    </Showcase>)
                }
            </SwapContainer>
        </PassportLayout>
    )
}

export default Page
