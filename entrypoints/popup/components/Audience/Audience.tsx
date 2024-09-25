import { useState } from 'react';
import { audienceMembers, table } from '@/assets/images/Audience';
import { clsx } from 'clsx';
import './Audience.css';

const Audience = () => {
    const [isReacting, setIsReacting] = useState(false);
    const audienceMemberClassNames = clsx(
        'audience-member',
        isReacting && 'audience-member--reacting'
    );

    const tableImg = (offset: number) => {
        return <img src={table} className='table' style={{ left: offset }} />
    } 

    const person = (src: string, id: number) => {
        const pctOffset = id * 25;
        return <img src={src} className={audienceMemberClassNames} style={{ left: `calc(${pctOffset}% - 10px)` }} />
    }

    return (
        <section className="audience">
            { tableImg(0) }
            { tableImg(130) }
            { tableImg(240) }
            { audienceMembers.map((image: string , idx: number) => person(image, idx) )}
        </section>
    )
};

export default Audience;