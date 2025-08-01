import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import Colors from "../../constants/colorConstants";
import DashboardHeader from "../../components/DashboardHeader";

interface ProfileFormData {
  fullName: string;
  gender: string;
  phoneNumber: string;
  specialization: string;
  officeAddress: string;
  bio: string;
}

const EditDoctorForm: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    fullName: "",
    gender: "",
    phoneNumber: "",
    specialization: "",
    officeAddress: "",
    bio: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/doctors/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log("res", res);
        const data = res.data.data || {};
        setFormData({
          fullName: localStorage.getItem("name") || "",
          gender: data.gender || "",
          phoneNumber: data.phoneNumber || "",
          specialization: data.specialization || "",
          officeAddress: data.officeAddress || "",
          bio: data.bio || "",
        });
      })

      .catch((err) => console.error(err));
  }, []);

  const handleChange = (field: keyof ProfileFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      console.log("formdata:", formData);
      await axios
        .put("http://localhost:8080/api/doctors/profile", formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      alert("Profile updated!");
      setIsEditing(false);
      localStorage.setItem("name", formData.fullName);
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    }
  };

  return (
    <>
      <DashboardHeader isDoctor={true} />
      <div className="flex justify-center px-6 py-10 min-h-screen bg-white">
        <div className="w-full max-w-[960px] flex flex-col">
          <h1 className="text-2xl font-bold mb-2 text-center">My Profile</h1>
          <p className="text-base font-medium mb-6 text-center">
            Personal Information
          </p>

          {/* Full Name */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Full Name</label>
            {isEditing ? (
              <input
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
              />
            ) : (
              <div className="p-3 border border-gray-200 rounded-xl">
                {formData.fullName}
              </div>
            )}
          </div>

          {/* Gender */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Gender</label>
            {isEditing ? (
              <select
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <div className="p-3 border border-gray-200 rounded-xl">
                {formData.gender}
              </div>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Contact Number</label>
            {isEditing ? (
              <input
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            ) : (
              <div className="p-3 border border-gray-200  rounded-xl">
                {formData.phoneNumber}
              </div>
            )}
          </div>

          {/* Specialization */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Specialization</label>
            {isEditing ? (
              <textarea
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.specialization}
                onChange={(e) => handleChange("specialization", e.target.value)}
              />
            ) : (
              <div className="p-3 border border-gray-200 rounded-xl">
                {formData.specialization}
              </div>
            )}
          </div>

          {/* Address */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Address</label>
            {isEditing ? (
              <textarea
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.officeAddress}
                onChange={(e) => handleChange("officeAddress", e.target.value)}
              />
            ) : (
              <div className="p-3 border border-gray-200 rounded-xl">
                {formData.officeAddress}
              </div>
            )}
          </div>

          {/* Bio */}
          <div className="mb-4 w-[480px]">
            <label className="block mb-1 font-medium">Bio / Instruction</label>
            {isEditing ? (
              <textarea
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={formData.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
              />
            ) : (
              <div className="p-3 border border-gray-200 rounded-xl">
                {formData.bio}
              </div>
            )}
          </div>

          {/* Bottom-right buttons */}
          <div className="flex justify-end gap-4 mt-8">
            {!isEditing ? (
              <Button
                label="Edit"
                onClick={() => setIsEditing(true)}
                width="140px"
                height="40px"
                bgcolor={Colors.blue}
                color="#ffffff"
                textSize="14px"
                className="rounded-lg font-semibold"
              />
            ) : (
              <>
                <Button
                  label="Cancel"
                  onClick={() => setIsEditing(false)}
                  width="140px"
                  height="40px"
                  bgcolor={Colors.gray}
                  color="#121417"
                  textSize="14px"
                  className="rounded-lg font-semibold"
                />
                <Button
                  label="Save"
                  onClick={handleSave}
                  width="140px"
                  height="40px"
                  bgcolor={Colors.blue}
                  color="#ffffff"
                  textSize="14px"
                  className="rounded-lg font-semibold"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDoctorForm;
