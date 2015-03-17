module.exports = {
	server : {
		ip: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
		port: process.env.OPENSHIFT_NODEJS_PORT || 8080
	},
	db: {
		//conn: process.env.OPENSHIFT_MONGODB_DB_URL + '/socialscoreboard'
		conn: 'mongodb://user:123456@ds035260.mongolab.com:35260/socialscoreboard'
	},
	ids: {
		google: {
			client_id:'750468344375-q317aj7dcatqtr3i5ieuvleunhd5jkrl.apps.googleusercontent.com',
			client_secret: 'OH7DKd-PZyuMajSBaGK_wzl1',
			callback_url: 'http://socialscoreboard-dawzayas.rhcloud.com/auth/oauth2callback',
			scopes: ['https://www.googleapis.com/auth/userinfo.profile']
		}
	},
	jwtSecret: 'very insecure secret'
};
