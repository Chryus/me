import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Graffito</a></h3>
											<span>Heatmap of graffiti in NYC.</span>
											<p className="icon">
                        <span><a href="http://graffito.herokuapp.com/#/home"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Game of Life</a></h3>
											<span>Interactive version of the classic game.</span>
											<p className="icon">
												<span><a href="https://game-of-life-is-real-tho.herokuapp.com/"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Open Data Timeline</a></h3>
											<span>D3 visualization of open data milestones in NYC.</span>
											<p className="icon">
												<span><a href="http://www.opengovtimeline.com/"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
