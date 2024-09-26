// animalese.js
// (C) 2014 Josh Simmons
// http://github.com/acedio/animalese.js

import RIFFWAVE from './riffwave.tsx';
import AnimaleseAlphabet from '~/assets/audio/Animalese/animalese.wav';

export default class Animalese {
  letters_file: string = '~/assets/audio/Animalese/animalese.wav';
  onload?: Function;
  letter_library: Uint8Array | [] = [];

  constructor(onload?: Function) {
    this.onload = onload;
  }

  init = async () => {
    const res = await this.getAnimaleseWav();
    this.letter_library = res;
  }

  getAnimaleseWav = (): Promise<Uint8Array> => {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', AnimaleseAlphabet);
      xhr.responseType = 'arraybuffer';
      xhr.onload = () => {
        const res = new Uint8Array(xhr.response);
        resolve(res);
      }
      xhr.send();
    });
  }

  textToAnimalese = (script: string, shorten: boolean, pitch: number) => {
    function shortenWord(str: string) {
      if (str.length > 1) {
        return str[0] + str[str.length - 1];
      }
      return str;
    }

    const processed_script = shorten
      ? script.replace(/[^a-z]/gi, ' ').split(' ').map(shortenWord).join('')
      : script;

    const data: number[] = [];

    const sample_freq = 44100;
    const library_letter_secs = 0.15;
    const output_letter_secs = 0.075;
    const library_samples_per_letter = Math.floor(library_letter_secs * sample_freq);
    const output_samples_per_letter = Math.floor(output_letter_secs * sample_freq);

    for (var c_index = 0; c_index < processed_script.length; c_index++) {
      const c = processed_script.toUpperCase()[c_index];
      if (c >= 'A' && c <= 'Z') {
        const library_letter_start = library_samples_per_letter * (c.charCodeAt(0) - 'A'.charCodeAt(0));

        for (var i = 0; i < output_samples_per_letter; i++) {
          data[c_index * output_samples_per_letter + i] = this.letter_library?.[44 + library_letter_start + Math.floor(i * pitch)];
        }
      } else { // non pronouncable character or space
        for (var i = 0; i < output_samples_per_letter; i++) {
          data[c_index * output_samples_per_letter + i] = 127;
        }
      }
    }

    const wave = new RIFFWAVE();
    wave.header.sampleRate = sample_freq;
    wave.header.numChannels = 1;
    wave.Make(data);

    return wave;
  }
}
