import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-light bg-dark md-5'>
        <div className='container'>
          <div className='navbar-header'>
            <Link
              to='/'
              className='nvbar-brand text-white text-lg brand-text'
              style={{ textDecoration: 'none' }}
            >
              MovieSeriesInfo
            </Link>
          </div>
          <ul className='navbar-nav ml-auto text-light d-inline-block'>
            <li className='nav-item d-inline-block mr-4'>
              <i class='fa fa-imdb fa-5x'></i>
            </li>
            <li className='nav-item d-inline-block mr-4'>
              <i class='fab fa-react fa-5x'></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
