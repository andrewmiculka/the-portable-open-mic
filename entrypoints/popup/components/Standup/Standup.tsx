import { useState, useRef } from 'react';
import talkingStandupSrc from '~/assets/images/Standup/animated.gif';
import staticStandupSrc from '~/assets/images/Standup/static.png';
import microphoneSrc from '~/assets/images/Standup/mic.png';
import Animalese from '@/entrypoints/popup/utils/animalese/animalese.js';
import './Standup.css';

const PITCH_MIN = 0.2;
const PITCH_MAX = 2;
const VOLUME_ON = 'volume_up';
const VOLUME_OFF = 'volume_off';

const Standup = () => {
    const audioRef = useRef<HTMLAudioElement>();
    const [isTalking, setIsTalking] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [joke, setJoke] = useState('I took your mom on a date to the Westminster Dog Show. . . . . . . She won.');

    const generateAudio = async () => {
        const synth = new Animalese();
        const audio = new Audio();
        audioRef.current = audio;
        await synth.init();
        audio.src = synth.textToAnimalese(joke, false, Math.random() * (PITCH_MAX - PITCH_MIN) + PITCH_MIN).dataURI;
        audio.onplaying = () => {
            setIsTalking(true);
        }
        audio.onpause = () => {
            setIsTalking(false);
        }
        audio.play();
    }

    useEffect(() => {
        if (audioRef?.current) {
            audioRef.current.muted = isMuted;
        }
    }, [isMuted]);

    useEffect(() => {
        generateAudio();
    }, [joke]);

    return (
        <section className="stage">
            <button className='volume-button' onClick={() => setIsMuted(!isMuted)}>
                <span className="material-symbols-outlined">
                    { isMuted ? VOLUME_OFF : VOLUME_ON }
                </span>
            </button>
            <img className='standup' src={isTalking ? talkingStandupSrc : staticStandupSrc } />
            <img className='microphone' src={microphoneSrc} />
        </section>
    )
};

export default Standup;
