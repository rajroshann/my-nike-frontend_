import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

function CustomerReview() {
  return <section>
    <h2 className="text-center text-4xl font-bold font-montserrat text-green-500">What Our
      <span className="text-orange-400 "> Customer </span>
      Say?
    </h2>
    <p className="font-mono text-slate-500 font-semibold text-2xl mt-4 text-center m-auto text- max-w-lg  ">Here genuine stories from our satisfied customer about their exceptional experiences with us.</p>

    <div className=" mt-20 gap-16 flex flex-1  justify-evenly items-center max-lg:flex-col ">
      {reviews.map((review) => (
        <ReviewCard 
        key={review.customerName}
          imgURL = {review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        
        
        
        />
      ))}
    </div>
  </section>
}

export default CustomerReview;
