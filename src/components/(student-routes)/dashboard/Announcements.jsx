import { Bell } from "lucide-react";

const Announcements = () => {
  return (
    <div className="mt-3  w-[99%] shadow rounded-xl px-8 py-3">
      <h1 className="text-lg font-semibold"> Upcomming exams </h1>
      <div className="flex items-center gap-10 mt-3">
        <div>Analysis</div>
        <h1
          style={{ backgroundColor: "#F9E7D1", color: "#E67E22" }}
          className="rounded-full p-2"
        >
          Tuesday, 10th Dec.{" "}
        </h1>
        <button className="rounded-full flex items-center gap-2 cursor-pointer shadow-lg px-5 py-2 bg-gray-200 hover:bg-gray-500 transition-all duration-300 ease-in-out hover:text-white">
          <Bell size={16} />
          <p>Remind Me </p>
        </button>
      </div>
      <h1 className="mt-8 text-lg font-semibold">Exam Release Dates</h1>
      <div className="flex items-center gap-10 mt-3">
        <div>Analysis</div>
        <h1
          style={{ backgroundColor: "#DCE6CD", color: "#628141" }}
          className="rounded-full p-2"
        >
          Tuesday, 10th Dec.{" "}
        </h1>
        <button className="rounded-full flex items-center gap-2 cursor-pointer shadow-lg px-5 py-2 bg-gray-200 hover:bg-gray-500 transition-all duration-300 ease-in-out hover:text-white">
          <Bell size={16} />
          <p>Remind Me </p>
        </button>
      </div>
    </div>
  );
};

export default Announcements;
