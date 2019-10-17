function password_is_valid(password){
   
  let str1 = /^(?=.*[a-z0-9])(?=.{9,}$)/
  let str2 = /^(?=.*[A-Z0-9])(?=.{9,}$)/

  if(password == ""){
    throw new Error("please enter a password!");
  }

  if(str1.test(password) == true || str2.test(password) == true){
    return true;
  }  
  else{
    throw new Error("please enter a VALID password!");
  }
 } 
 
 
 function password_is_ok(password) {
   
   let criteria1 = /^[A-Za-z0-9]{9,}$/;
   let criteria2 = /^(?=.*[A-Z])[A-Z]+/;
   let criteria3 = /^(?=.*[a-z])[a-z]+/;
   let criteria4 = /^(?=.*[0-9])[0-9]+/;
 
   if (criteria1.test(password) === true && criteria2.test(password) === true) {
     return true;
   }

   else if (criteria1.test(password) === true && criteria3.test(password) === true) {
     return true;
   }

   else if (criteria1.test(password) === true && criteria4.test(password) === true) {
     return true;
   }

    else{
     return false;
   }
 }

 //console.log(password_is_ok('lisamabe123'));
