import React from 'react';
// import memeData from '../MemesData'
export default function Form(){
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    }) 
    const[allMeme,setAllMeme]=React.useState("");

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMeme(data.data.memes))
    },[])

    function getImage(){
        // let dta=allMeme.data.memes;
        let ind=Math.floor(Math.random()*allMeme.length);
        const url=allMeme[ind].url;
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }));
    }
    function handleChange(event){
        const{name,value}=event.target;
        setMeme(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
        console.log("Changed")
    }
    
    return(
        <div className="form">
            <div className="text-inputs">
                <input type="text" 
                    className="text1" 
                    value={meme.topText}  
                    name="topText" 
                    placeholder='Upper Text'
                    onChange={handleChange}
                />
                <input type="text" 
                    className="text2" 
                    value={meme.bottomText}  
                    name="bottomText" 
                    placeholder='Bottom Text'
                    onChange={handleChange}
                />
            </div>
            <div className="btn-div">
                <button className="btn" onClick={getImage}>Get A New Meme Image</button>
            </div>
            <div className="content">
                <img src={meme.randomImage} alt="memes-image" className='meme-img'  />
                <h1 className='meme--text top'>{meme.topText}</h1>
                <h1 className='meme--text bottom'>{meme.bottomText}</h1>
            </div>
        </div>
    );
}