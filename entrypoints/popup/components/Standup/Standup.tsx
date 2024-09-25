import { useState } from 'react';
import talkingStandupSrc from '~/assets/images/Standup/animated.gif';
import staticStandupSrc from '~/assets/images/Standup/static.png';
import microphoneSrc from '~/assets/images/Standup/mic.png';
import Animalese from '@/entrypoints/popup/utils/animalese/animalese.js';
import './Standup.css';

const Standup = () => {
    const [isTalking, setIsTalking] = useState(false);

    return (
        <section className="stage">
            <img className='standup' src={isTalking ? talkingStandupSrc : staticStandupSrc} />
            <img className='microphone' src={microphoneSrc} />
        </section>
    )
};

export default Standup;
