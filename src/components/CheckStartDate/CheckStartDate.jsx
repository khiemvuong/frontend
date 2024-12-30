import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../src/datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { useState } from "react";

const CheckStartDate = ({ setCheckStartDate }) => {
  const [startDate, setStartDate] = useState(null);
  //   const today = new Date();

  const handleDateChange = (date) => {
    setStartDate(date);
    // Chuyển đổi ngày thành định dạng yyyy-mm-dd
    if (date) {
      // const formattedDate = date.toISOString().split("T")[0];
      // setCheckStartDate(formattedDate);

      const formattedDate = date.toLocaleDateString("en-CA"); // 'en-CA' giúp tạo ra định dạng yyyy-mm-dd
      setCheckStartDate(formattedDate);
    } else {
      setCheckStartDate(""); // Reset nếu không có ngày nào được chọn
    }
  };

  return (
    <div className="relative flex-1 items-center h-full">
      <div className="absolute pr-8 right-0 top-1/2 -translate-y-1/2">
        <BsCalendar className="text-accent text-base" />
      </div>

      <DatePicker
        className="w-full h-full rounded p-2"
        selected={startDate}
        placeholderText="Start date"
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd" // Định dạng hiển thị ngày
        // minDate={today}
      />
    </div>
  );
};

export default CheckStartDate;
