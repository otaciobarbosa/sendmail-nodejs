var request = require('request');
var options = {
  'method': 'POST',
  'url': 'localhost:3000/mail',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "mailfrom": "email@site.com.br",
    "mailto": "meuemail@site.com.br",
    "mailsubject": "E-mail Teste",
    "mailtext": "Corpo do e-mail teste"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
