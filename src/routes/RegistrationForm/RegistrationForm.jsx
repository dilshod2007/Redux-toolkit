import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addUser } from "../../redux/user-slice";
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email, age }));  // Redux store'ga foydalanuvchini qo'shish
    setName('');
    setEmail('');
    setAge('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast.success('Muvaffaqiyatli ro‘yxatdan o‘tildi!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate('/list');  // Ro'yxat sahifasiga o'tish
    }, 2000);
  };

  return (
    <>
      <form className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto mt-10 mt-[100px]" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6 text-center">Ro‘yxatdan o‘tish</h1>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Ism:</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out shadow-sm"
            placeholder="Ismingizni kiriting"
            value={name}  // Input maydonini qiymati bilan bog'lash
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">Yosh:</label>
            <input
              type="number"
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out shadow-sm'
              placeholder="Yoshingizni kiriting"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out shadow-sm"
            placeholder="Emailingizni kiriting"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-bold py-3 rounded-md shadow-lg hover:shadow-2xl hover:bg-gradient-to-l transition-all duration-500 transform ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
            }`}
        >
          {loading ? (
            <span className="flex items-center justify-center text-white">
              <svg
                className="animate-spin mr-2 h-5 w-5 text-white ml-[-0px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Yuklanmoqda...
            </span>
          ) : (
            "Ro'yxatdan o'tish"
          )}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default RegistrationForm;
