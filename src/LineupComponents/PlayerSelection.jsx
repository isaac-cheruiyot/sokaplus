import React, { useState } from 'react';

// Sample player data


function PlayerSelection({ onSelect, players, setPlayers }) {
  
  const [isSubstituteNeeded, setIsSubstituteNeeded] = useState(false);
  const [extraPlayerName, setExtraPlayerName] = useState('');
  const [substitutes, setSubstitutes] = useState([]);

  const handlePlayerNameChange = (id, newName) => {
    setPlayers(players.map(player => {
      if (player.id === id) {
        return { ...player, name: newName };
      }
      return player;
    }));
  };

  const handlePlayerSelect = (player) => {
    onSelect(player);
  };

  const handleSubstituteCheckboxChange = (event) => {
    setIsSubstituteNeeded(event.target.checked);
  };

  const handleAddExtraPlayer = () => {
    if (extraPlayerName.trim() !== '') {
      const newPlayer = { id: Date.now(), name: extraPlayerName };
      setSubstitutes([...substitutes, newPlayer]);
      setExtraPlayerName('');
    }
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-2">Select Players:</h2>
      <div className="grid  gap-2">
        {players.map(player => (
          <div key={player.id} className='flex item-center  gap-2 ' >
            <p className='border border-gray-300 rounded w-8 text-center h-8'>{player.id}</p>
          <input
            type="text"
            value={player.name}
            onChange={(e) => handlePlayerNameChange(player.id, e.target.value)}
            className="border text-sm rounded py-1 px-2"
            readOnly={substitutes.find(sub => sub.id === player.id) !== undefined}
          />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Substitutes:</h2>
        {substitutes.map(substitute => (
          <div key={substitute.id}>{substitute.name}</div>
        ))}
        <label className="inline-flex items-center mt-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            onChange={handleSubstituteCheckboxChange}
          />
          <span className="ml-2 text-gray-700">Need substitutes</span>
        </label>
        {isSubstituteNeeded && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Enter substitute name"
              className="border rounded py-2 px-4 mr-2"
              value={extraPlayerName}
              onChange={(e) => setExtraPlayerName(e.target.value)}
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handleAddExtraPlayer}
            >
              Add Substitute
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayerSelection;
