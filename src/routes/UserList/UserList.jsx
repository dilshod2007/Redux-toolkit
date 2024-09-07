import React from 'react';
import { deleteStudent } from '../../redux/user-slice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleDelete = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      dispatch(deleteStudent(index));
      toast.success('Foydalanuvchi muvaffaqiyatli o\'chirildi!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='flex justify-center items-center flex-col mt-10'>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-wide">Guruhdagilar Ro'yxati</h2>

      <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-300 w-full max-w-4xl bg-white">
        <table className="min-w-full bg-white rounded-2xl">
          <thead>
            <tr className="bg-gradient-to-r from-purple-700 to-blue-600 text-white text-xl font-bold uppercase tracking-wider">
              <th className="py-4 px-8 text-left rounded-tl-2xl">Ism</th>
              <th className="py-4 px-8 text-left">Yosh</th>
              <th className="py-4 px-8 text-left">Email</th>
              <th className="py-4 px-8 text-left rounded-tr-2xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.email} className="border-b border-gray-200 transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-[1.02]">
                <td className="py-4 px-8 text-gray-900 font-medium">{user.name}</td>
                <td className="py-4 px-8 text-gray-900">{user.age}</td>
                <td className="py-4 px-8 text-gray-900">{user.email}</td>
                <td className="py-4 px-8">
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/">
        <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 transition-all duration-500 transform hover:scale-105">
          Add User
        </button>
      </Link>

      <ToastContainer />
    </div>
  );
};

export default UserList;
