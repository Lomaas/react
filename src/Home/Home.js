import React from 'react';
import '../App/App.scss';
import './Home.scss';

import background from '../static/background.jpg';
import form from '../static/form.png';
import sync from '../static/sync.png';
import click from '../static/click.png';
import share from '../static/share.png';

export const Home = () => {
  return (
    <div className="Media-body">
      <div className="Row">
        <div className="Block">
          <h1>Create beautiful invite cards with Pushtrip</h1>
          <div className="Media-body">
            Push trips to your friends. One click booking & payment. Travel more by being straight to the point with Pushtrip.
          </div>
          <button className="btn">
            Get started
          </button>
        </div>
        <div className="Block">
          <img src={ background } />
        </div>
      </div>

      <div className="Home-container">
        <h1 className="Top-header">This is how Pushtrip works</h1>

        <article>
          <img src={ form } />
          <h1>Fill in info</h1>
          <div className="Media-body">
            Fill in info about the trip. Add a beautiful picture to showcase the trip. Where do you want to go? What is the estimated price? Which airport are you going from and where are you landing?
          </div>
        </article>

        <article>
          <img src={ share } />
          <h1>Share the link</h1>
          <div className="Media-body">
             Trigger your friends travel lust by sharing the link. Your friends can easily join and sign up when receiving the link.
          </div>
        </article>

        <article>
          <img src={ click } />
          <h1>Order the trip with just one click</h1>
          <div className="Media-body">
            When signed up and filled in an credit card, you and your friends can order the trip with just one click.
          </div>
        </article>

        <article>
          <img src={ sync } />
          <h1>Stay in sync</h1>
          <div className="Media-body">
            Keep track of the trip details and whos going.
          </div>
        </article>

        <button className="btn">
          Get started
        </button>
      </div>
    </div>
  );
};
