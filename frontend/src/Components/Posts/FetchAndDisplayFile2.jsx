import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For fetching file content
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // VSCode-like dark theme


const fetchFileContent = async (filename) => {
  try {
    const response = await axios.get(`http://localhost:5002/post/file/${filename}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching file content:", error);
    return ""; 
  }
};

const FetchAndDisplayFile2 = ({ fileUrl }) => {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    const getFileContent = async () => {
      const content = await fetchFileContent(fileUrl);
      setFileContent(content);
    };

    getFileContent();
  }, [fileUrl]);

  return (
    <SyntaxHighlighter data-theme="light"
    language="javascript"
    style={vscDarkPlus}
    className="p-3 mt-2 rounded "
    customStyle={{
      width: "650px",   // Set your desired width
      height: "auto",  // Set your desired height
      overflowY: "auto", // Enable scrolling for long code blocks
      overflowX: "auto",
      // Ensuring it matches VS Code theme background
    }}
  >
    {fileContent || "no code available"}
  </SyntaxHighlighter>
  );
};

export default FetchAndDisplayFile2;
