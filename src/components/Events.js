import React from 'react';

import Logo from './Logo';

import './events.css';

const Event = props => {
  const { className, date, location, venue, link } = props;

  return (
    <div className={`quote ${className}`}>
      <h2>{date}</h2>
      <h2>{venue}</h2>
      <h3>{location}</h3>
      {link && <a href={link}>More Information</a>}
    </div>
  );
};

const Events = props => {
  return (
    <div className="events">
      <h2 className="title">
        <Logo colour="black" />
      </h2>

      <Event
        className="event"
        date="1st September 2018"
        venue="HIDDEN HERD FESTIVAL 2018 - The Green Door Store"
        location="Brighton, England"
      />
      <Event
        className="event"
        date="20th September 2018"
        venue="Margot and Friends - The Five Bells"
        location="New Cross, London"
      />
    </div>
  );
};

export default Events;
