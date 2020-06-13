import React from "react";
import style from "./recipes.module.css";
const Recipie = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipes}>
          <h1>{title} </h1>
         <img src={image} alt="" />
    
      <ol>
        {ingredients.map((item) => (
          <li>{item.text}</li>
        ))}
      </ol>
      <p>Calories : {calories} </p>
     
    </div>
  );
};

export default Recipie;
