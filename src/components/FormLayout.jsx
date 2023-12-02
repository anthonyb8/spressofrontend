// FormLayout.js
import React from 'react';

const FormLayout = ({ title, children }) => {
    return (
        <div className="bg-darkBackground text-black max-w-sm mx-auto my-10 p-8 border border-gray-300 shadow-lg rounded-lg">
            <div className="form-container">
                {title && <h2 className="text-center text-2xl  mb-6">{title}</h2>}
                {children}
            </div>
        </div>
    );
};

export default FormLayout;
