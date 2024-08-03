import React from 'react';

const feedbacks = [
  {
    name: 'Jenny Wilson',
    feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger with greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    rating: 5,
  },
  {
    name: 'Dianne Russell',
    feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    rating: 4,
  },
  {
    name: 'Devon Lane',
    feedback: 'Normally wings are wings, but theirs are lean meaty and tender, and they were very well-seasoned.',
    rating: 4,
  },
];

const CustomerFeedback = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg col-span-1">
      <div className="text-xl font-semibold text-white mb-4">Customer's Feedback</div>
      <div className="space-y-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="text-gray-300">
            <div className="flex items-center"><img
            src="https://via.placeholder.com/40" // Replace with actual image URL
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          /> <div className="font-semibold pl-2">{feedback.name}</div></div>
            
            <div className="text-yellow-400">
              {'★'.repeat(feedback.rating)}
              {'☆'.repeat(5 - feedback.rating)}
            </div>
            <div>{feedback.feedback}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
