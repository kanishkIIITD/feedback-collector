const AdminView = ({ feedbacks }) => {
  if (!feedbacks.length)
    return (
      <p className="mt-4 text-center">No feedback submissions available.</p>
    );

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500 ease-in-out">
      {feedbacks.map((feedback) => (
        <div
          key={feedback._id}
          className="bg-white dark:bg-gray-700 p-4 rounded shadow transform hover:scale-105 transition-transform duration-300"
        >
          <h3 className="font-bold">{feedback.fullName}</h3>
          <p className="italic text-sm">{feedback.email}</p>
          <p className="mt-2">{feedback.message}</p>
          {feedback.timestamp && (
            <p className="text-xs text-gray-500 mt-1">
              {new Date(feedback.timestamp).toLocaleString()}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminView;
