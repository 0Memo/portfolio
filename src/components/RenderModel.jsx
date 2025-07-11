"use client"
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef, useEffect } from "react";
import clsx from 'clsx';

const RenderModel = ({children, className}) => {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current?.querySelector("canvas");

        if (!canvas) return;

        const handleContextLost = (event) => {
            event.preventDefault();
            console.warn("WebGL context lost, attempting recovery...");
        };

        canvas.addEventListener("webglcontextlost", handleContextLost, false);

        return () => {
            canvas.removeEventListener("webglcontextlost", handleContextLost);
        };
    }, []);

    return (
        <div ref={canvasRef} className={clsx('w-screen h-screen relative -z-10', className)}>
            <Canvas>
                <Suspense fallback={null}>
                    {children}
                </Suspense>
                <Environment preset='dawn' />
            </Canvas>
        </div>
    )
}

export default RenderModel