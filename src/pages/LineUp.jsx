import React, { useState } from 'react';
import FormationSelection from '../LineupComponents/FormationSelection';
import PlayerSelection from '../LineupComponents/PlayerSelection';
import FieldDisplay from '../LineupComponents/FieldDisplay';
import BackgroundSelection from '../LineupComponents/BackgroundSelection';


const initialPlayers = [
  { id: 1, name: 'Player 1' },
  { id: 2, name: 'Player 2' },
  { id: 3, name: 'Player 3' },
  { id: 4, name: 'Player 4' },
  { id: 5, name: 'Player 5' },
  { id: 6, name: 'Player 6' },
  { id: 7, name: 'Player 7' },
  { id: 8, name: 'Player 8' },
  { id: 9, name: 'Player 9' },
  { id: 10, name: 'Player 10' },
  { id: 11, name: 'Player 11' },

  // Add more players as needed
];

function LineUp() {
  const [players, setPlayers] = useState(initialPlayers);
  const [selectedPlayers, setSelectedPlayers] = useState(Array(11).fill(null));
  const [selectedFormation, setSelectedFormation] = useState('4-4-2');
  const [selectedBackground, setSelectedBackground] = useState('green');
  const [selectedNavOption, setSelectedNavOption] = useState('style');
  const [teamName, setTeamName] = useState('Your Team')

  const handlePlayerSelect = (player, index) => {
    const newPlayers = [...selectedPlayers];
    newPlayers[index] = player;
    setSelectedPlayers(newPlayers);
  };

  const handleFormationSelect = (formation) => {
    setSelectedFormation(formation.value); // Update the state with the selected formation value
  };

  const handleBackgroundSelect = (background) => {
    setSelectedBackground(background);
  };

  const handleNavOptionSelect = (option) => {
    setSelectedNavOption(option);
  };

  return (
    <div className=" min-h-[60vh] grid px-4 w-full md:3/4 md:mx-auto gap-8 md:grid-cols-3 md:mt-20  py-8">
      <div className=" mb-4 grid h-[80vh] overflow-y-scroll  border border-gray-400 rounded p-4">
        <div className="w-full grid h-8 grid-cols-2">
          <button
            className={` ${selectedNavOption === 'style' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleNavOptionSelect('style')}
          >
            Style
          </button>
          <button
            className={`  ${selectedNavOption === 'players' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleNavOptionSelect('players')}
          >
            Players
          </button>
          
        </div>
        {selectedNavOption === 'players' && (
          <div className="grid  mb-4">
            <PlayerSelection players={players} setPlayers={setPlayers} onSelect={handlePlayerSelect} />
          </div>
        )}
        {selectedNavOption === 'style' && (
          <div className="grid mb-4 md:col-span-1">
            <div className=' flex flex-col'>
              <label htmlFor="teamName" className="block text-gray-700 font-bold mb-2">Name your Team</label>
              <input 
              type="text" value={teamName} 
              onChange={(e)=>setTeamName(e.target.value)} 
              className='px-4 border border-gray-200 rounded py-2 outline-none ' />
            </div>
            <FormationSelection onSelect={handleFormationSelect} />
             <BackgroundSelection onSelect={handleBackgroundSelect} />
          </div>
        )}
       
      </div>
      <div className="md:col-span-2 flex justify-center ">
        <FieldDisplay teamName={teamName} players={players} formation={selectedFormation} background={selectedBackground} />
      </div>
    </div>
  );
}

export default LineUp;
