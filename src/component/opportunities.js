import React from 'react'

const Opportunities = (props)=>{
    return(
        <section>
        <div className="opp-container">
        <div className="opp-txt">
            <h2>Improve the lives of millions. Change yours forever</h2>
            <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
        </div>
    <div className="opp-links">
{props.item.map(el=>
    <div className="opp-frame">
        <img src={el.imgsrc} alt={el.imgcont}></img>
        <div className="opp-bar">
            <h3 className="city-name">
                {el.imgcont}
            </h3>
            <button className="opp-but">
                See Openings
            </button>
        </div>
    </div>
    )}
    </div>
    </div>
    </section>
    )}

export default Opportunities;