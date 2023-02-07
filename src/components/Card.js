import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
export default function Card(props){
    return(
        <div className='card--container'>
            <div className='image--container'>
                <img src={props.imageUrl}/>
            </div>
            <div className='content--container'>
                <div className='info--maps'>
                    <FontAwesomeIcon icon={faLocationDot} className="pin"/>
                    <span className='info--country'>{props.location}</span> 
                    <span className='info--link'>< a href ={props.googleMapsUrl}>View on Google Maps</a></span>              
                </div>
                <div className='content--name'>
                    {props.title}
                </div>
                <div className='content--date'>
                    {props.startDate} - {props.endDate}
                </div>
                <div className='content--description'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}