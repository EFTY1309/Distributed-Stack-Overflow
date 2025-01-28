import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For fetching file content
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // VSCode-like dark theme


const fetchFileContent = async (filename) => {
  try {
    const response = await axios.get(`http://localhost:5002/post/file/${filename}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching file content from backend:", error);
    return "Error loading file content.";
  }
};

const FetchAndDisplayFile = ({ filename }) => {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    const getFileContent = async () => {
      const content = await fetchFileContent(filename);
      setFileContent(content);
    };

    getFileContent();
  }, [filename]);

  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="p-3 mt-2 rounded"
      customStyle={{
        width: "800px",
        height: "auto",
        overflowY: "auto",
        overflowX: "auto",
      }}
    >
      {fileContent || "No content available"}
    </SyntaxHighlighter>
  );
};

export default FetchAndDisplayFile;

