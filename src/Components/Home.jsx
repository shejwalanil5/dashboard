import React from 'react'
import Image from '../assets/team.png'
import BGI from '../assets/Rectangle 1.png'
import Alienform from '../assets/Alienform.png'
import Group from '../assets/Group.png'
import Rect from '../assets/Rectangle 2.png'
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className='header'>
                <div>
                    <div className='logo-group'>
                        <img className='logo' src={Alienform}></img>
                        <img className='group' src={Group}></img>
                    </div>
                    <img className='rect' src={BGI}></img>
                    <img className='img' src={Image} alt=''></img>
                </div>
                <div className='sub-header'>
                    <img className='sub-img' src={Rect} alt=''></img>
                    <div className='sub-inner'>
                       <div className='input-form'>
                        <input type='text' placeholder='Enter An Prefer Pair'/>
                        <input type='text' placeholder='Initial Amount '/>
                       </div>
                       <div className='input-form'>
                        <input type='text' placeholder='Enter An Prefer Pair'/>
                        <input type='text' placeholder='Initial Amount '/>
                       </div>
                       <div className='input-radio'>
                       <label>Want Compounding :   </label>
                       <label>
                        <input type='radio' value=""/>yes
                       </label>
                       <label>
                        <input type='radio' value=""/>no
                       </label>
                       </div>
                       <div className='form-button'>
                        <button type='submit'>Start Now</button>
                        <button type='submit'>pause Now</button>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home