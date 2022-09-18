import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
const Home = () => {


    const subject = [
        { Name: "HTML", Trainers: 4 },
        { Name: "CSS", Trainers: 4 },
        { Name: "JAVASCRIPT", Trainers: 4 },
        { Name: "REACT JS", Trainers: 4 },
        { Name: "NODE JS", Trainers: 4 }

    ]

    return (

        <div>

            <h1 className='Studentheading'>
                WELCOME STUDENT
            </h1>

            <br />

            <div className='Courses'>

                {
                    subject.map((item, i) => (
                        <div key={item.Name}>
                            
                            <div style={{width:"90%",margin:"auto"}}>
                            <h4 style={{ fontSize: "1.5rem", marginTop: 0, marginBottom: "0.5rem" }}>{item.Name}</h4>
                            <h6 style={{ color: "#10266b", fontSize: "1.3rem", fontWeight: 500, lineHeight: 1 }}>{item.Trainers} Trainers</h6>
                            <Link to={`/course/${item.Name}`}>
                            <button style={{color: "#10266b",width:"100%", border:"2px solid #10266b",padding:"1vmax",margin:"auto",backgroundColor:"white",fontSize:"1.4rem",fontWeight:200}}>Join Test</button>
                            </Link>
                            </div>
                            
                            </div>
                    ))
                }

            </div>

        </div>

    )
}

export default Home