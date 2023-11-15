import './Header.css'
import logo from '../assets/img/trollface.png'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";



export default function Header(){
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='Troll Face'/>
                <p>Meme Generator</p>
            </div>
        <div className='links'>
            <a href="https://www.linkedin.com/in/jeury-pierre-dide/" target='_blank' rel='noreferrer'> <AiFillLinkedin/></a>
            <a href="https://github.com/Jeuryy" target='_blank' rel='noreferrer'><AiFillGithub/></a>
            <a href="https://jeuryy.github.io/portfolio" target='_blank' rel='noreferrer'><TfiWorld/></a>
        </div>
        </div>
    )
}