import React from 'react'


const Offer =(props)=> {
        return (
            <section>
                <div className="offer-section">
                {props.item.map((el,i)=> 
                    <div className={el.parentClass}>
                        <h5>{el.forwho}</h5>
                        <h2>{el.title}</h2>
                        {el.countries &&
                         <select>
                        {el.countries.map((el,i)=>
                               
                                    <option>{el.country}</option>
                                
                            )}
                            </select>}
                        <img className={el.classimg} src={el.srcimg} alt={el.altimg} width="397.5" height="248.750"></img>
                    </div>
                )}
                </div>
            </section>
        )
    }
export default Offer;