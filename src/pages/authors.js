import React from "react";
import { AuthorsInfo } from "../components/table-author";

export const Authors = () => {
  return (
    <div className="PageAuthors">
      <div className="title">
        <h1>Welcome to Authors Page !!</h1>
      </div>
      <div>
        <AuthorsInfo />
      </div>
    </div>
  );
};
