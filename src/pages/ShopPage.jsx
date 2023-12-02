import React from 'react';
import ShopBox from '../components/ShopBox.jsx';

function ShopPage() {
  return (
    <div className="dark bg-darkBackground overflow-hidden">
      <div style={{ height: 'calc(100vh - 4rem)' }}> {/* Adjust the height as needed */}
        <ShopBox />
      </div>
    </div>
  );
}

export default ShopPage;