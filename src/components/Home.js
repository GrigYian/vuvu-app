import React from "react";

function Home() {

    return (
    <div className="container">
        <div className="row position-relative overflow-hidden p-3 p-md-3 text-center bg-body-tertiary">
            <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Welcome to VuVuPool</h1>
            <h3 className="fw-normal text-muted mb-3">Travel between Europe cities by car and share the cost with others</h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal">
                <a className="icon-link" href="#">
                Learn more
                <i className="bi bi-chevron-right"></i>
                </a>              
            </div>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div className="row d-md-flex flex-md-equal">
            <div className="col-lg-6 col-md-12 text-bg-dark  pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
                <h2 className="display-5">I am driving</h2>
                <p className="lead">Register your route</p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            </div>
            <div className="col-lg-6 col-md-12 bg-body-tertiary  pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
                <h2 className="display-5">I am passenger</h2>
                <p className="lead">Search for a route</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
            </div>
        </div> 
    </div>
    )
}

export default Home;