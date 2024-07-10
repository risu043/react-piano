import React, { useState } from 'react';
import * as Tone from 'tone';
import './VolumeControl.css';

const VolumeControl: React.FC<{ volume: Tone.Volume }> = ({ volume }) => {
  const [volumeLevel, setVolumeLevel] = useState<number>(0);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolumeLevel(newVolume);
    volume.volume.value = newVolume;
  };

  return (
    <div className="volume-control">
      <label htmlFor="volume">Volume: </label>
      <input
        id="volume"
        type="range"
        min="-20"
        max="0"
        step="1"
        value={volumeLevel}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default VolumeControl;
