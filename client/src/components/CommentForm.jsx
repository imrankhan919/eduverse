// UI Only — Comment form component

import { useState } from 'react';

const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Comment submitted! (UI Only)\nName: ${formData.name}\nMessage: ${formData.message}`);
    setFormData({ name: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Add a Comment</h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Your Comment
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow resize-none"
            placeholder="Share your thoughts..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
