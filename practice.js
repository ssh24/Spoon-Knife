  var prompt = require('prompt');

  var properties = [
  	{
  		name: 'host'
  	},
  	{
  		name: 'domain'
  	},
    {
      name: 'email'
    },
    {
      name: 'password',
      hidden: true
    }
  ];
  
  prompt.start();
  

  prompt.get(properties, function (err, result) 
  {  		
  		var Client = require('cloudfoundry-client');
 
  		var client = new Client({
  		host:  result.host,
  		domain: result.domain,
  		email: result.email,
  		password: result.password
  		});
  		

  		client.apps.get(function (err, apps) 
  		{
  			console.log('your apps are:', apps);
  		});
  });
  

