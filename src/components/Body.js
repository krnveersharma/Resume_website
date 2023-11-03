import React from 'react'
export default function Body() {
    return (
        <div className="row" style={{display: "grid",
            gridTemplateColumns: "auto auto"}}>
	  <div className="column" style={{fontSize:"1em",marginLeft:"150px",marginTop:"200px"}}>
		<div>
	   <p font> Hey</p>
	   </div>
	   <div>
	   <p >I am <span style={{color:"rgb( 0, 51, 102)",fontWeight:"bold"}}>Karanveer Sharma</span></p>
	   </div>
	   <p>Web developer
	   </p>
	  </div>
	  <div className="cmn">
	   <img src={require('../karan.jpg')} style={{border:"5px solid",borderRadius:"50%",marginTop:"200px"}}/>
	  </div>
	</div>
    )
}
