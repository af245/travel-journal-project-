import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
export default function Header(){
    return(
        <div className='header--container'>
            <header>
                <div className='header--title--container'>
                    <FontAwesomeIcon icon={faEarthAmericas} className='globe' />
                    <span className='header--title'>my travel journal.</span>
                </div>

            </header>
        </div>
    )
}