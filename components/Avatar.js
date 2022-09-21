import Image from 'next/future/image'

function Component({ width = 128, height = 128 }) {
    return (
        <Image
            className="rounded-full border border-slate-300"
            width={width}
            height={height}
            src="https://avatars.githubusercontent.com/u/30433331?v=4"
            alt=""
        />
    )
}

export default Component
