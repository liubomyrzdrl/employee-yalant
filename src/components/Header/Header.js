import React from 'react';
import s from './Header.module.scss';

function Header() {
    return (
      <header className={s.header}>
        <div className={s.header__logo}>
          <img src="img/employee-icon-png-22.jpg" alt="" />
        </div>
        <h2>Employees</h2>  
      </header>
    );
}
 

export default Header;