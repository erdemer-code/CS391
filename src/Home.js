import React from 'react';
import Navbar from './components/Navbar';
import Quizzes from './components/Quizzes';
import Descriptions from './components/Descriptions';
import Team from './components/Team';
import Footer from './components/Footer';
import Aux from './hoc/Aux_';

class Home extends React.Component {
  render() {

    var bkg1 = {
        backgroundImage: 'url(images/wave-shape/wave1.png)',
      };
      var bkg2 = {
        backgroundImage: 'url(images/wave-shape/wave2.png)',
      };
      var bkg3 = {
        backgroundImage: 'url(images/wave-shape/wave3.png)',
      };
  
  	return (
         <Aux>
                {/* Navbar Component*/}
                <Navbar />

                <section className="section bg-home home-half" id="home" data-image-src="images/26.jpg">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                         <img src="images/choose.png" width="40%"></img>
                                        <p className="padding-t-15 home-desc">Makes learning smarter.</p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wave-effect wave-anim">
                        <div className="waves-shape shape-one">
                            <div className="wave wave-one" style={bkg1}></div>
                        </div>
                        <div className="waves-shape shape-two">
                            <div className="wave wave-two" style={bkg2}></div>
                        </div>
                        <div className="waves-shape shape-three">
                            <div className="wave wave-three" style={bkg3}></div>
                        </div>
                    </div>
               </section>

                {/* Quizzes Component*/}
                <Quizzes />
                
                {/* Descriptions Component*/}
                <Descriptions />

                {/* Team Component*/}
                <Team />

                {/* Footer Component*/}
                <Footer />

        </Aux>
  	);
  }
}

export default Home;