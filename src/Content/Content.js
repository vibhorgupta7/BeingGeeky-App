import React from 'react';
import './Content.css';
import im from './ipad.jpg';

const content = () => {

    return(

        <div className="frame2  justify-content-center " id="2">
                <h2 className="font-weight-bold text-center text-light ">Documentation</h2>

                <h3 className="font-weight-bold text-center text-light mx-5 my-3">All genuine Documentation at one place</h3>

                <p className="font-weight-bold text-center text-light mx-5 my-4">Being Geeky helps the viewer to find all the required documentation at one place so that they need not waste time to find offical documentation. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>

                <a href="#" className="btn btn-primary mx-5">Start Your Trial Now</a>

                <p className="font-weight-bold text-center text-light mx-5 my-2">You can download Being Geeky from app store or playstore.</p>

                <img src={im} style={{width:"70%", height:"60%",borderRadius:"1%"}}></img>
        </div>

    );
}

export default content;