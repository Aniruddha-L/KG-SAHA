import user_profile from '../Static/Asstes/user_profile.png'
import '../Static/Style/Headbar.css'

function Headbar() {
    return <>
        <nav className='headbar'>
            <section className='logo'><a href="">LOGO</a></section>
            <ul>
                <li>
                    <div className='home'><a href="">HOME</a></div>
                </li>
                <li>
                    <div className='pdts'><a href="">PRODUCTS</a></div>
                </li>
                <li>
                    <div className='abt'><a href="">ABOUT</a></div>
                </li>
                <li>
                    <div className='contact'><a href="">CONTACT</a></div>
                </li>
                <li>
                    <div className='user_profile'><a href=""></a></div>
                </li>
            </ul>
        </nav>
    </>
}

export default Headbar