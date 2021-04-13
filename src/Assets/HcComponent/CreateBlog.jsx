import React from "react";
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const CreateBlogPage = () =>{
    return(
        <>
            <section className="container-fluid" id="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-4">
                            <h2>Create a Blog </h2>
                            <form className="row mb-5">
                                <div className="col-md-6 form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>

                                <div className="col-md-6 form-group">
                                    <label htmlFor="emal">Email address</label>
                                    <input type="email" className="form-control" id="emal" aria-describedby="emal" placeholder="Enter your email address" />
                                </div>

                                <div className="col-md-12 form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject" placeholder="Enter your subject" />
                                </div>

                                <div className="col-md-12 form-group">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea className="form-control" id="comment" aria-describedby="comment" rows="8" placeholder="Enter your comment" />
                                </div>

                                <div className="col-md-12 form-action">
                                    <button type="submit" className="btn-submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default CreateBlogPage;