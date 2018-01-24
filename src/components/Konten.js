import React from 'react';

export default function() {
  return (
    <section className="blog-area section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <div className="single-post post-style-1">
                <div className="blog-image"><img src="images/marion-michele-330691.jpg" alt="Blog Image"/></div>
                <a className="avatar" href="#"><img src="images/icons8-team-355979.jpg" alt="Profile Image"/></a>
                <div className="blog-info">
                  <h4 className="title"><a href="#"><b>How Did Van Gogh's Turbulent Mind Depict One of the Most Complex
                  Concepts in Physics?</b></a></h4>
                  <ul className="post-footer">
                    <li><a href="#"><i className="ion-heart"></i>57</a></li>
                    <li><a href="#"><i className="ion-chatbubble"></i>6</a></li>
                    <li><a href="#"><i className="ion-eye"></i>138</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="load-more-btn" href=""><b>LOAD MORE</b></a>
      </div>
    </section>
  )
}
