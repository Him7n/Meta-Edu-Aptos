/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ukrwebprom (https://sketchfab.com/ukrwebprom)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/kim-low-poly-character-54a65f4408314f26a442b0e0084a2375
Title: Kim. low poly character
*/
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function P5(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('./assets/character/kim._low_poly_character4.glb')
    const { actions } = useAnimations(animations, group)
    ////console.log(props.rotation);

    useFrame((state, delta) => {

        //     // colliderRef.current.position = group.current.position;
        //     // ////console.log(colliderRef.current.position);
        //     // if (character.id === props.findme) {

        //     //     state.camera.position.copy(new THREE.Vector3(group.current.position.x, group.current.position.y + 5, group.current.position.z + 6));
        //     //     state.camera.lookAt(new THREE.Vector3(group.current.position.x, group.current.position.y + 2, group.current.position.z));
        //     //     // state.camera.rotation.copy(group.current.position);
        //     // }
        //     // ////console.log(group.current.position);
        //     // ////console.log(props.position);

        //     // ////console.log(group.current.position);
        // group.current.position.x = props.position[0];
        // group.current.position.y = props.position[1];
        // group.current.position.z = props.position[2];

        // group.current.rotation.y = props.rotation;

        //     // if (group.current.position.distanceTo(props.position) > 0.01) {
        //     //     const direction = group.current.position
        //     //         .clone()
        //     //         .sub(props.position)
        //     //         .normalize()
        //     //         .multiplyScalar(MOVEMENT_SPEED);
        //     //     group.current.position.sub(direction);
        //     //     group.current.lookAt(props.position);
        //     //     setAnimation("CharacterArmature|Run");
        //     // } else {

        //     //     setAnimation("CharacterArmature|Idle");
        //     // }
    });




    return (
        <group {...props} scale={1} position={[props.position[0], props.position[1], props.position[2]]} dispose={null} >
            <group name="Sketchfab_Scene"   >
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.019}>
                    <group name="d57fd2b855e74e54a6edc716bbcf2e71fbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Object_4">
                                    <primitive object={nodes._rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials.jeans}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_8"
                                        geometry={nodes.Object_8.geometry}
                                        material={materials.belt}
                                        skeleton={nodes.Object_8.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_9"
                                        geometry={nodes.Object_9.geometry}
                                        material={materials.shirt}
                                        skeleton={nodes.Object_9.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_10"
                                        geometry={nodes.Object_10.geometry}
                                        material={materials.sunglass}
                                        skeleton={nodes.Object_10.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_11"
                                        geometry={nodes.Object_11.geometry}
                                        material={materials.glass}
                                        skeleton={nodes.Object_11.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_12"
                                        geometry={nodes.Object_12.geometry}
                                        material={materials.hair}
                                        skeleton={nodes.Object_12.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_13"
                                        geometry={nodes.Object_13.geometry}
                                        material={materials.boots}
                                        skeleton={nodes.Object_13.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_14"
                                        geometry={nodes.Object_14.geometry}
                                        material={materials.skin}
                                        skeleton={nodes.Object_14.skeleton}
                                    />
                                    <group name="Object_6" />
                                    <group name="body" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('./assets/character/kim._low_poly_character4.glb')
