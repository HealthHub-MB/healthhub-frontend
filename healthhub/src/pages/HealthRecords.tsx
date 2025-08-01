import axios from "axios";
import React, { useEffect, useState } from "react";

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

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log("file", file);
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

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
      // Optionally update your UI with the new file
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const [records, setRecords] = useState<HealthRecord[]>([]);

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
        console.log('response',response)
        setRecords(response.data?.data);
      } catch (error) {
        console.error("Failed to fetch health records:", error);
      }
    };

    fetchRecords();
  }, []);

  const handleView = (filePath: string) => {
    const url = `http://localhost:8080/${filePath}`;
    window.open(filePath, "_blank");
  };

  return (
    <div className="flex flex-row justify-center items-start px-40 py-5 w-[1280px] h-[777px]">
      <div className="flex flex-col items-start w-[960px] max-w-[960px] h-[738px]">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-start content-start p-4 gap-3 w-full h-[105px]">
          <div className="flex flex-col items-start gap-3 w-[288px] min-w-[288px] h-[73px]">
            <div className="text-[32px] font-bold leading-[40px] text-[#121417]">
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
              <div className="text-lg font-bold text-center text-[#121417]">
                Drag and drop files here
              </div>
              <div className="text-sm text-center text-[#121417]">
                Or click to browse your files. Supported formats: PDF, JPG, PNG.
                Max file size: 10MB.
              </div>
            </div>
            <label className="px-4 py-2 rounded-lg bg-[#F0F2F5] cursor-pointer">
              <span className="text-sm font-bold text-[#121417]">
                Upload Files
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
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
            <div className="flex flex-row w-full h-[46px]">
              <div className="w-[258px] px-4 py-3 text-sm font-medium text-[#121417]">
                Name
              </div>
              <div className="w-[244px] px-4 py-3 text-sm font-medium text-[#121417]">
                Upload Date
              </div>
              <div className="w-[237px] px-4 py-3 text-sm font-medium text-[#121417]">
                File Type
              </div>
              <div className="w-[186px] px-4 py-3 text-sm font-medium text-[#637887]">
                Actions
              </div>
            </div>

            {records?.length === 0 ? (
              <p>No health records found.</p>
            ) : (
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">Title</th>
                    <th className="border px-4 py-2 text-left">Uploaded At</th>
                    <th className="border px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {records?.length && records?.map((record) => (
                    <tr key={record.id}>
                      <td className="border px-4 py-2">{record.title}</td>
                      <td className="border px-4 py-2">
                        {new Date(record.uploadedAt).toLocaleString()}
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => handleView(record.filePath)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          View
                        </button>
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
  );
};

export default HealthRecords;
