import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-experience' data-section='timeline'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>highlights</span>
                <h2 className='colorlib-heading animate-box'>Timeline</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='timeline-centered'>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-3'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Freelance React Developer{' '}
                          <span>July 2019 - present</span>
                        </h2>
                        <p>
                          Specializing in feature development for MERN stack
                          applications and WordPress sites, my projects include
                          building a corporate risk assessment survey in
                          React/Redux, implementing an API in Node.js and
                          Express to CRUD legal enforcement actions against
                          businesses, and building and styling custom landing
                          pages for a an advertising agency.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-2'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Full Stack Developer at Gazelle/EcoATM{' '}
                          <span>March 2017 - July 2019</span>
                        </h2>
                        <p>
                          As a developer at Gazelle, I worked with multiple
                          technologies across the stack, including Rails and SQL
                          to add new products to databases; QraphQL to build
                          descriptive queries to our CDN; and React plus Redux
                          to manage data stores and complex user flows (like
                          implementing a user checkout flow). I also built
                          third-party integrations with Salesforce and Google
                          Analytics to track customer behavior and styled custom
                          landing pages for business promotions using bootstrap
                          and flex.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInTop'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-4'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Full Stack Developer at MentorHQ
                          <span> April 2014 - August 2016</span>
                        </h2>
                        <p>
                          At Mentor, I built a feature that enabled employees to
                          draw and record notes on top of training videos
                          utilizing an HTML canvas overlay and a script that
                          perfectly synced drawing playback with video. I also
                          designed Rails model associations and data migrations
                          and built an encoding microservice with Sinatra to
                          process video uploads (encoder models to process
                          content (e.g., converting AVI to MP4 or converting MKV
                          to MP4) using DIVx technology.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-5'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Extern at BetaNYC<span> February - April 2014</span>
                        </h2>
                        <p>
                          With a team of Flatiron School externs, I built a
                          timeline of open data milestones in New York City
                          utilizing Rails, Angular and D3 technologies to
                          further BetaNYC's mission of improving lives in New
                          York through technology.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className='timeline-entry begin animate-box'
                    data-animate-effect='fadeInBottom'
                  >
                    <div className='timeline-entry-inner'>
                      <div className='timeline-icon color-6'>
                        <i className='icon-pen2' />
                      </div>
                      <div className='timeline-label'>
                        <h2>
                          Flatiron Fellow at Flatiron School
                          <span> October 2013 - March 2014 </span>
                        </h2>
                        <p>
                          Out of a pool of hundreds of applicants, I was awarded
                          the NYC Flatiron School Felloship to learn Ruby on
                          Rails, Javascript/Angular, and CSS over a six month
                          period with 27 other students. I also learned the
                          value of collaborating in teams to brainstorm features
                          and build engaging applications with open data.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
