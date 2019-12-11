import React from 'react'

const Opening=(props)=>{
    return (
        <section className="section1">
            <div className="opening-section">
            <img className="logo" src="https://www.docplanner.com/img/sygnet.png" alt="Home Logo"></img>
                    <h1 className="main-ttl">Making the healthcare experience more human</h1>
    <ul className="presentation-txt"> 
    {props.item.map((el,i)=> 
    <li className={el.nameClass}>
<p>{el.content}</p>
    </li>
    )}
    </ul>
            </div>
            </section>
    )
}
export default Opening;