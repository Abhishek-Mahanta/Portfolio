import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
     toast.success('Message sent successfully!', {autoClose: 2000});
  };
  

  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full rounded-3xl border-2 border-white">
        <div className="grid justify-items-center m-10">
          <h1 className="text-5xl text-green-500 mt-10 font-extrabold">Contact Me</h1>
          <h1 className="text-2xl text-white mt-4 font-serif">I'm very happy to help you</h1>
          <form className="mt-10" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-white text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                className="rounded-lg p-3 w-96 border-2 border-gray-300 focus:outline-none focus:border-green-500"
                
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-white text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your e-mail'
                value={formData.email}
                onChange={handleChange}
                className="rounded-lg p-3 w-96 border-2 border-gray-300 focus:outline-none focus:border-green-500"
                
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-white text-lg font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder='Enter the subject'
                value={formData.subject}
                onChange={handleChange}
                className="rounded-lg p-3 w-96 border-2 border-gray-300 focus:outline-none focus:border-green-500"
                
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-white text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder='Enter your message'
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="rounded-lg p-3 w-96 border-2 border-gray-300 focus:outline-none focus:border-green-500"
                
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-green-600 text-white font-bold py-3 px-16 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-600">Send Message</button>
            </div>
            
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default contactus;
