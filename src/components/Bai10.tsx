import React, { useState, memo } from 'react';

// Component Item được memo để tránh re-render không cần thiết
const ListItem = memo(({ index, isSelected, onSelect }) => {
  // Log để theo dõi re-render (chỉ để demo)
  console.log(`Item ${index} rendered`);
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: isSelected ? '#dbeafe' : '#ffffff',
      borderColor: isSelected ? '#93c5fd' : '#e5e7eb',
      transition: 'all 0.2s ease'
    }}
    onMouseEnter={(e) => {
      if (!isSelected) e.target.style.backgroundColor = '#f9fafb';
    }}
    onMouseLeave={(e) => {
      if (!isSelected) e.target.style.backgroundColor = '#ffffff';
    }}>
      <span style={{ fontWeight: '500' }}>Item #{index}</span>
      <button
        onClick={() => onSelect(index)}
        style={{
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: isSelected ? '#3b82f6' : '#e5e7eb',
          color: isSelected ? '#ffffff' : '#374151',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          if (!isSelected) {
            e.target.style.backgroundColor = '#d1d5db';
          }
        }}
        onMouseLeave={(e) => {
          if (!isSelected) {
            e.target.style.backgroundColor = '#e5e7eb';
          }
        }}
      >
        {isSelected ? 'Đã chọn' : 'Chọn'}
      </button>
    </div>
  );
});

const OptimizedItemList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Tạo array 100 items
  const items = Array.from({ length: 100 }, (_, i) => i + 1);
  
  const handleItemSelect = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Danh sách 100 Item - Tối ưu Re-render
      </h1>
      
      {selectedItem && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            Đang chọn: <strong>Item #{selectedItem}</strong>
          </p>
        </div>
      )}
      
      <div className="border border-gray-300 rounded-lg max-h-96 overflow-y-auto">
        {items.map((item) => (
          <ListItem
            key={item}
            index={item}
            isSelected={selectedItem === item}
            onSelect={handleItemSelect}
          />
        ))}
      </div>
      
      
    </div>
  );
};

export default OptimizedItemList;