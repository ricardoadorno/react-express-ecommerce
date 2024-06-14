import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div >
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorFallback;
