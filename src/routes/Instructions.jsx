import React from "react";
import { ImYoutube2 } from "react-icons/im";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export const Instructions = ({ menuObj }) => {
  const navigate = useNavigate();
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strArea,
    strCategory,
    strInstructions,
    strYoutube,
    strTags,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
  } = menuObj;

  const tags = strTags ? strTags.split(",").join(" #") : null;
  console.log(tags);
  const numbers = [];
  for (let i = 1; i <= 20; i++) {
    numbers.push(i);
  }

  const handleBack = () => {
    navigate("/dishes");
  };

  return (
    <>
      <Button
        onClick={handleBack}
        style={{ margin: "10px", backgroundColor: "tomato", border: "none" }}
      >
        <RiArrowGoBackFill size={20} />
      </Button>
      <div className="instruction" key={idMeal}>
        <div className="instruction-header">
          <img src={strMealThumb} alt={strMeal} />
          <div>
            <h2>{strMeal}</h2>
            <h6 className="text-muted my-3">
              {strArea} | {strCategory}
            </h6>
            {tags && <h6 className="text-muted my-3">#{tags}</h6>}

            <a href={strYoutube} target="_blank">
              <ImYoutube2
                style={{ color: "red", fontSize: "large", width: "50px" }}
              />
            </a>
          </div>
        </div>
        <hr style={{ border: "2px solid tomato" }} />
        <h5>Instructions</h5>
        <p>{strInstructions}</p>
        <h5>Ingredients</h5>

        {/* {numbers.map((number) => {
        const ingredient = "strIngredient" + number;
        const measure = "strMeasure" + number;
        return (
          <p>
            {ingredient}: {measure}
          </p>
        );
      })} */}

        {strIngredient1 && (
          <p>
            {strIngredient1}: {strMeasure1}
          </p>
        )}
        {strIngredient2 && (
          <p>
            {strIngredient2}: {strMeasure2}
          </p>
        )}
        {strIngredient3 && (
          <p>
            {strIngredient3}: {strMeasure3}
          </p>
        )}
        {strIngredient4 && (
          <p>
            {strIngredient4}: {strMeasure4}
          </p>
        )}
        {strIngredient5 && (
          <p>
            {strIngredient5}: {strMeasure5}
          </p>
        )}
        {strIngredient6 && (
          <p>
            {strIngredient6}: {strMeasure6}
          </p>
        )}
        {strIngredient7 && (
          <p>
            {strIngredient7}: {strMeasure7}
          </p>
        )}
        {strIngredient8 && (
          <p>
            {strIngredient8}: {strMeasure8}
          </p>
        )}
        {strIngredient9 && (
          <p>
            {strIngredient9}: {strMeasure9}
          </p>
        )}
        {strIngredient10 && (
          <p>
            {strIngredient10}: {strMeasure10}
          </p>
        )}
      </div>
    </>
  );
};
