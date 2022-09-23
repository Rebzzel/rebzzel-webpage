import Avatar from './Avatar.js'

function Component() {
    return (
        <div className="p-4 flex flex-col items-center space-y-2">
            <Avatar/>
            <div className="leading-3 text-center">
                <h1 className="text-2xl"><b>Kirill Paltsev</b></h1>
                <h2>Full-stack developer</h2>
            </div>
        </div>
    )
}

export default Component
