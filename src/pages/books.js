import React from "react";
import { BooksInfo } from "../components/table-book";

export const Books = () => {
  return (
    <div className="PageAuthors">
      <div className="title">
        <h1>Welcome to Books Page !!</h1>
      </div>
      <div>
        <BooksInfo />
      </div>
    </div>
  );
};
