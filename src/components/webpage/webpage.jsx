import './webpage.css';


import woman from '../../assets/images/woman.jpg';
import wordpress from '../../assets/images/wordpress.png';
import adobe from '../../assets/images/adobe.png';
import corporate from '../../assets/images/corporate.jpg';

export function Webpage() {
    return (
        <>

            <div className='container row'>
                <div className='col-lg-2 col-md-11 col-sm-11 elevatework'>
                    <label className='elevate-css'>Elevate Your Work</label><br />
                    <h3 className='learn-css'>Learn. Grow. Succeed</h3><br />
                    <label className='bring-css'>Bring your ideas.
                        Discover your potential.</label><br />
                    <img src={woman} className='womanimg img-fluid'></img><br />
                    <div className='diversity-css'><label>Diversity Drive @<br /><h3>Cognizant</h3></label><br />
                        <button className='btn btn-success'>APPLY NOW <i className="fa fa-caret-right"></i></button>
                    </div>
                </div>
                <div className='col-lg-9 col-md-11 col-sm-11'>
                    <div className='row display'>
                        <div className='col-lg-5 col-md-11 col-sm-11 savedsearches-css'>
                            <label>Saved Searches</label>
                            <div className='row savedcontent-css'>
                                <div className='col-lg-2 col-md-11 col-sm-11'>
                                    <img src={wordpress} className='wordpress-css'></img>
                                </div>
                                <div className='col-lg-10 col-md-11 col-sm-11'>
                                    <label>WordPress Integrator with 2+ Years</label>
                                    <label>Location : Hyderabad</label>
                                </div>
                            </div>
                            <div className='row savedcontent-css'>
                                <div className='col-lg-2 col-md-11 col-sm-11'>
                                    <img src={adobe} className='wordpress-css'></img>
                                </div>
                                <div className='col-lg-10 col-md-11 col-sm-11'>
                                    <label>Sr. Web Designer with Adobe Suite</label>
                                    <label>Location : Mumbai</label>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-11 col-sm-11 savedsearches-css'>
                            <label>Recent Searches</label>
                            <div className='row savedcontent-css'>
                                <div className='col-lg-2 col-md-11 col-sm-11'>
                                    <img src={adobe} className='wordpress-css'></img>
                                </div>
                                <div className='col-lg-10 col-md-11 col-sm-11'>
                                    <label>React Js Developer with Node Js / Javascript</label>
                                    <label>Location : Chennai</label>
                                </div>
                            </div>
                            <div className='row savedcontent-css'>
                                <div className='col-lg-2 col-md-11 col-sm-11'>
                                    <img src={wordpress} className='wordpress-css'></img>
                                </div>
                                <div className='col-lg-10 col-md-11 col-sm-11'>
                                    <label>Business Anylist Programmer with 2 years Exp</label>
                                    <label>Location : Chennai</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='display col-lg-11 col-md-11 col-sm-11 corporateprofile'>
                        <div className='corporateprofile1'>
                            <h4>Corportate Profile</h4><br />
                            <label>*  Give a Make Over TO Corporate Profile</label><br />
                            <label>*  Screen and Video capture software enables users</label><br />
                            <label>*  Choose High Corporate Profile to create your ...</label>
                        </div>
                        <div>
                            <img src={corporate} className='img-fluid corporate-css'></img>
                        </div>
                    </div>
                    <div className='col-lg-11 col-md-11 col-sm-11 userguide'>
                        <h6>User Guide to use the Application Scenarios</h6>
                        <div className='display userguidecontent'>
                            <label className='resume'><b>Resume Highlighter</b>
                                <p>Grab the attention of Employees</p>
                                <button className='buttoncss'><i className="fa fa-thin fa-arrow-right"></i> Read More</button>
                            </label>
                            <label className='resume'><b>Career up Skills</b>
                                <p>Grab the attention of Employees</p>
                                <button className='buttoncss'><i className="fa fa-thin fa-arrow-right"></i> Read More</button>
                            </label>
                            <label className='resume'><b>Create CV</b>
                                <p>Grab the attention of Employees</p>
                                <button className='buttoncss'><i className="fa fa-thin fa-arrow-right"></i> Read More</button>
                            </label>
                            <label className='resume'><b>Coursera</b>
                                <p>Grab the attention of Employees</p>
                                <button className='buttoncss'><i className="fa fa-thin fa-arrow-right"></i> Read More</button>
                            </label>
                            <label className='resume'><b>Learning Point</b>
                                <p>Grab the attention of Employees</p>
                                <button className='buttoncss'><i className="fa fa-thin fa-arrow-right"></i> Read More</button>
                            </label>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
