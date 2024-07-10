import React from 'react';
import { pianoKeys } from './sounds/sound';
import PianoKey from './components/PianoKey';
import './components/PianoKey.css';
import './Piano.css';
import VolumeControl from './components/VolumeControl';
import * as Tone from 'tone';

const volume = new Tone.Volume(0).toDestination();
const sampler = new Tone.Sampler({
  urls: {
    C4: 'C4.mp3',
    'D#4': 'Ds4.mp3',
    'F#4': 'Fs4.mp3',
    A4: 'A4.mp3',
  },
  release: 1,
  baseUrl: 'https://tonejs.github.io/audio/salamander/',
}).connect(volume);

const handleTrigger = (note: string) => {
  sampler.triggerAttackRelease(note, '8n');
};

const Piano: React.FC = () => {
  return (
    <>
      <div className="piano">
        {pianoKeys.map(({ note, color }) => (
          <PianoKey
            key={note}
            note={note}
            color={color}
            onClick={handleTrigger}
          />
        ))}
      </div>
      <VolumeControl volume={volume} />
    </>
  );
};

export default Piano;
