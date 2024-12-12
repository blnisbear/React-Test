import React, { useEffect, useState } from "react";

export default function TimerComponent() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let x: number | undefined;

    if (isRunning) {
      x = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1); // เพิ่มเวลา
      }, 1000);
    }

    return () => {
      clearInterval(x); // ล้าง interval เมื่อ component ถูก unmount หรือ isRunning เปลี่ยน
    };
  }, [isRunning]); // ทำงานเมื่อ isRunning เปลี่ยนค่า

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}
