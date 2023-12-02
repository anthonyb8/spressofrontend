import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import api from '../services/apiservice';

function CoffeeGrid({ filters }) {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    // Function to fetch coffee shops based on filters using Axios
    const fetchData = async () => {
      try {
        const response = await api.get('/api/coffeeshops/', {
          headers: {
            Authorization: `Token ${authToken}` // Include the auth token in the request headers
          },
          params: filters
        });
        setCoffeeShops(response.data);
      } catch (error) {
        console.error('Error fetching coffee shops:', error);
      }
    };

    fetchData();
  }, [filters]); // Dependency array: the effect runs when filters change

  console.log(coffeeShops);

  return (
    <div className="w-2/3 p-4 dark:bg-darkBackground overflow-auto" style={{ height: 'calc(100vh - 4rem)' }}>
      <div className="grid grid-cols-3 gap-4">
        {coffeeShops.map((shop) => (
          <Link to={`/shop/${shop.id}`} key={shop.id} className="no-underline">
            <div className="flex flex-col rounded shadow">
                {shop.images && shop.images.length > 0 && (
                  <img 
                    src={shop.images[0].picture} // Access the URL of the first image
                    alt={shop.name} // Use the shop's name as the alt text
                    className="w-full h-48 object-cover rounded-t" 
                  />
                )}
              <div className="bg-gray-600 p-4 rounded-b text-white">
                <h3 className="mt-2">{shop.name}</h3>
                <p>{shop.details}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CoffeeGrid;
