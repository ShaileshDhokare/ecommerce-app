import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = (props) => {
   const {currentUser} = props;
   return (
      <div className="header">
         <Link to="/" className="Logo-container">
            <Logo className="logo" />
         </Link>
         <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            {currentUser ? (
               <div className="option" onClick={() => auth.signOut()}>
                  Sign Out
               </div>
            ) : (
               <Link className="option" to="/sign-in">Sign in</Link>
            )}
         </div>
      </div>
   )
}

const mapStateToProps = (state) => ({
   currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
