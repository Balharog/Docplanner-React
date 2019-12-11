import React from 'react'


const Stats =(props)=> {
        return (
            <section>
                <div class="stat-section-container">
                    <div class="stat-section">
                        <div class="stat-bloc1">
                            <h2>The world's <br/>biggest healthcare platform</h2>
                            <p>We work from 6 offices all over the world, bringing Docplanner<br/> Group to life in almost 20 countries.</p>
                            <img class="logo-stat-background" src="https://www.docplanner.com/img/logo.png" alt='Docplan'></img>
                        </div>
                        <div className="stat-bloc2">
                            {props.item.map(el=>
                            <div className={el.parentclass}>
                            {el.statss.map(el=>
                                <div className={el.divstat}>
                                    <img className=" logos" src={el.srcstat} alt={el.altstat}>
                                    </img>
                                    <h3 className="stat-ttl">
                                        {el.titlecontent}
                                    </h3>
                                    <p className="stat-txt">
                                        {el.textconstent}
                                    </p>
                                </div>
                            )}
                            </div>
                            )}  
                        </div>
                    </div>
                    </div>
                </section>
        )
    }
export default Stats;