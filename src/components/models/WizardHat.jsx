/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: baccouche mohamed (https://sketchfab.com/baccouchemohamed)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/wizard-hat-cf27374af41946ab87149d4ee7bb1f34
Title: Wizard Hat
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {

    const { nodes, materials } = useGLTF('/models/wizard_hat.glb')

    const modelRef = useRef();

    useFrame(() => {
        modelRef.current.rotation.y += 0.010;
    })

    return (
        <group {...props}
            dispose={null}
            scale={[100, 100, 100]}
            rotation={[0.4, -1.5, 0]}
            position={[0, 0, 0]}
            ref={modelRef}
        >
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Hat_Final_M_Wizard_Hat_0.geometry}
            material={materials.M_Wizard_Hat}
            scale={0.01}
        />
        </group>
    )
}

useGLTF.preload('/models/wizard_hat.glb')