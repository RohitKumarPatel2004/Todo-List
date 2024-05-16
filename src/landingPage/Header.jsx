import React, { useState } from 'react'
import { addUser} from '../components/store/slice/UserSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';



const Header = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error ,setError]=useState('')


    const addUser1 = () => {
        setLoading(true); 
        axios.get("https://jsonplaceholder.typicode.com/comments")
          .then(response => {
            const users = response.data[count];
            if (users) {
              const name = users.email;
              dispatch(addUser(name));
              setCount(prevcount => prevcount + 1);
            } else {
                setError("no more data");
            }
            setLoading(false); 
          })
          .catch(error => {
            setError('Error fetching data. Please try again.')
            setLoading(false); 
          });
      };

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className="text-2xl mb-4 ">List of users</h2>
        <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={addUser1} disabled={error==="no more data"}>
          {loading ? 'Adding...' : 'Add user'}
        </button>
      </div>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}

export default Header
