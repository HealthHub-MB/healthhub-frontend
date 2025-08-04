import React from 'react';

interface AppointmentCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  imageUrl: string;
  onButtonClick?: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  title,
  description,
  buttonLabel,
  imageUrl,
  onButtonClick,
}) => {
  return (
    <div className="flex flex-col items-start p-4  h-[203px] w-[960]">
      <div className="flex flex-row justify-between items-start gap-4 h-[171px] rounded-[12px] w-full">
        {/* Text Section */}
        <div className="flex flex-col gap-4 w-[608px] h-[171px]">
          {/* Title and Description */}
          <div className="flex flex-col gap-1 w-full">
            <div className="text-[#121417] font-bold text-[16px] leading-[20px]">
              {title}
            </div>
            <div className="text-[#637887] font-normal text-[14px] leading-[21px]">
              {description}
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center items-center px-4 w-[150px] h-[40px] bg-[#F0F2F5] rounded-[12px] cursor-pointer" onClick={onButtonClick}>
            <div className="text-center text-[#121417] font-medium text-[14px] leading-[21px]">
              {buttonLabel}
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="w-[320px] h-[171px] rounded-[12px] bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
    </div>
  );
};

export default AppointmentCard;
