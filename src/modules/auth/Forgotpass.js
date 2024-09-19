import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Forgotpass() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isNewPasswordSet, setIsNewPasswordSet] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSendOtp = () => {
        // Here you would typically send an OTP to the user's email address
        // For simplicity, let's just simulate sending an OTP
        // Replace this with your actual logic to send OTP
        // For demonstration, I'm just logging the OTP to the console
        const generatedOtp = generateOTP(); // Function to generate OTP
        console.log('OTP:', generatedOtp);
        setIsOtpSent(true);
    };

    const handleVerifyOtp = () => {
        // Here you would verify the entered OTP
        // For simplicity, let's just assume OTP is correct
        setIsNewPasswordSet(true);
    };

    const handleSetNewPassword = () => {
        // Here you would typically set the new password for the user
        // For simplicity, let's just log a success message
        console.log('New password set successfully');
        // After setting new password, navigate to login page
        navigate('/userlogin');
    };

    const generateOTP = () => {
        // Function to generate a random 6-digit OTP
        return Math.floor(100000 + Math.random() * 900000);
    };

    return (
        <div className='container-fluid'style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(mainbg.png)',backgroundSize:'100% 100%',height:'100vh'}}>
        <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4' style={{marginTop:'100px',backgroundColor:'white',height:'auto'}}>
                    <div class="mb-3">
                        <h2>Forgot Password</h2>
                        {!isOtpSent ? (
                            <div>
                                <label>Email:</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <button onClick={handleSendOtp}>Send OTP</button>
                            </div>
                        ) : !isNewPasswordSet ? (
                            <div class="mb-3">
                                <label>OTP:</label>
                                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
                                <button onClick={handleVerifyOtp}>Verify OTP</button>
                            </div>
                        ) : (
                            <div class="col-md-4">
                                <label>New Password:</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label>Confirm Password:</label>
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <button onClick={handleSetNewPassword}>Set New Password</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='col-md-4'></div>

            </div>
        </div>
    );
}

export default Forgotpass;
