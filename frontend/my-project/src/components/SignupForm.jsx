import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualifications: '',
    jobPreferences: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('qualifications', formData.qualifications);
    data.append('jobPreferences', formData.jobPreferences);
    data.append('resume', formData.resume);

    try {
      // Uncomment and update the following line to handle form submission with your backend
      // const res = await axios.post('/api/users', data);
      alert('Signup successful!');
    } catch (err) {
      console.error(err);
      alert('There was an error submitting your information.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center"> </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Phone:</label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Qualifications:</label>
        <input
          type="text"
          name="qualifications"
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Job Preferences:</label>
        <input
          type="text"
          name="jobPreferences"
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Resume:</label>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
