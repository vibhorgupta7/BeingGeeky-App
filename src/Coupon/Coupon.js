import React from 'react';
import './Coupon.css';
import im from './coupon.jpg';

const content2 = () => {

    return(

        <div className="frame5 d-flex  " id="4">

                <img src={im} style={{width:"35%", height:"35%",borderRadius:"20%"}}></img>

                <div className="dd offset-1">

                    <h3 className="font-weight-bold text-left text-dark mx-5 my-3">Coupons</h3>
                    <p className=" text-left text-dark mx-5 my-3">You can apply different coupons to get extra discount on selected courses.Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless: Target-generated dummy text mixed with a certain combination of search terms can lead to an increased frequency of visits by search machine users. As a consequence, advertising revenues, which rely on website 'hits', are increased.</p>

                    <p className="font-weight-bold text-left text-dark mx-5 my-1"> Already have Coupon?</p>
    
                    <a href="#"  className="btn btn-primary mx-5 my-1 text-center">Redeem</a>

                </div>
        </div>
    );
}

export default content2;