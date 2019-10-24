import React from "react";

/* The Header Component */
class Header extends React.Component {
  render() {
    const { title, username } = this.props;
    return (
      <div id="web-header">
        <h1 id="header-title">{title}</h1>
        <a id="header-username" href="Javascript: void(0)">
          {username}
        </a>
      </div>
    );
  }
}

export default Header;
