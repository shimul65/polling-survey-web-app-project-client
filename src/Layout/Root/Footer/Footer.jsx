import logo from '../../../assets/survey.svg'
import instagram2 from '../../../assets/instagram2.png'
import twit from '../../../assets/twit.svg'
import link from '../../../assets/link.svg'
import instagram from '../../../assets/instagram.svg'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='container mx-auto'>
            <div className="footer lg:pt-32 py-16 pl-10 lg:pl-0">
                <aside>
                    <div>
                        <img className='w-36 ' src={logo} alt="" />
                    </div>
                    <p className='text-black my-5'>&rdquo;Empowering insights, one survey at a time. <br />Discover the pulse of opinions with SurveyWebApp. <br /> Your feedback shapes the future.&rdquo;</p>
                    <div className='flex items-center justify-center gap-3 mt-3'>
                        <a href=""><img className='w-8 h-8' src={instagram} alt="" /></a>
                        <a href=""><img className='w-8 h-8' src={link} alt="" /></a>
                        <a href=""><img className='w-8 h-8' src={twit} alt="" /></a>
                        <a href=""><img className='rounded-lg w-8 h-8' src={instagram2} alt="" /></a>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Key features</header>
                    <a className="link link-hover text-black">Translate survey</a>
                    <a className="link link-hover text-black">Survey templates</a>
                    <a className="link link-hover text-black">Security</a>
                    <a className="link link-hover text-black">Integrations</a>
                </nav>
                <nav>
                    <header className="footer-title">Resources</header>
                    <Link className="link link-hover text-black" to='/about'>About us</Link>
                    <a className="link link-hover text-black">User Guide</a>
                    <a className="link link-hover text-black">User forums</a>
                    <a className="link link-hover text-black">FAQs</a>
                    <a className="link link-hover text-black">What&rsquo;s new
                    </a>
                </nav>
                <nav>
                    <header className="footer-title">Quick links</header>
                    <Link className="link link-hover text-black" to='/contact'>Contact Us</Link>
                    <a className="link link-hover text-black">Terms of use</a>
                    <a className="link link-hover text-black">Privacy policy</a>
                    <a className="link link-hover text-black">Features</a>
                </nav>
            </div>
            <div className="footer footer-center p-5 border-t-[3px] footer2 container mx-auto" >
                <aside>
                    <p className=''>❤ Copyright © 2023 -
                        Mohammad Shimul || Assignment-12 PH ❤
                    </p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;