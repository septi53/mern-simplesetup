import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWorld.mjs';

const root = document.getElementById('root');
createRoot(root).render(<HelloWorld />);