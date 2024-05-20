import React from 'react';

function BackgroundSelection({ onSelect }) {
  const backgroundOptions = [
    { value: 'bright-green', label: 'Bright Green (Natural Grass)' },
    { value: 'dark-green', label: 'Dark Green (Natural Grass)' },
    { value: 'olive-green', label: 'Olive Green (Natural Grass)' },
    { value: 'brownish-green', label: 'Brownish-Green (Natural Grass - Dry)' },
    { value: 'green', label: 'Green (Artificial Turf)' },
    { value: 'blue', label: 'Blue (Artificial Turf)' },
    { value: 'red', label: 'Red (Artificial Turf)' },
    { value: 'purple', label: 'Purple (Artificial Turf)' },
    { value: 'gray', label: 'Gray (Artificial Turf)' },
    { value: 'black', label: 'Black (Artificial Turf)' },
    { value: 'white', label: 'White (Artificial Turf)' },
  ];

  const handleBackgroundSelect = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div className='w-64'>
      <label htmlFor="background" className="block  text-gray-700 font-bold mb-2">Select Background:</label>
      <select id="background" onChange={handleBackgroundSelect} className="border rounded py-2 px-4">
        {backgroundOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default BackgroundSelection;
