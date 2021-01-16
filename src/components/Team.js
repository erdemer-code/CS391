import React from 'react';

class Team extends React.Component {
  render() {
  	return (
     <section className="section pt-4" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Group 6</h1>
                        <div className="section-title-border margin-t-20"></div>
                    </div>
                </div>
                <div className="row margin-t-50">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center hover-effect">
                            <h4 className="team-name">Mustafa Barış Çamlı</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center hover-effect">
                            <h4 className="team-name">Berkay Çelik</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center hover-effect">
                            <h4 className="team-name">Emre Çelik</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="team-box text-center hover-effect">
                            <h4 className="team-name">İsmail Erdem Er</h4>
                        </div>
                    </div>
                   

                </div>
            </div>
        </section>
  	);
  }
}
export default Team;