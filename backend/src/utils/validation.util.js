export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  export const validatePhoneNumber=(phoneNumber)=>{
    return /^[0-9]{10}$/.test(phoneNumber);
  }