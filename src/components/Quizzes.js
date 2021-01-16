import React from 'react';
import { Link } from 'react-router-dom';
class Quizzes extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="quizzes">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Our Quizzes</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">Enjoy our different quizzes.</p>
                    </div>
                </div>
                    <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/quiz1"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-notebook text-custom"></i>
                            <h4 className="padding-t-15">Books</h4>
                            <h5 className="padding-t-15">Quiz 1</h5>
                            </div></Link>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/quiz2"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-video text-custom"></i>
                            <h4 className="padding-t-15">Film</h4>
                            <h5 className="padding-t-15">Quiz 2</h5>
                            </div></Link>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/quiz3"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-music text-custom"></i>
                            <h4 className="padding-t-15">Music</h4>
                            <h5 className="padding-t-15">Quiz 3</h5>
                            </div></Link>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/quiz4"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-smile text-custom"></i>
                            <h4 className="padding-t-15">Musicals & Theaters</h4>
                            <h5 className="padding-t-15">Quiz 4</h5>
                            </div></Link>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/quiz5"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-video text-custom"></i>
                            <h4 className="padding-t-15">Television</h4>
                            <h5 className="padding-t-15">Quiz 5</h5>
                            </div></Link>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                    <Link to="/quiz6"><div className="services-box text-center hover-effect">
                            <i className="pe-7s-joy text-custom"></i>
                            <h4 className="padding-t-15">Video Games</h4>
                            <h5 className="padding-t-15">Quiz 6</h5>
                            </div></Link>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Quizzes;