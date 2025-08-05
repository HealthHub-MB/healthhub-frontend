import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import Color from "../../constants/colorConstants";
import Button from "../../components/Button";
import { ColorClasses } from "../../constants/tailwindConstants";
interface HealthRecord {
  id: number;
  title: string;
  filePath: string;
  fileType: string;
  uploadedAt: string;
}

const HealthRecords: React.FC = () => {
  // Inside the HealthRecords component

  const token = localStorage.getItem("token");
  const [isUploaded, setIsUploaded] = useState(false);
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);


  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log("file", file);
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/patients/uploads",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response;
      console.log("Uploaded:", data);
      setIsUploaded(true);
      // Optionally update your UI with the new file
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsLoading(false);
    }
  };



  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/patients/uploads",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("response", response);
        setRecords(response.data?.data);
      } catch (error) {
        console.error("Failed to fetch health records:", error);
      }
    };

    fetchRecords();
  }, [isUploaded, token]);

  const handleView = (filePath: string) => {
    // const BASE_URL = 'http://localhost:8080';
    // const url = `${BASE_URL}/${filePath}`;
    window.open(filePath, '_blank');
  };

  return (
    <>
      <DashboardHeader isPatient={true} />
      <div className="w-full min-h-screen flex justify-center items-center bg-white">
        <div className="w-[1280px] h-[777px] px-[160px] py-[20px]">
          <div className="flex flex-col items-start w-[960px] max-w-[960px] h-[738px]">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-start content-start p-4 gap-3 w-full h-[105px]">
              <div className="flex flex-col items-start gap-3 w-[288px] min-w-[288px] h-[73px]">
                <div
                  className={`text-[32px] font-bold leading-[40px] ${ColorClasses.black}`}
                >
                  Health Records
                </div>
                <div className="text-sm font-normal leading-[21px] text-[#637887]">
                  Manage your health documents securely
                </div>
              </div>
            </div>

            {/* Upload Box */}
            <div className="p-4 w-full h-[285px]">
              <div className="flex flex-col items-center p-14 gap-6 border-2 border-dashed border-[#DBE0E6] rounded-xl w-full h-full">
                <div className="flex flex-col items-center gap-2 max-w-[480px]">
                  <div className="text-sm text-center text-[#121417]">
                    Click to browse your files. Supported formats: PDF, JPG, PNG.
                    Max file size: 10MB.
                  </div>
                </div>
                <div className="relative">
                  <Button
                    label="Upload Files"
                    bgcolor={Color.gray}
                    color={Color.black}
                    height="40px"
                    width="150px"
                    padding="0.5rem 1rem"
                    textSize="0.875rem"
                    className="font-bold cursor-pointer"
                    loading={isLoading}
                    disabled={isLoading}
                    loadingLabel="Uploading"
                  />
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Uploaded Documents Title */}
            <div className="px-4 pt-5 pb-3 w-full">
              <div className="text-[22px] font-bold leading-[28px] text-[#121417]">
                Uploaded Documents
              </div>
            </div>

            {/* Documents Table */}
            <div className="px-4 py-3 w-full">
              <div className="flex flex-col border border-[#DBE0E6] rounded-xl bg-white w-full">
                {/* Header Row */}

                {records?.length === 0 ? (
                  <p>No health records found.</p>
                ) : (
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">Title</th>
                        <th className="px-4 py-2 text-left">
                          Uploaded At
                        </th>
                        <th className="px-4 py-2 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records?.length &&
                        records?.map((record) => (
                          <tr key={record.id}>
                            <td className="px-4 py-2">{record.title}</td>
                            <td className="px-4 py-2">
                              {new Date(record.uploadedAt).toLocaleString()}
                            </td>
                            <td className="px-4 py-2">
                              <Button
                                label="View"
                                onClick={() => handleView(record.filePath)}
                                bgcolor={Color.blue}
                                height="40px"
                                width="150px"
                                color="white"
                                padding="0.25rem 0.75rem"
                                textSize="0.875rem"
                                className="rounded"

                              />
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthRecords;
