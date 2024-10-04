import { useState } from 'react';
import { audienceMembers, table } from '@/assets/images/Audience';
import { clsx } from 'clsx';
import './Audience.scss';

const AUDIENCE_CLASS = 'audience';
const TABLE_CLASS = `${AUDIENCE_CLASS}__table`;

const Audience = () => {
    const [isReacting, setIsReacting] = useState(false);
    const audienceMemberClassNames = clsx(
        `${AUDIENCE_CLASS}__member`,
        isReacting && `${AUDIENCE_CLASS}__member--reacting`
    );

    const tableImg = (offset: number) => {
        return <img src={table} className={TABLE_CLASS} style={{ left: offset }} />
    } 

    const person = (src: string, id: number) => {
        const pctOffset = id * 25;
        return <img src={src} className={audienceMemberClassNames} style={{ left: `calc(${pctOffset}% - 10px)` }} />
    }

    return (
        <section className={AUDIENCE_CLASS}>
            { tableImg(0) }
            { tableImg(130) }
            { tableImg(240) }
            { audienceMembers.map((image: string , idx: number) => person(image, idx) )}
        </section>
    )
};

export default Audience;