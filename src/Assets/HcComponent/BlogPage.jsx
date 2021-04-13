import React from "react";
import S1 from "../Image/service1.png";
import S2 from "../Image/service2.png";
import S3 from "../Image/service3.png";
import Card1 from "../Image/image1.jpg";
import Img1 from "../Image/demo/thumbnail-01.png";
import Img2 from "../Image/demo/thumbnail-02.png";
import Img3 from "../Image/demo/thumbnail-03.png";
import Img4 from "../Image/demo/thumbnail-04.png";
import Img5 from "../Image/demo/thumbnail-05.png";
import Img6 from "../Image/demo/thumbnail-06.png";
import Img7 from "../Image/demo/thumbnail-07.png";
import Img8 from "../Image/demo/thumbnail-08.png";
import Img9 from "../Image/demo/thumbnail-09.png";

const BlogPage = () =>{
    return(
        <div id="BlogPage">
            <section className="container-fluid headerBlog">
            <div className="col-md-7 mx-auto text-center">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi numquam esse earum adipisci dolor ipsum dolorem, culpa, eaque magnam quas tempora nam totam? Iusto quam sunt alias pariatur? Excepturi.</p>
                    </div>
            </section>
            <section className="container-fluid">
                <div className="row">
                    
                    {
                    Cardata.map((val,index)=>{
                     return(
                         <Card
                            key = {index}
                            imgsrc = {val.imgsrc}
                            heading = {val.heading}
                            text = {val.text}
                         />
                        );
                        })
                        }
                    
                </div>
            </section>
        </div>
    );
}
const Card = (props) =>{
  return(
      <>
      <div className="col-md-3 col-sm-6 mt-5">
        <div class="card" id="blogcard">
        <img class="card-img-top" src={props.imgsrc} alt="Card image cap"/>
         <div class="card-body">
            <h5 class="card-title">{props.heading}</h5>
            <p class="card-text">{props.text}</p>
            <a href="#" class="btn btn-primary">Get Started</a>
        </div>
        </div>
        </div>
      </>
  );
}
const Cardata = [
    {imgsrc:Card1, heading:"Card title",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, vitae. Voluptates perferendis ipsa placeat"},
    {imgsrc:Card1, heading:"Card title",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, vitae. Voluptates perferendis ipsa placeat"},
    {imgsrc:Card1, heading:"Card title",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, vitae. Voluptates perferendis ipsa placeat"},
    {imgsrc:Card1, heading:"Card title",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, vitae. Voluptates perferendis ipsa placeat"},
    {imgsrc:Card1, heading:"Card title",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, vitae. Voluptates perferendis ipsa placeat"},
    {imgsrc:Card1, heading:"Card title",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, vitae. Voluptates perferendis ipsa placeat"},
    {imgsrc:Card1, heading:"Card title",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, vitae. Voluptates perferendis ipsa placeat"},

];
export default BlogPage;
export {Cardata};