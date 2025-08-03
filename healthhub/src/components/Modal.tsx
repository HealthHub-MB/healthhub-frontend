import React from 'react';

interface DoctorInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: {
    name: string;
    specialization: string;
    address: string;
    phone: string;
    email: string;
    about: string;
    imageUrl: string;
  };
}

const DoctorInfoModal: React.FC<DoctorInfoModalProps> = ({ isOpen, onClose, doctor }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-[960px] max-w-full p-4 shadow-xl overflow-y-auto max-h-[90vh] relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold">×</button>

        {/* Top Row: Image + Basic Info */}
        <div className="flex gap-4 p-4">
          {/* Image */}
          <div className="w-[128px] h-[128px] min-w-[128px] rounded-full bg-gray-200 overflow-hidden">
            <img src={doctor.imageUrl} alt={doctor.name} className="object-cover w-full h-full" />
          </div>

          {/* Name, Specialization, Location */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[22px] font-bold text-[#121417] leading-[28px]">{doctor.name}</h2>
            <p className="text-[16px] text-[#637887] leading-[24px]">{doctor.specialization}</p>
            <p className="text-[16px] text-[#637887] leading-[24px]">{doctor.address}</p>
          </div>
        </div>

        {/* About */}
        <div className="px-4 py-3">
          <h3 className="text-[22px] font-bold text-[#121417] mb-2">About</h3>
          <p className="text-[16px] text-[#121417] leading-[24px]">{doctor.about}</p>
        </div>

        {/* Contact Info */}
        <div className="px-4 py-3">
          <h3 className="text-[22px] font-bold text-[#121417] mb-2">Contact Information</h3>
          <div className="flex flex-wrap gap-6 border-t pt-4">
            {/* Phone */}
            <div className="w-[186px]">
              <p className="text-[14px] text-[#637887]">Phone</p>
              <p className="text-[14px] text-[#121417]">{doctor.phone}</p>
            </div>
            {/* Email */}
            <div className="flex-1 min-w-[250px]">
              <p className="text-[14px] text-[#637887]">Email</p>
              <p className="text-[14px] text-[#121417]">{doctor.email}</p>
            </div>
            {/* Address */}
            <div className="w-[186px]">
              <p className="text-[14px] text-[#637887]">Address</p>
              <p className="text-[14px] text-[#121417]">{doctor.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfoModal;
