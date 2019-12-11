import React from 'react'


const Navbar =(props)=> {
        return (
            <header>
                      <a href="/">
                <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" width="268px" height="33px"></img>
            </a>
            
            <ul className="nav-menu">
               {props.item.map(el=>
               <li className={el.nameClass} >
                   <a href={el.lien} className={el.classlink}>{el.title}</a>
                   <ul className="dropdown-content">
                       {el.dropd && el.dropd.map((el,i)=><li><a className="dropdown-links" href={el.liendd}>{el.content}</a></li>)}
                   </ul>
                   </li>
                )}
               </ul>
               </header>
        )
    }
export default Navbar;
