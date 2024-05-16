import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser } from '../components/store/slice/UserSlice';


const Footer = () => {
    const dispatch = useDispatch()

    const clearAllUser = () => {
        dispatch(deleteUser());
    };

    return (
        <div>
            <button className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => clearAllUser()}>Clear All</button>
        </div>
    )
}

export default Footer
