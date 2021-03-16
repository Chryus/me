import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-about' data-section='about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-12'>
                <div
                  className='row row-bottom-padded-sm animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='col-md-12'>
                    <div className='about-desc'>
                      <span className='heading-meta'>About Me</span>
                      <h2 className='colorlib-heading'>Who Am I?</h2>
                      <p>
                        A Rails and JS developer since attending Flatiron School
                        in 2014, I build dynamic features for both business and
                        consumer users. I love to code and thrive working with
                        project managers, designers, and other developers in an
                        agile environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='colorlib-about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>What I do?</span>
                <h2 className='colorlib-heading'>
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className='row row-pt-md'>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-1'>
                  <span className='icon'>
                    <i className='icon-bulb' />
                  </span>
                  <div className='desc'>
                    <h3>Web Development </h3>
                    <p>
                      I build and style full-stack features for Rails,
                      React/Redux, and MERN applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-3'>
                  <span className='icon'>
                    <i className='icon-phone3' />
                  </span>
                  <div className='desc'>
                    <h3>Sprint Planning</h3>
                    <p>
                      I identify development opportunities and write Jira
                      tickets with clear scopes and acceptance criteria.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-5'>
                  <span className='icon'>
                    <i className='icon-data' />
                  </span>
                  <div className='desc'>
                    <h3>Continous Integration</h3>
                    <p>
                      I manage and author deployment plans, staging branches,
                      and CircleCi configurations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
