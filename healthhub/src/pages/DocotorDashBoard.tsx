import DashboardHeader from "../components/DashboardHeader";

const DoctorDashBoard = () => {
  return (
    <div>
      <DashboardHeader isDoctor={true} />
      <h1>Doctor Dashboard</h1>
    </div>
  );
};

export default DoctorDashBoard;
