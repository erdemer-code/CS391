import React from 'react';
import { Link } from 'react-router-dom';

class Descriptions extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-white">Quizzes Help Students Learn</h2>
                        <p className="padding-t-15 home-desc">Cognitive psychology strongly suggests that the act of retrieving information directly helps students learn. This benefit occurs even in the absence of feedback and in the absence of an opportunity to restudy the information. The process of retrieval – bringing the information to mind – actually leads to learning all by itself. What’s more, bringing the information to mind can sometimes improve students’ ability to apply the information in new situations.</p>
                    </div>
                </div>
            </div>
            <div className="bg-pattern-effect">
                <img src="images/bg-pattern.png" alt="" />
            </div>
        </section>
  	);
  }
}
export default Descriptions;