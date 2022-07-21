import React, { useContext } from 'react'
import { Link,useLocation, useParams } from 'react-router-dom';

import { DataContext } from '../context';

const Categorize = () => {
    const {selectedCategory} = useParams();
    const location = useLocation();
    const {categories} = useContext(DataContext)

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