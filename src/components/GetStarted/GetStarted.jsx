import React from 'react';
import './GetStarted.css';

const GetStart = () => {
    return (
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get Started with Popguys</span>
                    <span className="secondaryText">
                        Subscribe and find super attractive price quotes from us.
                        <br />
                        Find your residence soon.
                    </span>
                    <button className="button">
                        <a href="https://github.com/supermonkeyguys">Get Start</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetStart;