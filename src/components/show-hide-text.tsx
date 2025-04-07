import { useEffect, useState } from "react";

export function ShowHideText() {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <button onClick={handleClick}>
        {isShow ? "Click to Hide Text" : "Click to Show Text"}
      </button>
      {isShow ? <ShowText /> : <HideText />}
    </div>
  );
}

function HideText() {
  useEffect(() => {
    console.log("Hide Text is MOUNTED");
    return () => {
      console.log("Hide Text is UNMOUNTED");
    };
  }, []);
  return <p>Hide Text</p>;
}

function ShowText() {
  useEffect(() => {
    console.log("Show Text is MOUNTED");
    return () => {
      console.log("Show Text is UNMOUNTED");
    };
  }, []);
  return <p>Show Text</p>;
}
