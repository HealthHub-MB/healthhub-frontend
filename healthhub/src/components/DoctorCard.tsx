import React from 'react';

interface DoctorCardProps {
  name: string;
  bio: string;
  specialization: string;
  imageUrl: string;
  onViewProfile: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  bio,
  specialization,
  imageUrl,
  onViewProfile
}) => {
  return (
    <div className="flex justify-between items-start px-4 py-3 gap-4 w-[960px] h-[111px] rounded-lg ">
      <div className="flex flex-row gap-4 w-[802px] h-[87px]">
        {/* Avatar */}
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="w-[70px] h-[70px] rounded-full object-cover"
        />

        {/* Doctor Info */}
        <div className="flex flex-col justify-center w-[716px] h-[87px]">
          <div className="text-[#121417] text-[16px] font-medium leading-[24px] mb-1">{name}</div>
          <div className="text-[#637887] text-[14px] font-normal leading-[21px] mb-1">{bio}</div>
          <div className="text-[#637887] text-[14px] font-normal leading-[21px]">{specialization}</div>
        </div>
      </div>

      {/* View Profile Button */}
      <div className="flex flex-col items-start w-[150px] h-[40px] ">
       <button
  onClick={onViewProfile}
  className="flex justify-center items-center px-4 rounded-[8px] text-white text-[14px] font-medium leading-[21px] hover:opacity-90"
  style={{
    backgroundColor: "#94C2F0",
    height: "40px",
    width: "150px",
  }}
>
  <span>Profile</span>
</button>
      </div>
    </div>
  );
};

export default DoctorCard;
