import React from "react";

import "./events.css";

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
      <Event
        className="event"
        date="1st September 2018"
        venue="HIDDEN HERD FESTIVAL 2018 - The Green Door Store"
        location="Brighton, England"
      />
      <br />
      <Event className="event" venue="PAST SHOWS" />
      <Event
        className="event"
        date="15th March 2018"
        venue="Charlie Barnes - Islington Academy 2"
        location="London, England"
      />
      <Event
        className="event"
        date="20th April 2018"
        venue="Remedy - Tooting Tram & Social"
        location="London, England"
      />
      <Event
        className="event"
        date="27th May 2018"
        venue="Canterbury City Sound Project"
        location="Canterbury, England"
      />
      <Event
        className="event"
        date="3rd June 2018"
        venue="Communion - Notting Hill Arts Club"
        location="London, England"
      />
    </div>
  );
};

export default Events;
