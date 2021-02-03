import React from 'react';

const navigation = () => {
    
  
    return(

        
        
        <nav class="navbar navbar-dark bg-dark navbar-expand-sm fixed-top">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#"></a>
                <div class="collapse navbar-collapse" id="Navbar">
                    <ul class="navbar-nav mr-auto">
                            <li class="nav-item active"><a class="nav-link" href="#"><span ></span> Being Geeky</a></li>
                            <li class="nav-item"><a class="nav-link" href="#2"><span></span> Tutorials</a></li>
                            <li class="nav-item"><a class="nav-link" href="#3"><span></span> Videos</a></li>
                            <li class="nav-item "><a class="nav-link" href="#4"><span></span> Coupons</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default navigation;