import React from "react";
// import { NavHashLink } from 'react-router-hash-link';
import S1 from "../Image/service1.png";
import S2 from "../Image/service2.png";
import S3 from "../Image/service3.png";
import S4 from "../Image/service4.png";
import S5 from "../Image/service5.png";
import S6 from "../Image/service6.png";


const BlogPageComponent = (props) =>{
    return(
        <>
            <div className="row my-5 BlogComp" id={props.id}>
                <div className="col-md-4">
                    <img src={props.imgsrc} alt="service" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    );
}

const BlogPageComponentData = [
    {
        id : "web-development",
        imgsrc : S1,
        heading : "web development",
        text : "A good website doesn't end at style, rather, it must be expertly customized so that it functions appropriately and include all the elements in the best manner.We have a dedicated team of professionals employed to develop powerful and engaging websites that leave a long lasting impact on a visitor’s mind. A strong website marks the level of your online presence and for it to be outstanding, we enforce an extensive research of your product / service to finalise the best and most fitting layout for you. We put in all our creativity and efforts to deliver a user friendly, adaptive and attractive website to match your ideas and preferences. Our services are top notch, using efficient, relevant and updated technology and our sole aim is to provide our customers with a fully optimised package of ultimate amenities at the best prices. If you are looking to create a face online, we are the website development company of your choice. ",
    },
    {
        id : "brand-marketing",
        imgsrc : S2,
        heading : "brand marketing",
        text : "We at Hardciphers intend to boost your business and place it at the top of your industry. We start from scratch to step by step develop an identity, theme, colour scheme, product range and other related factors by conducting a deep-rooted study of customer psychology, market trends and target audience. the list of elements that make up your identity is endless. Our team of effective personnel helps you design your branding strategy endlessly till the extent of satisfactory results. We systematically build your online presence which shall be interactive and captivating for the audience. Considering today’s internet era, online marketing is doing wonders in the industry and we plan to make the most of this advantage to outmatch competitors and stand distinguished in your field. With our in-depth knowledge of advertising, trend, marketing dynamics we help you strategize better for your brand. Our team will always be beneficial for your organization. ",
    },
    {
        id : "graphic-designing",
        imgsrc : S3,
        heading : "graphic designing",
        text : "We have a unique set of people who excel in creativity as well as experience to implement compelling and influential visual effects on users and viewers of your brand. Regardless of whether it is designing singular or independent design pieces such as a logo, a marketing brochure or a complete promotional strategy contract, our design rangers leave no stone unturned in creating the most excruciating and eye catchy templates. Infographics are in and here to stay, infographics are likely to be more interesting and readable. We have an endless library of resources and stock materials to provide authentic and eccentric designs to each and every client or customer. Our plan is clear and focused on imaginative thinking, pulling out trendy and fun ideas and leaving a powerful imprint with our visual content. Visuals should speak for your website as they are the first impression of your brand. HardCiphers have perfected the art of designing unforgettable logos and other elements",
    },
];


export { BlogPageComponent, BlogPageComponentData};