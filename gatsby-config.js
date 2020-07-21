const path = require('path')

module.exports = {
	siteMetadata: {
		title: 'Fake News Site',
		author: 'Jere Xu',
		imageUrl: 'xxx',
		description: 'This is the central hub for my stuffs.',
		keywords: `Web developer, Growth engineer, growth hacking, JavaScript, data analytics, content marketing`,
		twitter: 'https://twitter.com/jtxxuu',
		github: `https://github.com/jerrytigerxu`,
		medium: 'https://medium.com/@jeretigerxu',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.jeretigerxu.me`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'gen_articles',
				path: `${__dirname}/src/content`
			}
		},
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
		{
			resolve: '@fs/gatsby-plugin-drive',
	    options: {
	      folderId: '1VNrFmJFyi2r-RHALFB53RHmnuVftDsCN',
	      keyFile: path.resolve(__dirname, 'api-project-177757482859-97bd7d1ab460.json'),
	      destination: path.join(__dirname, 'src/content'),
	      exportGDocs: true,
	      exportMimeType: 'text/html'
	    }
		},
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
