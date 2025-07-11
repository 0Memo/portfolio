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
        <Canvas className={clsx('fixed inset-0 -z-10', className)}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset='dawn' />
        </Canvas>
    )
}

export default RenderModel