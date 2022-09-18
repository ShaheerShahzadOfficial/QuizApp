import React from 'react'
import "./CourseDetail.css"
import { useParams } from "react-router-dom"
const CourseDetail = () => {
    const { name } = useParams()
    return (
        <div>
            <div>
                <h1 className='Studentheading'>{name} (4 Trainers)</h1>
            </div>

<div className='TrainerContainer'>

<div className='Trainer'>
    
<h2>Sir Haider</h2>
 
</div>

</div>


        </div>
    )
}

export default CourseDetail