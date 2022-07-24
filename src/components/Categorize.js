import React from 'react'
import { Link,useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Categorize = () => {
    const {selectedCategory} = useParams();
    const location = useLocation();
    const {categories, loading, error} = useSelector((state) => state.categoriesReducer);

  return (
    <div className=" category">
      {loading && "Loading..."}
      {!loading && categories?.map((category, i) =>
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
      {error}
    </div>
  );
}

export default Categorize