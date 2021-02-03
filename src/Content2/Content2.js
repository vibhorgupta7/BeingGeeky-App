import React from 'react';
import './Content2.css';
import im from './macbook.jpg';

const content2 = () => {

    return(

        <div className="frame3  justify-content-center " id="3">


                <h3 className="font-weight-bold text-center text-dark mx-5 my-3">The video lecture you shouldn't miss</h3>

                <p className="font-weight-bold text-center text-dark mx-5 my-5">With one of the best content available online.And one of the best instructors it makes Being Geeky one of the best available learing platform available.he spread of computers and layout programmes thus made dummy text better known. While in earlier times several lines of the Lorem Ipsum text were repeated in the creation of dummy texts, today the full text of Cicero's 'De finibus' serves as the basis for many dummy text or Lorem Ipsum generators. Based on 'De finibus', these generators automatically create longer sections of the Lorem Ipsum text or various other filler texts</p>

                <a href="#" className="btn btn-primary mx-5 my-2 text-center">Read More</a>
                <br/>
                <img src={im} style={{width:"70%", height:"60%",borderRadius:"1%"}}></img>
        </div>

    );
}

export default content2;