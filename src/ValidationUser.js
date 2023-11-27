export const validateName = (name)=>{
    if(name!== ""){
        return true;
    }else{
        alert("Enter valid username")
    }
}
export const validateEmail = (email)=>{
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(emailPattern.test(email)){
        return true
    }
    else {
        alert("Enter Valid mail")
    }
}
export const validateMnumber = (mnumber)=>{
    const phonePattern = /^[0-9]{10}$/;
    if(phonePattern.test(mnumber)){
        return true
    }else{
        alert("Enter valid mobile number")
    }
}
export const validatePassword=(password)=>{
   if(password.length >= 8){
      return true
   }else{
      alert("Password must be at least 8 characters")
   }
}
export const validateCpassword =(Cpassword, password)=>{
     if(Cpassword===password){
        return true
     }else{
       alert("Passwords do not match")
     }
}
