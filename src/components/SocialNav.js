import React, { Component } from "react";
import "./SocialNav.css";

const FontAwesome = require("react-fontawesome");

export default class SocialNav extends Component {
  render() {
    return (
      <div className="socialNav model-0">
        <ul className="socialNav">
          <li className="twitter">
            <a href="https://twitter.com/yawwnyawwn">
              <FontAwesome name="twitter" />
            </a>
          </li>
          <li className="facebook">
            <a href="https://www.facebook.com/yawwning/">
              <FontAwesome name="facebook" />
            </a>
          </li>
          <li className="instagram fa.fa-soundcloud">
            <a href="https://soundcloud.com/yawwning">
              <FontAwesome name="soundcloud" />
            </a>
          </li>
          <li className="instagram fa.fa-instagram">
            <a href="https://instagram.com/yawwn_">
              <FontAwesome name="instagram" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
