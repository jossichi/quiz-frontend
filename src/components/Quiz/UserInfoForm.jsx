import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/UserInfoForm.css';

function UserInfoForm() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegexLocal = /^0\d{9}$/;     
  const phoneRegexInternational = /^\+84\d{9}$/; 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (dob.length !== 4 || isNaN(dob)) {
      setError('Năm sinh không hợp lệ.');
      return;
    }
  
    if (!emailRegex.test(email)) {
      setError('Địa chỉ email không hợp lệ.');
      return;
    }
  
    if (!phoneRegexLocal.test(phone) && !phoneRegexInternational.test(phone)) {
      setError('Số điện thoại không hợp lệ.');
      return;
    }
  
    try {
      const formData = {
        name,
        dob,
        phone,
        email,
        school
      };
  
      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem('userInfo', JSON.stringify(formData));
      
      // Gửi dữ liệu đến backend
      await axios.post('https://my-node-backend-production.up.railway.app/submit', formData);
      
      // Chuyển hướng đến trang quiz
      navigate('/quiz');
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while saving data.');
    }
  };
  

  return (
    <div className='container'>
      <h1>NHẬP THÔNG TIN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <b>Họ và Tên</b>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          <b>Năm Sinh</b>
          <input 
            type='number' 
            value={dob} 
            onChange={(e) => setDob(e.target.value)} 
            required 
            min='1900' 
            max={new Date().getFullYear()} 
            placeholder='Nhập năm sinh'
          />
        </label>
        <label>
          <b>Số Điện Thoại</b>
          <input 
            type='tel' 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
            placeholder='Nhập số điện thoại' 
          />
        </label>
        
        <label>
          <b>Địa Chỉ Email</b>
          <input 
            type='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder='Nhập địa chỉ email' 
          />
        </label>

        <label>
          <b>Trường Học</b>
          <input type='text' value={school} onChange={(e) => setSchool(e.target.value)} required />
        </label>
        
        <button type='submit' className='btnsubmit'>Submit</button>
      </form>
      {error && <p className='error'>{error}</p>}
    </div>
  );
}

export default UserInfoForm;
