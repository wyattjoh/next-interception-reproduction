import React from "react";

import { Common } from "../components/common";

export default ({ children, modal }) => {
  return (
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
      </head>
      <body className="prose max-w-3xl mx-auto my-8">
        {children}
        {modal}
        <Common />
      </body>
    </html>
  );
};
