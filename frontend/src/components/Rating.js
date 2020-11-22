import React from 'react';

const Rating = ({value, text, color}) => {
    return (
        <div className='rating'>
            <span>
                <i style={{color: color}} className={
                    value >= 1 // si value > 1, 1 étoile entière
                        ? 'fas fa-star'
                        : value >= 0.5  // si value 1/2 étoile
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'} /> {/* sinon étoile vide */}
            </span>
            <span>
                <i style={{color: color}} className={
                    value >= 2
                        ? 'fas fa-star'
                        : value >= 1.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'} />
            </span>
            <span>
                <i style={{color: color}} className={
                    value >= 3
                        ? 'fas fa-star'
                        : value >= 2.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'} />
            </span>
            <span>
                <i style={{color: color}} className={
                    value >= 4
                        ? 'fas fa-star'
                        : value >= 3.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'} />
            </span>
            <span>
                <i style={{color: color}} className={
                    value >= 5
                        ? 'fas fa-star'
                        : value >= 4.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'} />
            </span>
            <span>{text && text}</span>{/* S'il y a un numReviews, affiche */}
        </div>
    );
};

export default Rating;

