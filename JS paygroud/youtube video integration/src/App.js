import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return <ReactPlayer url="https://youtu.be/ZbX4Ok9YX94?si=DjjNUigbGre__4sF" />;
};

export default App;
