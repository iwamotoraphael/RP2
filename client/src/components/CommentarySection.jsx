import React, {useState, useEffect} from "react";

import '../css/components/CommentarySection.css'
import { getPostCommentaries, postCommentary } from "../services/api";

import Button from './Button'
import Commentary from "./Commentary";

const CommentarySection = ({commentaryUser, postId}) => {
    const [commentary, setCommentary] = useState('')
    const [commentaries, setCommentaries] = useState([])

    useEffect(() => {
        getPostCommentaries(postId).then((c) => {setCommentaries(c.data)})
    }, [])

    const handleChange = (e) => {
        setCommentary(document.getElementById("commentary-text").value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postCommentary(commentaryUser, commentary, postId)
        document.getElementById("commentary-text").value = ''
        getPostCommentaries(postId).then((c) => {setCommentaries(c.data)})
    }

    return(
        <div className="commentary-section-wrapper">
            <h3>Comments</h3>
            <form className="form-commentary">
                <div className="form-commentary-input">
                    <label htmlFor='content'/>
                    <textarea 
                        name="content" 
                        id="commentary-text"
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

            {commentaries.map((c) => <Commentary commentary_name = {c.name} commentary_date = {c.createdAt} commentary_content = {c.commentary_content} isNgo = {c.isngo}></Commentary>)}
        </div>
    )
}

export default CommentarySection;