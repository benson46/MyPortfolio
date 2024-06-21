

function SendMail(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  if(name == '' || email == '' || subject == '' || message == ''){
    alert('fill empty blanks');
    return;
  }

  var templateParams = {
    name: name,
    email: email,
    subject: subject,
    message: message
 }

 emailjs.send('service_yohhyps', 'template_06vjzme', templateParams).then(
(response) => {
  console.log('SUCCESS!', response.status, response.text);
  alert('success');
},
(error) => {
  console.log('FAILED...', error);
  alert('failed');
},
);

};