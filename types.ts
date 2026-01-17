
// Import React to provide access to the React namespace for type definitions
import React from 'react';

export interface PolicySectionData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}
