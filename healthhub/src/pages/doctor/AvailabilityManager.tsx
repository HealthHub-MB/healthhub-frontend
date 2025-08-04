import React, { useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import Colors from "../../constants/colorConstants";
import DashboardHeader from "../../components/DashboardHeader";
import { useNavigate } from "react-router-dom";

const daysOfWeek = [
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"
];

const ManageAvailability: React.FC = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [activeDays, setActiveDays] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDayToggle = (day: string) => {
    setActiveDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = async () => {
    if (!startTime || !endTime || activeDays.length === 0) {
      alert("Please select start time, end time, and at least one active day.");
      return;
    }

    const token = localStorage.getItem("token");
    const doctorId = localStorage.getItem("doctorId");

    if (!token) {
      alert("User not authenticated");
      return;
    }

    const payload = {
      startTime,
      endTime,
      weekDays: activeDays,
      ...(doctorId ? { doctorId } : {}) //
    };

    console.log("Submitting availability payload:", payload);

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/doctor/availability", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", response.data);
      alert("Availability saved successfully!");
      navigate('/doctor-dashboardp')
    } catch (error: any) {
      console.error("POST error:", error.response?.data || error.message);
      alert("Failed to save availability.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DashboardHeader isDoctor={true} />
      <div className="flex justify-center items-start px-40 py-5 w-full min-h-screen">
        <div className="flex flex-col items-start w-[960px] max-w-[960px] h-full">
          <div className="flex flex-col items-center px-4 pt-5 pb-3 w-full">
            <h1 className="text-[28px] font-bold leading-[35px] text-center text-[#121417] w-full">
              Manage Availability
            </h1>
          </div>

          {/* Start Time */}
          <div className="flex flex-wrap items-end p-3 gap-4 w-[480px] max-w-[480px]">
            <div className="flex flex-col w-[448px] h-[88px]">
              <label className="pb-2 text-base font-medium text-[#121417]">Start Time</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full h-14 px-3 border border-[#DBE0E6] rounded-lg bg-white text-[#121417]"
              />
            </div>
          </div>

          {/* End Time */}
          <div className="flex flex-wrap items-end p-3 gap-4 w-[480px] max-w-[480px]">
            <div className="flex flex-col w-[448px] h-[88px]">
              <label className="pb-2 text-base font-medium text-[#121417]">End Time</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full h-14 px-3 border border-[#DBE0E6] rounded-lg bg-white text-[#121417]"
              />
            </div>
          </div>

          {/* Active Days */}
          <div className="flex flex-col px-4 pt-4 pb-2">
            <h2 className="text-lg font-bold text-[#121417]">Active Days</h2>
          </div>

          <div className="flex flex-col px-4 space-y-3">
            {daysOfWeek.map((day) => (
              <div key={day} className="flex-row items-center w-[928px] h-[48px] pt-3 pb-3 gap-3 flex">
                <input
                  type="checkbox"
                  id={day}
                  checked={activeDays.includes(day)}
                  onChange={() => handleDayToggle(day)}
                  className="w-5 h-5 border-2 border-[#DBE0E6] rounded"
                />
                <label htmlFor={day} className="text-base text-[#121417]">
                  {day}
                </label>
              </div>
            ))}
          </div>

          {/* Save Button */}
          <div className="flex justify-end items-end w-full h-[64px] mt-6">
            <Button
              type="button"
              label={loading ? "Saving..." : "Save"}
              height="40px"
              width="127px"
              padding="0px 16px"
              bgcolor={Colors.blue}
              color={Colors.black}
              textSize="14px"
              className="rounded-lg font-bold"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAvailability;
