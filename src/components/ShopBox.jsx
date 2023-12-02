import React, { useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import api from  '../services/apiservice';

function ShopBox() {
    const { authToken } = useContext(AuthContext);
    const { shopId } = useParams();
    const [shopDetails, setShopDetails] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    useEffect(() => {
        const fetchShopDetails = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await api.get(`/api/coffeeshops/${shopId}`, {
                    headers: {
                        Authorization: `Token ${authToken}` // Include the auth token in the request headers
                    }});
                setShopDetails(response.data);
            } catch (error) {
                console.error('Error fetching shop details:', error);
            }
        };

        if (shopId) {
            fetchShopDetails();
        }
    }, [shopId]);

    const nextImage = () => {
        // Update to handle dynamic images from the fetched data
    };

    const prevImage = () => {
        // Update to handle dynamic images from the fetched data
    };

    if (!shopDetails) {
        return <div>Loading...</div>; // or any other loading state representation
    }

    return (
      <div className="flex justify-center pt-16 pb-4 min-h-screen">
        <div className="bg-gray-600 text-white rounded shadow-lg w-full max-w-4xl overflow-auto">
          <div className="relative">
            {/* <img src={shopImages[currentImageIndex]} alt={shopDetails.name} className="w-full h-96 object-cover rounded-t" /> Increased image height */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2" onClick={prevImage}>&lt;</button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2" onClick={nextImage}>&gt;</button>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold">{shopDetails.name}</h1>
            <p className="text-lg mt-1">{`${shopDetails.city}, ${shopDetails.state}`}</p>
            <p className="mt-2">{shopDetails.contributorDescription}</p>
            <p className="mt-2 font-semibold">ZYx review:</p>
            <p className="mt-1">{shopDetails.zyxReview}</p>
            
          </div>
        </div>
      </div>
    );
  }
  
export default ShopBox;
  