import BasicLayout from './BasicLayout.js'
import PassportCard from './PassportCard.js'

function Component({ children, ...props }) {
    return (
        <BasicLayout {...props}>
            <PassportCard/>
            <hr/>
            {children}
        </BasicLayout>
    )
}

export default Component
