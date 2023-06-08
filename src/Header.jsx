import { useState, useEffect } from "react";

export default function Header() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour < closeHour;

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <>
      <h1 className="text-[5.2rem] text-[#edc84b] font-bold p-10 text-center">
        🍕 Pizza Express
      </h1>
      <p className="mb-10">
        {time}{" "}
        {isOpen
          ? "We are currently open until 5 PM."
          : "We are currently closed! Please come back tomorrow at 9 AM."}
      </p>
    </>
  );
}
