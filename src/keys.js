import React from 'react'
import './btn'
export default function keys() {
  return (
    <div className="keys"> 
    <div> 
    <btn sym="AC" />
    <btn sym="DEL"/>
    <btn sym="/" /></div>
    <div> 
    <btn sym="1"/>
    <btn sym="2"/>
    <btn sym="3"/>
    <btn sym="*"/></div>
    <div> 
    <btn sym="4"/>
    <btn sym="5"/>
    <btn sym="6"/>
    <btn sym="+"/></div>
    <div> 
    <btn sym="7"/ >
    <btn sym="8"/ wide={2} >
    <btn sym="9"/ wide={2} >
    <btn sym="-"/ wide={2} ></div>
    <div> 
    <btn sym="." wide={2} />
    <btn sym="0" wide={2} />
    <btn sym="=" wide={2} /></div>
    </div>
  )
}
