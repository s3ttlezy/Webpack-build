import * as $ from "jquery";
import Post from "@models/Post";
// import json from "./assets/json.json"
// import xml from "./assets/data.xml"
// import csv from "./assets/data.csv"
import img from "@/assets/logo"
import "./babel.js"
import "./styles/styles.css"
import "./styles/less.less"
import "./styles/scss.scss"
import { apply } from "file-loader";
import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";

const post = new Post("Webpack Post title", img);


const App = () => (
  <div className="container">
    <h1>Webpack build</h1>
    <hr />
    <div className="logo"/>
    <hr />
    <pre>{post.toString()}</pre>
    <hr />   
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
);
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);


// $("pre").addClass("code").html(post.toString());
// document.querySelector("pre").innerHTML = post.toString();

// console.log("JSON:", json);
// console.log("XML:", xml);
// console.log("CSV:", csv);
