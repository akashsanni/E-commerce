import React from 'react'
import Smallcard from '../cards/smallcard';
import { useEffect , useState } from 'react';

function Categories(props) {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:1200/api/v1/products/categories")
        .then(res => res.json())
        .then(data => {

          // Update the categories state with the fetched data
          setCategories(data.data.categories);
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch request
          console.error("Error fetching categories:", error);
        });
    }, []);
    console.log(categories);
    return (
      <div className="navbar__dropdown">
        <Smallcard  tempobj={categories}></Smallcard>
      </div>
    );
  }

export default Categories;