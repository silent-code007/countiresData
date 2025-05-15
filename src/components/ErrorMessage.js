// src/components/ErrorMessage.jsx
import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center p-4 text-red-800 border-l-4 border-red-500 bg-red-50 rounded-md">
      <AlertCircle className="h-5 w-5 mr-2" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;