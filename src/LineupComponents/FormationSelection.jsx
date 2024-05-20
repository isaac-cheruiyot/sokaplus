import React from 'react';

function FormationSelection({ onSelect }) {
  const formations = [
    { value: '4-4-2', label: '4-4-2' },
    { value: '4-3-3', label: '4-3-3' },
    { value: '4-2-3-1', label: '4-2-3-1' },
    { value: '3-5-2', label: '3-5-2' },
    { value: '3-4-3', label: '3-4-3' },
    { value: '4-5-1', label: '4-5-1' },
    { value: '5-3-2', label: '5-3-2' },
    { value: '4-1-2-1-2', label: '4-1-2-1-2 (Diamond)' },
    { value: '4-2-2-2', label: '4-2-2-2' },
    { value: '4-3-2-1', label: '4-3-2-1' },
    // Add more formations as needed
  ];

  const handleFormationSelect = (event) => {
    const selectedFormationValue = event.target.value;
    const selectedFormation = formations.find(form => form.value === selectedFormationValue);
    onSelect(selectedFormation);
  };

  return (
    <div>
      <label htmlFor="formation" className="block text-gray-700 font-bold mb-2">Select Formation:</label>
      <select id="formation" onChange={handleFormationSelect} className="border rounded py-2 px-4">
        <option value="">Select Formation</option>
        {formations.map(formation => (
          <option key={formation.value} value={formation.value}>{formation.label}</option>
        ))}
      </select>
    </div>
  );
}

export default FormationSelection;
