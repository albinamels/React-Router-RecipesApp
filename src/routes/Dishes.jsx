import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

export const Dishes = ({ getMenuObj }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const query = searchQuery.slice(0, 1); // grab first letter from searchQuery
  const defaultQuery = "a";
  const navigate = useNavigate(); // must invoke first here

  const fetchData = async () => {
    const res = await fetch(
      // "https://themealdb.com/api/json/v1/1/search.php?f=r"
      `https://themealdb.com/api/json/v1/1/search.php?f=${
        query ? query : defaultQuery
      }`
    );
    const data = await res.json();
    setData(data.meals);
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const handleClick = (dish) => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) {
      navigate("/instructions");
      getMenuObj(dish); // lifts dish up to parent App
    } else {
      alert("Please login first!");
      navigate("/login");
    }
  };

  return (
    <div>
      <Input
        className="search-field"
        name="food"
        placeholder="enter your favorite food..."
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "48%",
          margin: "30px auto",
          padding: "10px 20px",
          border: "2px solid tomato",
          fontSize: "20px",
        }}
      />
      <div className="dishes-wrapper">
        {!!data.length &&
          data.map((dish) => {
            const { idMeal, strMeal, strMealThumb, strCategory, strArea } =
              dish;
            return (
              <Card
                style={{ width: "18rem", textAlign: "center" }}
                key={idMeal}
              >
                <img src={strMealThumb} alt={strMeal} />
                <CardBody>
                  <CardTitle tag="h5">{strMeal}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {strArea} | {strCategory}
                  </CardSubtitle>
                  <CardText></CardText>

                  {/* 
                1. fires getMenuObj(), which lifts up whole dish{} and updates the state in App
                2. checks status and navigates to Instructions || Login
                */}
                  <Button onClick={() => handleClick(dish)}>
                    Click for instructions
                  </Button>
                </CardBody>
              </Card>
            );
          })}
      </div>
    </div>
  );
};
