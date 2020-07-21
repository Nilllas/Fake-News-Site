import React from 'react';

import "../styles/index.sass";
import Helmet from './helmet';

import Footer from './footer';
import Navbar from './navbar';

const Work_Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		{children}
		<Footer />
	</div>
);

export default Work_Layout;
