import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default () => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/howwework">
        How we work
      </a>

      <a className="menu-item" href="/blog">
        Blog
      </a>

      <a className="menu-item" href="/acount">
        Account
      </a>
      <a className="menu-item" href="/viewplans">
        View Plans
      </a>
    </Menu>
  );
};
