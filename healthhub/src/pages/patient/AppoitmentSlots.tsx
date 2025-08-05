import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import Image from "../../constants/imageConstants";

interface Doctor {
  id: number;
  specialization: string;
  officeAddress: string;
  phoneNumber: string;
  bio: string;
  userId: {
    fullName: string;
    email: string;
  };
  slots: Slot[];
}

interface Slot {
  id: number;
  weekDay: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

const AppoitmentSlots: React.FC = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [bookingMessage, setBookingMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!doctorId || !token) return;

    axios
      .get(`http://localhost:8080/api/doctors/${doctorId}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setDoctor(res.data.data))
      .catch((err) => console.error(err));
  }, [doctorId]);

  const getWeekDay = (dateStr: string) =>
    format(new Date(dateStr), "EEEE").toLowerCase();

  const getAvailableSlots = () => {
    if (!selectedDate || !doctor) return [];
    const weekDay = getWeekDay(selectedDate);
    return doctor.slots.filter(
      (slot) => slot.weekDay === weekDay && !slot.isBooked
    );
  };

  const handleAppointment = () => {
    const token = localStorage.getItem("token");
    if (!token || !selectedSlot || !selectedDate) return;

    setIsLoading(true);

    axios
      .post(
        `http://localhost:8080/api/appointments`,
        {
          appointmentDate: selectedDate,
          slotId: selectedSlot.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setBookingMessage("Appointment requested successfully!");
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setBookingMessage("Failed to request appointment.");
      }).finally(() => {
        setIsLoading(false);
      })
  };

  return (
    <>
      <DashboardHeader isPatient={true} />
      <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
        {doctor ? (
          <>
            {/* Doctor Info */}
            <div className="flex items-center gap-6 mb-6">
              <img
                src={Image.user}
                alt="Doctor Avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold mb-1">
                  {doctor.userId.fullName}
                </h1>
                <p className="text-blue-600 text-sm">{doctor.specialization}</p>
                <p className="text-sm text-gray-500">{doctor.officeAddress}</p>
              </div>
            </div>

            {/* About */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {doctor.bio}
              </p>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Phone</p>
                  <p>{doctor.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <p>{doctor.userId.email}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-gray-500 mb-1">Address</p>
                  <p>{doctor.officeAddress}</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mb-10">
              <h2 className="text-lg font-semibold mb-4">Availability</h2>
              <input
                type="date"
                className="border px-3 py-2 rounded mb-4 text-sm cursor-pointer"
                onChange={(e) => setSelectedDate(e.target.value)}
              />

              {selectedDate && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2 text-sm">
                    Available Time Slots
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {getAvailableSlots().length > 0 ? (
                      getAvailableSlots().map((slot) => (
                        <button
                          key={slot.id}
                          className={`border px-4 py-2 rounded text-sm cursor-pointer ${selectedSlot?.id === slot.id
                            ? " text-white"
                            : "hover:bg-blue-100"
                            }`}
                          style={
                            selectedSlot?.id === slot.id
                              ? { backgroundColor: "#94C2F0" }
                              : {}
                          }
                          onClick={() => setSelectedSlot(slot)}
                        >
                          {slot.startTime.slice(0, 5)} -{" "}
                          {slot.endTime.slice(0, 5)}
                        </button>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">
                        No available slots for this day.
                      </p>
                    )}
                  </div>
                </div>
              )}

              <button
                disabled={!selectedSlot || isLoading}
                onClick={handleAppointment}
                className="text-white px-6 py-2 rounded text-sm disabled:opacity-80 cursor-pointer"
                style={{
                  backgroundColor: "#94C2F0",
                }}
              >
                {isLoading && (
                  <span
                    className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                  ></span>
                )}
                {isLoading ? "Requesting..." : "Request an Appointment"}
              </button>

              {bookingMessage && (
                <p className="text-sm mt-4 text-green-600">{bookingMessage}</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-500">Loading doctor profile...</p>
        )}
      </div>
    </>
  );
};

export default AppoitmentSlots;
