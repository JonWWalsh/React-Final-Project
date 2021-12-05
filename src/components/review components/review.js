import React, { useState } from "react";
import StarRating from "./star-rating";
import ReviewList from "./review-list";
import Form from "./form";
import "../../../src/App.css";
import { uuid } from "uuidv4";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({dish: "", review: "", id: uuid() });
  const [editing, setEditing] = useState(false);

  return (
    <div className="appform">
      <h1>Dish Reviews</h1>
      {/* <StarRating /> */}
      <Form editing={editing} form={form} reviews={reviews} setEditing={setEditing} setForm={setForm} setReviews={setReviews} />
      <ReviewList reviews={reviews} setForm={setForm} setEditing={setEditing} setReviews={setReviews} />
    </div>
  );
}

export default Review;