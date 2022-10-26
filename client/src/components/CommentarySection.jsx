import React, {useState} from "react";

import '../css/components/CommentarySection.css'

import Button from './Button'
import Commentary from "./Commentary";

const CommentarySection = () => {

    const [commentary, setPost] = useState({user_id: localStorage.getItem('user'), content: '', date: ''})

    const handleChange = (e) => {
        setPost({...commentary, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(commentary.content)
    }

    return(
        <div className="commentary-section-wrapper">
            <h3>Comments</h3>
            <form className="form-commentary">
                <div className="form-commentary-input">
                    <label htmlFor='content'/>
                    <textarea 
                        name="content" 
                        cols="40" rows="5" 
                        className='post_input' 
                        maxLength={1000} 
                        placeholder='How can WeHelp? (1000 characters)'
                        onChange={handleChange}></textarea>
                </div>
                <div className="commentary-button-wrapper">
                    <Button className='commentary-button' onClick={handleSubmit}>Submit</Button>
                </div>
            </form>

            <Commentary commentary_name = 'Teste' commentary_date = '22-10-19' commentary_content = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.' isNgo = {true}></Commentary>
            <Commentary commentary_name = 'Teste' commentary_date = '22-10-19' commentary_content = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vitae, atque nulla repudiandae quae corporis, tenetur officia, natus deserunt error accusamus ex dolorem rem quod nesciunt ducimus qui dicta laborum!Lorem ipsum dolor sit, amet consectetur adipisicing elit.' isNgo = {true}></Commentary>
        </div>
    )
}

export default CommentarySection;