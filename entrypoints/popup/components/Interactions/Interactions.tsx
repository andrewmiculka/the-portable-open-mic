import { useState } from "react";
import './Interactions.css';

const THUMB_UP = 'thumb_up';
const THUMB_DOWN = 'thumb_down';

const Interactions = () => {
    return (
        <section className="interactions">
            <div className="buttons">
                <button className='interaction-button'>
                    <span className="material-symbols-outlined">
                        { THUMB_DOWN }
                    </span>
                </button>
                <button className='interaction-button'>
                    DRY COUGH
                </button>
                <button className='interaction-button'>
                    <span className="material-symbols-outlined">
                        { THUMB_UP }
                    </span>
                </button>
            </div>
            <textarea rows={5} className="heckle-input"></textarea>
        </section>
    )
}

export default Interactions;
