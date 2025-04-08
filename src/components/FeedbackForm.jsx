import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup.string().required("Feedback message cannot be empty"),
});

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        // Show success toast
        toast.success("Feedback submitted successfully!");
        reset();
      } else {
        // Show error toast if API returns an error
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      // Show error toast on network or unexpected errors
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white dark:bg-gray-700 p-6 rounded shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="fullName" className="block mb-2">
          Full Name
        </label>
        <input
          id="fullName"
          {...register("fullName")}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring dark:text-black"
          placeholder="Kanishk Singh"
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring dark:text-black"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">
          Feedback
        </label>
        <textarea
          id="message"
          rows="4"
          {...register("message")}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring dark:text-black"
          placeholder="Your feedback..."
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 bg-green-500 text-white rounded transition duration-300 hover:bg-green-600"
      >
        {isSubmitting ? "Submitting..." : "Submit Feedback"}
      </button>
    </form>
  );
};

export default FeedbackForm;
