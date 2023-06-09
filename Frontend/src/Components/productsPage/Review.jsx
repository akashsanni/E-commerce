import React from 'react'
import ReviewComments from './ReviewComments'
export default function Review() {
  return (
   <div className="review">
    <h2>What boatheads are saying:</h2>
    <div className="review__main">
    <div className="totalavegragestar">
        <p>4.4☆</p>
        <p>Based on 20 reviews</p>
    </div>

    <div className="ratingsbystar">
        {/* <div className="five__star star">
        <p>★★★★★</p>
        <p>80%</p>
        <p>(16)</p>
        </div> */}

    </div>
    <div className="btn">
    <button className='writearevuew'>Write a Review</button>
    </div>
   
    </div>
   <ReviewComments     />
   <ReviewComments/>     
   <ReviewComments     />
   <ReviewComments     />
   <ReviewComments     />
   <ReviewComments     />
   <ReviewComments     /> 
   
   </div>
  )
}




