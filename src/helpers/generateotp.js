async function generateOTP(length) {
    let otp = '';
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10); // generates a random digit from 0-9
    }
    return otp;
  }
  
export default generateOTP