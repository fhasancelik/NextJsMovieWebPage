"use client";
import { useState, useEffect } from "react";
import { CiDark,CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  const themeMode = theme === "system" ? systemTheme : theme;
  //console.log(themeMode);
  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <CiLight onClick={()=>setTheme('light')} size={25} className="cursor-pointer" />
        ) : (
          <CiDark onClick={()=>setTheme('dark')} size={25} className="cursor-pointer" />
        ))}

      
    </div>
  );
};

export default ThemeSwitch;
