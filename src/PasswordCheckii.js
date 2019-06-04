function password_is_valid(password){
   
  let str = /^(?=.*[a-zA-Z0-9])(?=.{9,}$)/
  let result = str.test(password) 
 
  try {
    if(result == false) 
    throw('invalid password');
    
  } 
  catch (error) {
    console.log('ERROR: ' + error);
 
  }
  return result;
 }
 
 
 
 
 
 function password_is_ok(password) {
   
   let crit1 = /^[A-Za-z0-9]{9,}$/;
   let crit2 = /^(?=.*[A-Z])[A-Z]+/;
   let crit3 = /^(?=.*[a-z])[a-z]+/;
   let crit4 = /^(?=.*[0-9])[0-9]+/;
 
   if (crit1.test(password) === true && crit2.test(password) === true) {
     return 'password is valid';
   }

   else if (crit1.test(password) === true && crit3.test(password) === true) {
     return 'password is valid';
   }

   else if (crit1.test(password) === true && crit4.test(password) === true) {
     return 'password is valid'
   }

    else{
     throw 'password is invalid'
   }
 }