import React from 'react'
import { Link,useLocation } from 'react-router-dom';

import '../styles/components/Categorize.scss'

const Categorize = ({categories,selectedCategory}) => {
    const location = useLocation();
  return (
    <div className=" category">
      {categories.map((category, i) =>
        selectedCategory === category ? (
          <Link
            className="category__name category__name--selected"
            key={i}
            to={`/${location.pathname.split("/")[1]}/${category}`}
          >
            <div>{category}</div>
          </Link>
        ) : (
          <Link
            className="category__name"
            key={i}
            to={`/${location.pathname.split("/")[1]}/${category}`}
          >
            <div>{category}</div>
          </Link>
        )
      )}
    </div>
  );
}

export default Categorize