
 export const validation = userLogin=> {
  let    isValid =(true)
    console.log(userLogin)
  
    
    const errors = {};


    if(!userLogin.name){
        errors.name = "name is required";

    }
     if (!userLogin.email){
        errors.email = "email is required "
    }
    // else if (userLogin.email !=  /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/){
    //     errors.email = "please type correct email"

    // }
    if (typeof userLogin["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(userLogin["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }

      if(!userLogin.password){
        errors.password = "password is required"
    }
    return errors;
};