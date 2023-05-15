import React from 'react'
import Smallcard from '../cards/smallcard';

function Categories(props) {
console.log(props);
    const tempobj = [
        {
            key:1,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:2,
            name:"Neckbands",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:3,
            name:"smart Watches",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:4,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:5,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        }
        ,        {
            key:6,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:7,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:8,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:9,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:10,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },        {
            key:11,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:12,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:13,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
      ]

  
  return (
    <div className="navbar__dropdown" >
        <Smallcard tempobj = {tempobj}></Smallcard>
    </div>


  )
}


export default Categories;