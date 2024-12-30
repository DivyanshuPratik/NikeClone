import React from "react";
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/data";

const CustomerReview = () => {
    return <section className="bg-pale-blue max-container">
        <div className="flex flex-col items-center">
            <p className="text-4xl font-bold font-palanquin">What Our Customers Say?</p>
            <p className="info-text max-w-lg text-center mt-4">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            <div className="flex max-lg:flex-col max-lg:mt-20 mt-24 gap-14 justify-evenly w-full">
                {reviews.map((item)=>{
                    return <ReviewCard imgURL={item.imgURL} rating={item.rating} name={item.customerName} review={item.feedback}/>
                })}
            </div>  
        </div>
    </section>
}

export default CustomerReview 