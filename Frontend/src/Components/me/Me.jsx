import React from 'react'
import "./me.css"
function Me() {
  return (
    <>
    
    <br />
    <br />
    <br />
    <br />
    
   <div className="me__main">

            <div className="me__left">
                <div className="menu__items">
                    <div className="menu__items__icon">
                        <h2>SETTINGS</h2>
                        <img src="https://cdn-icons-png.flaticon.com/128/2099/2099058.png" alt="dfs" />
                        
                    </div>
                    <div className="menu__items__icon">
                    <h2>MY ORDERS</h2>
                        <img src="https://cdn-icons-png.flaticon.com/128/484/484613.png" alt="" />
                       
                    </div>
                    <div className="menu__items__icon">
                    <h2>MY REVIEWS</h2>
                        <img src="https://cdn-icons-png.flaticon.com/128/484/484613.png" alt="" />
                       
                    </div>
                    <div className="menu__items__icon">
                        <h2>BILLING</h2>
                        <img src="https://cdn-icons-png.flaticon.com/128/484/484613.png" alt="" />
                       
                    </div> 
                </div>
            </div>
            <div className="me__right">
                    <div className="me__right_top">
                        <h1 className='me__right_top__heading'>YOUR ACCOUNT SETTINGS</h1>

                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" />
                        <label htmlFor="name">Email Address</label>
                        <input type="text" id="name" />
                        <label htmlFor="photo">CHOOSE YOUR PROFILE PICTURE</label>
                        <input type="file" id="photo" />
                        <button>Save Changes</button>

                    </div>
                    <div className="me__right_bottom">
                    <div className="me__right_top">
                        <h1 className='me__right_top__heading' >PASSWORD CHANGE</h1>

                        <label htmlFor="password">Current password</label>
                        <input type="password" id="password" />
                        <label htmlFor="cpassword">New password</label>
                        <input type="password" id="cpassword" />
                        <label htmlFor="npassword">Confirm password</label>
                        <input type="password" id="npassword" />
                        <button>Save Changes</button>




                    </div>
                    </div>
            </div>
   </div>
    
    </>
    
  )
}

export default Me