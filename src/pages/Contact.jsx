import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", question: "" });
  };

  return (
    <div className="max-w-lg mx-auto p-6  shadow-lg rounded-xl mt-6">
      <h2 className="text-2xl font-bold text-center mb-4 text-indigo-500 sm:text-[30px]">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white sm:text-xl">Name</label>
          <input className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent text-white" type="text" name="name" value={formData.name}  onChange={handleChange}  required/>
        </div>
        <div>
          <label className="block text-sm font-medium text-white  sm:text-xl">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-white sm:text-xl">Ask a Question</label>
          <textarea name="question" value={formData.question} onChange={handleChange} className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-md bg-transparent " rows="4" required ></textarea>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition" > Submit </button>
      </form>
    </div>
  );
};

export default Contact;
