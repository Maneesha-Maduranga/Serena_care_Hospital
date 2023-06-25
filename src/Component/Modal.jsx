import { useState } from 'react';
import { AiOutlineMessage, AiOutlineCloseCircle } from 'react-icons/ai';
import ModalCard from './ModalCard';

function Modal() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div
        className='fixed bottom-2  right-2 p-4 bg-sky-400  rounded-full cursor-pointer z-10   '
        onClick={handleToggle}
      >
        {toggle ? (
          <AiOutlineMessage size={28} color='white' />
        ) : (
          <AiOutlineCloseCircle size={28} color='white' />
        )}
      </div>
      <div className='fixed bottom-20 z-10  right-2 p-4 '>
        {!toggle && <ModalCard />}
      </div>
    </>
  );
}

export default Modal;
