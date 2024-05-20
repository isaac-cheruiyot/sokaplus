import React, { useRef } from 'react';
import { IoShirt } from "react-icons/io5";
import html2canvas from 'html2canvas';
import { toPng } from 'html-to-image';


const FieldDisplay = ({ formation,teamName,players, background }) => {
  const fieldRef = useRef(null);

   // Function to save the field display as an image
   const saveAsImage = () => {
    html2canvas(fieldRef.current).then(canvas => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'field_display.png';
      link.href = image;
      link.click();
    });
  };

  const backgroundStyles = {
    'bright-green': 'bg-green-500',
    'dark-green': 'bg-green-900',
    'olive-green': 'bg-green-700',
    'brownish-green': 'bg-yellow-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    gray: 'bg-gray-500',
    black: 'bg-black',
    white: 'bg-gray-300',
    // Add more backgrounds as needed
  };
  
  const formationStyles = {
    '4-4-2': {
      goalkeeper: 'bottom-1 right-[42%]',
      leftDefender: 'bottom-[20%] left-[30%]',
      rightDefender: 'bottom-[20%] right-[30%]',
      leftWingBack: 'bottom-[20%] left-4',
      rightWingBack: 'bottom-[20%] right-4',
      leftMidfielder: 'top-[40%] left-[30%]',
      centerMidfielder: 'top-[40%] right-4 ',
      rightMidfielder: 'top-[40%] right-[30%]', 
      leftForward: 'top-[40%] left-4 ',
      rightForward: 'top-8 left-[28%] ',
      centerForward: 'top-8 right-[30%] ',

    },
    '4-3-3': {
      goalkeeper: 'bottom-1 right-[42%]',
      leftDefender: 'bottom-[20%] left-[30%]',
      rightDefender: 'bottom-[20%] right-[30%]',
      leftWingBack: 'bottom-[20%] left-4',
      rightWingBack: 'bottom-[20%] right-4',
      leftMidfielder: 'top-[40%] left-4',
      centerMidfielder: 'top-[40%] left-[43%] ',
      rightMidfielder: 'top-[40%] right-4',
      leftForward: 'top-8 left-[10%]',
      rightForward: 'top-8 right-[10%]',
      centerForward: 'top-8 right-[42%] ',

    },
    '4-2-3-1': {
      goalkeeper: 'bottom-1 right-[42%]',
      leftDefender: 'bottom-[20%] left-[30%]',
      rightDefender: 'bottom-[20%] right-[30%]',
      leftWingBack: 'bottom-[20%] left-4',
      rightWingBack: 'bottom-[20%] right-4',
      leftMidfielder: 'bottom-[35%] left-[35%]',
      centerMidfielder: 'top-[30%] left-[45%]',
      rightMidfielder: 'bottom-[35%] right-[35%]',
      leftForward: 'top-[30%] left-[20%]',
      rightForward: 'top-[30%] right-[20%]',
      centerForward: 'top-[5%] left-[45%]',
    },
  
    '3-5-2': {
      goalkeeper: 'bottom-1 right-[42%]',
      leftDefender: 'bottom-[20%] left-8',
      rightDefender: 'bottom-[20%] right-8',
      leftWingBack: 'bottom-[20%] left-[42%]',
      rightWingBack: 'top-[36%] right-2',
      rightMidfielder: 'top-[40%] right-[28%]',
      leftMidfielder: 'top-[40%] left-[28%]',
      centerMidfielder: 'top-[44%] left-[42%]',
      leftForward: 'top-[36%] left-2',
      rightForward: 'top-8 left-[30%] ',
      centerForward: 'top-8 right-[30%] '
    },
    '3-4-3': {
      goalkeeper: 'bottom-1 right-[42%]',
      leftDefender: 'bottom-[20%] left-8',
      rightDefender: 'bottom-[20%] right-8',
      leftWingBack: 'bottom-[20%] left-[42%]',
      rightWingBack: 'top-[40%] right-8',
      rightMidfielder: 'top-[40%] right-[30%]',
      leftMidfielder: 'top-[40%] left-8',
      centerMidfielder: 'top-[40%] left-[30%]',
      leftForward: 'top-8 left-8',
      rightForward: 'top-8 right-8 ',
      centerForward: 'top-8 right-[45%] '
    },
    '4-5-1': {
      goalkeeper: 'bottom-1 right-[42%]',
      leftDefender: 'bottom-[20%] left-[30%]',
      rightDefender: 'bottom-[20%] right-[30%]',
      leftWingBack: 'bottom-[20%] left-4',
      rightWingBack: 'bottom-[20%] right-4',
      rightMidfielder: 'top-[40%] right-[28%]',
      leftMidfielder: 'top-[40%] left-[28%]',
      centerMidfielder: 'top-[44%] left-[42%]',
      leftForward: 'top-[36%] left-2',
      rightForward: 'top-[36%] right-2',
      centerForward: 'top-8 left-[45%]',
    },
    '5-3-2': {
      goalkeeper: 'bottom-1 right-[42%]',
      leftDefender: 'bottom-[20%] left-[28%]',
      rightDefender: 'bottom-[20%] right-[28%]',
      leftWingBack: 'bottom-[20%] left-4',
      rightWingBack: 'bottom-[20%] right-4',
      leftMidfielder: 'bottom-[18%] left-[45%]',
      rightMidfielder: 'top-[40%] right-4',
      centerMidfielder: 'top-[40%] left-[45%]',
      leftForward: 'top-[40%] left-4',
      rightForward: 'top-8 right-[30%]',
      centerForward: 'top-8 left-[30%]',
    },
    '4-1-2-1-2': {
      goalkeeper: 'bottom-1 right-[42%]',
      leftDefender: 'bottom-[20%] left-[30%]',
      rightDefender: 'bottom-[20%] right-[30%]',
      leftWingBack: 'bottom-[20%] left-4',
      rightWingBack: 'bottom-[20%] right-4',
      rightMidfielder: 'bottom-[40%] right-[44%]',
      leftMidfielder: 'top-[40%] left-[28%]',
      centerMidfielder: 'top-[40%] right-[28%]',
      leftForward: 'top-[28%] left-[44%]',
      rightForward: 'top-8 right-[30%]',
      centerForward: 'top-8 left-[30%]',
    },
    '4-2-2-2': {
      goalkeeper: 'bottom-1 right-[42%]',
      leftDefender: 'bottom-[20%] left-[30%]',
      rightDefender: 'bottom-[20%] right-[30%]',
      leftWingBack: 'bottom-[20%] left-4',
      rightWingBack: 'bottom-[20%] right-4',
      rightMidfielder: 'bottom-[40%] right-[28%]',
      leftMidfielder: 'bottom-[40%] left-[28%]',
      centerMidfielder: 'top-[30%] right-[28%]',
      leftForward: 'top-[30%] left-[28%]',
      rightForward: 'top-8 right-[28%]',
      centerForward: 'top-8 left-[28%]',
    },
    '4-3-2-1': {
      goalkeeper: 'bottom-1 right-[42%]',
      leftDefender: 'bottom-[20%] left-[30%]',
      rightDefender: 'bottom-[20%] right-[30%]',
      leftWingBack: 'bottom-[20%] left-4',
      rightWingBack: 'bottom-[20%] right-4',
      rightMidfielder: 'bottom-[45%] right-4',
      leftMidfielder: 'bottom-[45%] left-4',
      centerMidfielder: 'bottom-[45%] left-[45%]',
      leftForward: 'top-[30%] left-[30%]',
      rightForward: 'top-[30%] right-[30%]',
      centerForward: 'top-8 left-[45%]',
    },
    // Add more formations as needed
  };

  // const playerStyles = formationStyles[formation] || {};

  // Apply formation styles
  const { 
    leftMidfielder,
    leftWingBack,
    leftForward,
    rightForward,
     rightMidfielder,
     goalkeeper, 
     centerMidfielder,
     centerForward, 
     leftDefender,
     rightWingBack, 
     rightDefender } = formationStyles[formation] || {};

  // Apply background styles
  const fieldClasses = `${backgroundStyles[background]}`;
  return (
    <div className=''>
      <div className='grid grid-cols-2 items-center gap-4'>
    <button  className='px-4 md:px-8 py-2 my-4 bg-orange-400 text-white font-mono' onClick={saveAsImage}>Save as Image</button>
    <button  className=' px-4 md:px-8 py-2 my-4 bg-orange-400 text-white font-mono' onClick={saveAsImage}>Save and Share</button>
    </div>

    <div ref={fieldRef} className={` h-[80vh] md:h-[90vh] w-[52vh] md:w-[80vh] relative ${fieldClasses} p-4 md:p-8 pt-12`}>
      <h1 className='absolute top-2 left-4  font-serif font-medium text-gray-200 text-xl'>{teamName}</h1>
      <h1 className='absolute top-2 right-4  font-serif font-medium text-gray-200 text-xl'>{formation}</h1>

      <div className='w-full h-full border-4 relative border-white'>
        {/* Pitch markings */}
        <div className='absolute top-0 border-b-4 border-r-4 border-l-4 border-white h-8 w-20 right-[40%]'></div>
        <div className='absolute top-0 border-b-4 border-r-4  border-l-4 border-white h-20 w-40 right-[29%]'></div>
        <div className='absolute top-20 h-8 overflow-hidden   w-20 right-[40%]'>
          <div className=' w-full h-20 rounded-full border-4 -translate-y-16 border-white'></div>
        </div>
       
        {/* Players */}
        
        <div className={`absolute z-20 flex flex-col items-center justify-center  ${goalkeeper}`}>
          <IoShirt  className={`text-red-500  `} size={40} />
          <p className=' font-medium text-gray-200 '>{players[0] && players[0].name}</p>
          </div>
          {/* 2 */}
          <div className={` z-20 absolute flex flex-col items-center justify-center ${leftWingBack}`}>
          <IoShirt  className={`text-red-500`} size={40} />
          <p className=' font-medium text-gray-200 '>{players[1] && players[1].name}</p>
          </div>
          {/* 3 */}
          <div className={`z-20 absolute flex flex-col items-center justify-center ${rightWingBack}`}>
          <IoShirt  className={`text-red-500 `} size={40} />
          <p className=' font-medium text-gray-200 '>{players[2] && players[2].name}</p>
          </div>
          {/* 4 */}
          <div className={`z-20 absolute ${rightDefender} flex flex-col items-center justify-center`}>
          <IoShirt  className={`text-red-500 `} size={40} />
          <p className=' font-medium text-gray-200 '>{players[3] && players[3].name}</p>
          </div>
          {/* 5 */}
          <div className={`z-20 absolute ${leftDefender} flex flex-col items-center justify-center`}>
          <IoShirt  className={`text-red-500 `} size={40} />
          <p className=' font-medium text-gray-200 '>{players[4] && players[4].name}</p>
          </div>
          {/* 6 */}
          <div className={`z-20 absolute ${leftMidfielder} flex flex-col items-center justify-center`}>
          <IoShirt  className={`text-red-500 `} size={40} />
          <p className=' font-medium text-gray-200 '>{players[5] && players[5].name}</p>
          </div>
          {/* 7 */}
          <div className={` z-20 absolute flex flex-col items-center justify-center ${centerMidfielder}`}>
          <IoShirt  className={`text-red-500`} size={40} />
          <p className=' font-medium text-gray-200 '>{players[6] && players[6].name}</p>
          </div>
          {/* 8 */}
          <div className={`z-20 absolute flex flex-col items-center justify-center  ${rightMidfielder}`}>
          <IoShirt  className={`text-red-500 `} size={40} />
          <p className=' font-medium text-gray-200 '>{players[7] && players[7].name}</p>
          </div>
          {/* 9 */}
          <div className={`z-20 absolute flex flex-col items-center justify-center ${centerForward}`}>
          <IoShirt  className={`text-red-500 `} size={40} />
          <p className=' font-medium text-gray-200 '>{players[8] && players[8].name}</p>
          </div>
          {/* 10 */}
          <div className={`z-20 absolute flex flex-col items-center justify-center ${leftForward}`}>
          <IoShirt  className={`text-red-500  `} size={40} />
          <p className=' font-medium text-gray-200 '>{players[9] && players[9].name}</p>
          </div>
          {/* 11 */}
          <div className={`z-20 absolute flex flex-col items-center justify-center ${rightForward}`}>
          <IoShirt  className={`text-red-500 `} size={40} />
          <p className=' font-medium text-gray-200 '>{players[10] && players[10].name}</p>
          </div>
          


      
        {/* Field markings */}
        <div className='absolute top-[49%] right-0 w-full h-1 bg-white'></div>
        <div className='absolute top-[38%] rounded-full border-4 h-24 w-24 border-white right-[38%]'></div>
        <div className='absolute bottom-20 h-8 overflow-hidden w-20 right-[40%]'>
          <div className='w-full h-20 rounded-full border-4 translate-y-4 border-white'></div>
        </div>
        <div className='absolute bottom-0 border-t-4 border-r-4 border-l-4 border-white h-20 w-40 right-[29%]'></div>
        <div className='absolute bottom-0 border-t-4 border-r-4 border-l-4 border-white h-8 w-20 right-[40%]'></div>
      </div>
    </div>
    </div>
  );
}

export default FieldDisplay;
