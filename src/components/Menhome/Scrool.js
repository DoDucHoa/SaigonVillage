import React from 'react'

function Scrool() {
    return (
        <>
            <div className="loader-wrap" style={{ backgroundColor: 'rgb(23, 24, 25)' }}>
                <div className="preloader">
                    <div className="preloader-close">x</div>
                    <div id="handle-preloader" className="handle-preloader">
                        <div className="animation-preloader">
                            <div className="spinner"></div>
                            <div className="txt-loading">
                                <span data-text-preloader="S" className="letters-loading">
                                    S
                                </span>
                                <span data-text-preloader="A" className="letters-loading">
                                    A
                                </span>
                                <span data-text-preloader="I" className="letters-loading">
                                    I
                                </span>
                                <span data-text-preloader="G" className="letters-loading">
                                    G
                                </span>
                                <span data-text-preloader="O" className="letters-loading">
                                    O
                                </span>
                                <span data-text-preloader="N" className="letters-loading">
                                    N
                                </span>
                                <span data-text-preloader=" " className="letters-loading">
                                    &nbsp;
                                </span>
                                <span data-text-preloader="V" className="letters-loading">
                                    V
                                </span>
                                <span data-text-preloader="I" className="letters-loading">
                                    I
                                </span>
                                <span data-text-preloader="L" className="letters-loading">
                                    L
                                </span>
                                <span data-text-preloader="L" className="letters-loading">
                                    L
                                </span>
                                <span data-text-preloader="A" className="letters-loading">
                                    A
                                </span>
                                <span data-text-preloader="G" className="letters-loading">
                                    G
                                </span>
                                <span data-text-preloader="E" className="letters-loading">
                                    E
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scrool