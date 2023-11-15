import { useState, useEffect } from 'react';
import './Meme.css'
import './Content.css'
import memesData from '../memesData';
const d = document;

export default function Meme (){

    const memes = memesData.data.memes;
    const memeImages = memes.map(meme => {
        return meme.url;
    });
    const randomNumber = Math.floor(Math.random() * memeImages.length);

    const [meme, setMeme] = useState({
        text1: "",
        text2: "",
        img: memeImages[randomNumber]
    });

    const [color, setColor] = useState({
        topColor: "white",
        bottomColor: "white"
    });

    useEffect(() => {
        d.addEventListener("keyup", e => {
            setMeme(prevState => ({
                ...prevState,
                text1: d.querySelector(".top-text").value,
                text2: d.querySelector(".bottom-text").value
            }))
        })
    }, [])
    
        
    const changeImage = (e) =>{
        e.preventDefault();
        const url = memeImages[randomNumber];
        setMeme(prevState => ({
            ...prevState,
            img: url
        }))
    }
    const reset = () => {
        d.querySelector(".top-text").value = "";
        d.querySelector(".bottom-text").value = "";
        setMeme(prevState => ({
            ...prevState,
            text1: "",
            text2: ""
        }));
    }

    useEffect( () => {
        d.addEventListener("click", e => {
            const white = d.querySelectorAll(".white-box"),
            black = d.querySelectorAll(".black-box");
            //console.log(white);
            if (e.target === (white[0])) {
                setColor(prevState => ({
                    ...prevState,
                    topColor: "white"
                }));
                console.log(`white 0`);
            }
            if (e.target === (white[1])) {
                setColor(prevState => ({
                    ...prevState,
                    bottomColor: "white"
                }));
                console.log(`white 1`);
            }
            if (e.target ===(black[0])) {
                setColor(prevState => ({
                    ...prevState,
                    topColor: "black"
                }));
                console.log(`black 0`);
            }
            if (e.target === (black[1])) {
                setColor(prevState => ({
                    ...prevState,
                    bottomColor: "black"
                }));
                console.log(`black 1`);
            }
        }) 
    }, [])
// Using fetch
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'Meme image'
    link.classList.add("download")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
    return (
        <main>
            <form>
                <div className='text'>
                    <input 
                        name='top-text'
                        type="text" 
                        placeholder="Top text"
                        className="top-text"/>
                        <div className='boxes'>
                            <div className='white-box'></div>
                            <div className='black-box'></div>
                        </div>
                    <input 
                        name='top-text'
                        type="text" 
                        placeholder="Bottom text"
                        className="bottom-text"/>
                        <div className='boxes'>
                            <div className='white-box'></div>
                            <div className='black-box'></div>
                        </div>
                </div>
                <div className='submit'>
                    <button onClick={changeImage}>Get a new meme image 🖼</button>
                </div>
            </form>
            <div className='content'>
                <img src={meme.img} alt='Meme'/>
                <p className='text1' style={{color: color.topColor}}>{meme.text1}</p>
                <p className='text2' style={{color: color.bottomColor}} >{meme.text2}</p>
            </div>
            <div className='buttons'>
                <button  onClick={() => downloadImage(meme.img)}>Download template</button>
                <button className='reset' onClick={reset}>Reset</button>
            </div>
        </main>
    )
}