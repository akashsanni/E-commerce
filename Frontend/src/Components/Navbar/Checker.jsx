import React from 'react'
import '../Categorywise/Categorywise.css' 
import Categorywise from '../Categorywise/Categorywise';
import { useEffect,useState } from 'react';
import { Route, useParams } from 'react-router-dom';
function Checker() {
    let { id } = useParams();
    const [dataTemp , setDataTemp ] = useState([])
    const [isLoading , setisLoading] = useState(true)
    const [isInitialRender, setIsInitialRender] = useState(true);
    useEffect(()=>{
      if(isInitialRender){
        setIsInitialRender(false);
        return;
      }

      fetch(`/api/v1/products/categories/${id}`)
      .then((res)=>res.json())
      .then(data=>{
          setDataTemp(data.data.categories)
          setisLoading(false)
      })

    },[ id, isInitialRender ]);
    console.log();
  return (
    <>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      dataTemp.length > 0 ? (
        <>
          <h1 className='categorywise__main__heading'>{dataTemp[0].category.name}</h1>
          <div className="categorywise__main">
          {dataTemp.map((el) => (
            <Categorywise
              key={el.name}
              name={el.name}
              image={el.images[0]}
              price={el.price}
              discountPrice={el.discountPercent}
              rating={el.rating}
              _id={el._id}
            />
          ))}

          </div>

        </>
      ) : (
        <p>No data available</p>
      )
    )}
  </>


  )
  }
export default Checker