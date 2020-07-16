import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';

import Midsection from './midsection';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		{children}
		{/*<Midsection />*/}
		<Footer />
	</div>
);

export default Layout;
