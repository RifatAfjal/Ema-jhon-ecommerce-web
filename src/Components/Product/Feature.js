import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import './Product.css';
import ReactStars from 'react-stars';
import { render } from 'react-dom';


const Feature = (props) => {
    const element = <FontAwesomeIcon icon={faStar}/>
    return (
        <div className='feature-details'>
           {element}
           {element}
           {element}
           {element}
           {element}
           <h3>Features</h3>
            <ul>
                {
                    props.feature.map((spec,index) => <li key={index}>{spec.description}: {spec.value}</li>)
                }
            </ul>
        </div>
    );
};

export default Feature;