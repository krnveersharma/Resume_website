import React from 'react'

export default function Card(props) {
  return (
    <div className='pjt' style={{marginLeft:"50px",marginTop:"20px"}}>
        <img  className="decor" src={props.image} alt='resumes' style={{width:"240px",height:"150px"}}/>
        <h4>{props.name}</h4>
        <h6>
            Skills:-
            <ul>
                <li>{props.skill1}</li>
                <li >{props.skill2}</li>
                <li>{props.skill3}</li>
                <li>{props.skill4}</li>
            </ul>
        </h6>
    </div>
  )
}
