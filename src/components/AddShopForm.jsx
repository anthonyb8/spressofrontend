import React, { useState } from 'react';
import FormLayout from './FormLayout'; // Adjust the import path as needed
import api from '../services/apiservice';

function AddShopForm() {
    const [shopDetails, setShopDetails] = useState({
        name: '',
        address: '',
        // ... other fields as needed
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/api/coffeeshops/', shopDetails);
            console.log('Coffee Shop added:', response.data);
        } catch (error) {
            console.error('Error adding coffee shop:', error);
        }
    };

    const handleChange = (event) => {
        setShopDetails({ ...shopDetails, [event.target.name]: event.target.value });
    };

    return (
        <FormLayout title="Add New Coffee Shop">
            <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={shopDetails.name}
                        onChange={handleChange}
                    />
                </div>

                {/* Address Input */}
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={shopDetails.address}
                        onChange={handleChange}
                    />
                </div>

                {/* Additional fields as needed */}

                {/* Submit Button */}
                <div>
                    <button type="submit">Add Shop</button>
                </div>
            </form>
        </FormLayout>
    );
}

export default AddShopForm;
