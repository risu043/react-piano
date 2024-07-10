import React from 'react';
import { PianoKeyProps } from '../types';
import './PianoKey.css';

const PianoKey: React.FC<PianoKeyProps> = ({ note, color, onClick }) => {
  return (
    <button
      className={`${color}-key ${note.replace('#', 'sharp')}`}
      onClick={() => onClick(note)}
    ></button>
  );
};

export default PianoKey;
