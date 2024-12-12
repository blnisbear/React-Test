import React, { useEffect, useState } from 'react'

function RandomColor() {
    const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    // อัปเดตสีพื้นหลังของ body ทุกครั้งที่ color เปลี่ยน
    document.body.style.backgroundColor = color;

    return () => {
      // รีเซ็ตสีเมื่อ component ถูก unmount
      document.body.style.backgroundColor = "";
    };
  }, [color]);

  const getRandomColor = () => { //อ่านต่อ 
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("color",color);
    return color;
  };
  
  return (
    <div >
      <h1>Current Color: {color}</h1>
      <button  onClick={() => setColor(getRandomColor())}>
        Change Background Color
      </button>
    </div>
  )
}

export default RandomColor
