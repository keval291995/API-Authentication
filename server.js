var express = require('express');
var app = express();

const Data = {
  'ram@gmail.com':{'name': 'ram', 'email': 'ram@gmail.com', 'password': 'passsword'},
  'sham@gmail.com':{'name': 'sham', 'email': 'sham@gmail.com', 'password': 'passsword'},
  'paul@gmail.com':{'name': 'paul', 'email': 'paul@gmail.com', 'password': 'passsword'}
};

app.use(express.static('stact'));

app.get('/login', (req,res) => {
	const result = req.query;
	const mail = result.mail;
	const pass = result.pass;
	//Validating email and password
	if(!Data[mail] || (Data[mail].password) != pass){
		res.send(false);
	} else{
		res.send(true);
	}
});

app.post('/create', (req,res) => {
	const result2 = req.query;
	const email = result2.mail;
	const password = result2.pass;
	const name = result2.name;
	//Checking for already existing user
	if(Data[email]){
		res.send(false);
	} else {
		Data[email] = { 'name':name, 
	             'email':email, 
	             'password': password
	           };
		res.send(true);
	}
});

app.post('/reset', (req,res) => {
	const result3 = req.query;
	const email2 = result3.mail;
	const password2 = result3.opass;
	const newpass = result3.npass;
	//Verifying the user
	if(Data[email2] && (Data[email2].password) == password2){
		const val = Data[email2];
		val.password = newpass;
		res.send(true);
	} else {
		res.send(false);
	}
	
});

app.get('/refer', (req,res) => {
	res.send(Data);
});

app.listen(3000);