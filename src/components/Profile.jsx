import { useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <h1>This is Function Component</h1>
      <h2>name : {props.name}</h2>
      <p>count :{count}</p>
      <p>count2 :{count2}</p>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}
      >
        setCount
      </button>
    </div>
  );
};

export default Profile;
