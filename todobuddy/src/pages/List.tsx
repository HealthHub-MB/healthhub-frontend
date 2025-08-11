import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Invite from '../components/Invite';
import Button from '../components/Button'; 

const List = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(true);
  };

  const handelCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <DashboardHeader />

      <div className="bg-gray-50 min-h-screen px-8 py-6">
        {/* Invite Modal */}
        {isOpenModal && (
          <Invite isOpen={isOpenModal} onClose={handelCloseModal} />
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-4 ml-[28px] mr-[28px]">
          <h2 className="text-3xl font-bold text-gray-900">User List</h2>

          {/* Invite Button */}
          <Button
            label="Invite"
            onClick={handleModal}
            height="40px" 
            width="auto"
            padding="0.5rem 1rem"
            bgcolor="#60A5FA"
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default List;
