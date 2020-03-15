import React, { useState, useEffect } from "react";

function App() {
  const [initialState, InteractState] = useState(0);
  useEffect(() => {
    console.log("Hii Iam Component will Mount");
    console.log("hii Iam component did mount");
    return () => {
      console.log("hii Iam component will update");
    };
  });
  return (
    <React.Fragment>
      <p>You Clicked On Button on {`${initialState}`} Times</p>
      <button
        onClick={() => {
          InteractState(initialState + 1);
        }}
      >
        Press
      </button>
    </React.Fragment>
  );
}

export default App;
