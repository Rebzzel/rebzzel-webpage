import clsx from 'clsx'
import { MdMail } from 'react-icons/md'
import { BsTelegram } from 'react-icons/bs'

import PassportLayout from '../components/PassportLayout.js'
import SwapContainer from '../components/future/SwapContainer.js'
import Tag from '../components/Tag.js'

function LinkButton({ className, href, ...props }) {
    return (
        <a className="contents" href={href}>
            <button
                className={clsx(
                    className,
                    'p-2',
                    'duration-300',
                    'rounded-md',

                    'hover:scale-[105%]',
                    'active:scale-[95%]',

                    'hover:bg-slate-200',
                    'dark:hover:bg-slate-600',

                    'active:bg-slate-300',
                    'dark:active:bg-slate-700',
                )}
                {...props}
            />
        </a>
    )
}

function Page() {
    const languages = [
        'C++',
        'C',
        'Python',
        'JavaScript',
        'TypeScript',
        'PHP',
        'SQL',
        'C#',
        'Java',
        'Lua',
        'HTML',
        'CSS',
        'Assembler',
    ]

    const technologies = [
        'PostgreSQL',
        'MySQL',
        'Git',

        'Docker',
        'Node.js',

        'Next.js',
        'React Native',
        'JQuery',

        'FastAPI',
        'Flask',
        'Django',
        'Laravel',

        'Nginx',
        'Uvicorn',

        'Pip',
        'Npm',
        'Yarn',
    ]

    return (
        <PassportLayout>
            <SwapContainer className="py-4 space-y-4">
                <section id="skills">
                    <h1 className="text-xl"><b>Skills</b></h1>
                    <div className="p-1">
                        <h2><b>Languages ({languages.length})</b></h2>
                        <div className="p-1 flex flex-wrap">
                            { languages.map(s => <Tag key={s}>{s}</Tag>) }
                        </div>
                    </div>
                    <div className="p-1">
                        <h2><b>Technologies ({technologies.length})</b></h2>
                        <div className="p-1 flex flex-wrap">
                            { technologies.map(s => <Tag key={s}>{s}</Tag>) }
                        </div>
                    </div>
                </section>
                <section id="bio">
                    <h1 className="text-xl"><b>Bio</b></h1>
                    <p className="p-2 indent-4">Kirill is a self-taught programmer. Now he is looking for a job where he could develop projects and develop himself. He will be glad of your suggestions ❤️</p>
                </section>
                <section id="contact">
                    <h1 className="text-xl"><b>Contact</b></h1>
                    <div className="p-2">
                        <LinkButton
                            className="flex items-center space-x-2"
                            href="https://mail.google.com/mail/u/0/?fs=1&to=rebzzel@gmail.com&tf=cm"
                        >
                            <MdMail size={18}/>
                            <p>rebzzel@gmail.com</p>
                        </LinkButton>
                        <LinkButton
                            className="flex items-center space-x-2"
                            href="https://t.me/rebzzel"
                        >
                            <BsTelegram size={18}/>
                            <p>@rebzzel</p>
                        </LinkButton>
                    </div>
                </section>
            </SwapContainer>
        </PassportLayout>
    )
}

export default Page
