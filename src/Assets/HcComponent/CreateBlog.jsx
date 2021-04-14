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
                                <div className="col-md-8 form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>

                                <div className="col-md-8 form-group">
                                    <label htmlFor="pswrd">Password</label>
                                    <input type="password" className="form-control" id="emal" aria-describedby="emal" placeholder="Enter your email address" />
                                </div>

                                <div className="col-md-12 form-group">
                                    <label htmlFor="subject">Image Upload</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
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