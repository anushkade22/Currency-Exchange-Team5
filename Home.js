import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TableDatePicker from "../date.js";
import { App1 } from "../converter.js";


export const Home = () => {
  return (
    <div>
     <div class="m-4">
    <div class="card text-center">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab">
                <li class="nav-item">
                    <a href="#home" class="nav-link active" data-bs-toggle="tab">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#profile" class="nav-link" data-bs-toggle="tab">Currency Converter</a>
                </li>
                <li class="nav-item">
                    <a href="#messages" class="nav-link" data-bs-toggle="tab">View Chart</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="home">
                    <h5 class="card-title">Hello!  Hola!  Hallo!  Bonjour!  こんにちは!  नमस्ते!</h5>
                    <p class="card-text">This is the website which can help for analysis of various currencies across the globe.Their convergence,grpah viewing and many more.💵</p>
                    <a href="#" class="btn btn-primary">Go to Navigation Menu</a>
                </div>
                <div class="tab-pane fade" id="profile">
                   
                    <App1/>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go to Navigation Menu</a>
                </div>
                <div class="tab-pane fade" id="messages">
                    <h5 class="card-title"></h5>
                    <TableDatePicker />
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go to Navigation Menu</a>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
};