"use client"
import React, { useState, useEffect } from 'react';

const createFireFly = () => ({
    id: Math.random(),
    top: `${ Math.random() * 100 }%`,
    left: `${ Math.random() * 100 }%`,
    animationDuration: `${ Math.random() *5 + 5 }s`
});

const FireFliesBackground = () => {

    const [fireFlies, setFireflies ] = useState([]);

    useEffect(() => {
        const addFireflyPeriodically = () => {
            const newFirefly = createFireFly();
            setFireflies(currentFireflies => 
                [
                    ...currentFireflies.slice(-14),
                    newFirefly
                ]
            );
        };

        const interval = setInterval(addFireflyPeriodically, 1000);

        return () => clearInterval(interval)

    }, []);

    return (
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
                {
                    fireFlies.map((firefly) => {
                        return (
                                <div
                                    key={firefly.id}
                                    className="absolute rounded-full bg-firefly-radial w-[14px] h-[14px]"
                                    style={{
                                        top: firefly.top,
                                        left: firefly.left,
                                        animation: `move ${firefly.animationDuration} infinite alternate`,
                                    }}
                                >                                
                                </div>
                            )
                    })
                }
            </div>
    )
}

export default FireFliesBackground