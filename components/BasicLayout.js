import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Component({ children }) {
    return (
        <div>
            <Navbar/>
            <div className="pt-16 container mx-auto md:max-w-xl">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Component
