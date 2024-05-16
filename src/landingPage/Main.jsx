import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser} from '../components/store/slice/UserSlice';


const Main = () => {
    const dispatch=useDispatch()

    const selector = useSelector((state) => {
        return state.users;
      });

    const deleteOneData = (index) => {
        dispatch(removeUser(index));
      };

  return (
    <div>

<ul className="mt-4">
        {selector.map((data, index) => (
          <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
            <span>{data}</span>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => deleteOneData(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Main
