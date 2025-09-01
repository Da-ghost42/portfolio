import React from 'react';

// Simple inline SVG version of the provided Ghost Code logo
export const Logo: React.FC<{ className?: string }>=({ className })=> (
  <div className={`flex items-center gap-3 select-none ${className || ''}`}> 
    <svg width="40" height="40" viewBox="0 0 64 64" aria-label="Ghost icon" role="img" className="text-foreground">
      <path fill="currentColor" d="M32 4c-11.6 0-21 9.4-21 21v17.3c0 4.4 1.7 8.6 4.8 11.8a2.5 2.5 0 0 0 4.2-1.8v-.9c0-1.7 2-2.6 3.3-1.4l2.8 2.7c1 1 2.6 1 3.6 0l2.3-2.2c1-1 2.6-1 3.6 0l2.3 2.2c1 1 2.6 1 3.6 0l2.8-2.7c1.3-1.2 3.3-.3 3.3 1.4v.9c0 1 .4 2 1.2 2.6.9.7 2.2.6 3-.2A20.9 20.9 0 0 0 53 42.3V25C53 13.4 43.6 4 32 4Zm-9.5 25.2a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm19 0a5 5 0 1 1 0-10 5 5 0 0 1 0 10ZM28 37c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4Z"/>
    </svg>
    <span className="font-bold text-lg tracking-tight"><span className="text-primary">Da-ghost42</span>&nbsp;Portfolio</span>
  </div>
);
