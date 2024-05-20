import React, { useState } from 'react';
import AfterSchool from '../trainingComponents/AfterSchool';
import EliteProgram from '../trainingComponents/EliteProgram';
import RegularTraining from '../trainingComponents/RegularTraining';

const Trainings = () => {
  const [selectedProgram, setSelectedProgram] = useState('AfterSchool');

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  return (
    <div className="grid md:grid-cols-4 gap-8 rounded-md md:rounded-none items-start mt-8 md:mt-32 px-8">
      <div className="">
        <Sidebar selectedProgram={selectedProgram} handleProgramClick={handleProgramClick} />
      </div>
      <div className="md:col-span-3">
        {selectedProgram === 'AfterSchool' && <AfterSchool />}
        {selectedProgram === 'EliteProgram' && <EliteProgram />}
        {selectedProgram === 'RegularTraining' && <RegularTraining />}
      </div>
    </div>
  );
};

const Sidebar = ({ handleProgramClick, selectedProgram }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Training Programs</h2>
      <ul className="border-2 p-1 border-blue-500">
        <li 
        onClick={() => handleProgramClick('AfterSchool')}
        className={`text-lg font-medium px-4 py-2  cursor-pointer ${selectedProgram ==='AfterSchool' ?'bg-blue-500 text-white ':'text-blue-500 bg-white'} focus:outline-none`}>
          After School Training Program
        </li>
        <li  
        onClick={() => handleProgramClick('EliteProgram')} 
        className={`text-lg font-medium px-4 py-2 cursor-pointer ${selectedProgram ==='EliteProgram' ?'bg-blue-500 text-white ':'text-blue-500 bg-white'} focus:outline-none`}>
        Elite Training Program
        </li>
        <li   
        onClick={() => handleProgramClick('RegularTraining')} 
        className={`text-lg font-medium px-4 py-2 cursor-pointer  ${selectedProgram === 'RegularTraining' ?'bg-blue-500 text-white ':'text-blue-500 bg-white'} focus:outline-none`}>
        Regular Training Program
        </li>
      </ul>
    </div>
  );
};

export default Trainings;
