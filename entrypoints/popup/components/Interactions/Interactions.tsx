import { useState } from "react";
import './Interactions.scss';

const INTERACTIONS_CLASS = 'interactions';
const INTERACTIONS_BUTTON_SECTION_CLASS = `${INTERACTIONS_CLASS}__button-section`;
const INTERACTION_BUTTON_CLASS = `${INTERACTIONS_BUTTON_SECTION_CLASS}__button`;

const Interactions = () => {
    return (
        <section className={INTERACTIONS_CLASS}>
            <div className={INTERACTIONS_BUTTON_SECTION_CLASS}>
                <button className={`${INTERACTION_BUTTON_CLASS} ${INTERACTION_BUTTON_CLASS}--boo`}>
                    <i className="fa-solid fa-hand-middle-finger"></i>
                </button>
                <button className={`${INTERACTION_BUTTON_CLASS} ${INTERACTION_BUTTON_CLASS}--cough`}>
                    DRY COUGH
                </button>
                <button className={`${INTERACTION_BUTTON_CLASS} ${INTERACTION_BUTTON_CLASS}--yay`}>
                    <i className="fa-solid fa-hands-clapping"></i>
                </button>
            </div>
        </section>
    )
}

export default Interactions;
