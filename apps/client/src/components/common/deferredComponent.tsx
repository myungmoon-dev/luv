import React, { ReactNode, useEffect, useState } from 'react';

interface IDeferredComponentProps {
  children: ReactNode;
  minWidth?: `min-w-[${string}]`;
  minHeight?: `min-h-[${string}]`;
  className?: string;
}

const DeferredComponent = ({
  children,
  minHeight,
  minWidth,
  className,
}: IDeferredComponentProps) => {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    // 200ms 지난 후 children Render
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) {
    return <div className={`${minHeight} ${minWidth} ${className}`}></div>;
  }

  return <>{children}</>;
};

export default DeferredComponent;
