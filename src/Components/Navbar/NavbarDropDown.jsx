import React from 'react'
import Dropdowncard from '../cards/Dropdowncard'
function NavbarDropDown(props) {
console.log(props);
    const tempobj = [
        {
            key:1,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:2,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:3,
            name:"True Wireless Earbuds",
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
        {
            key:14,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        },
        {
            key:15,
            name:"True Wireless Earbuds",
            image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_112x.png?v=1682662421"
        }
      
      ]


  
  return (
    <div className="navbar__dropdown" >
        <Dropdowncard tempobj = {tempobj}></Dropdowncard>
    </div>
    
       


  )
}

export default NavbarDropDown