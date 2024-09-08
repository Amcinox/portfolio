"use client"
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
export default function SakuraParticleField() {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mountRef.current) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        mountRef.current.appendChild(renderer.domElement)

        const geometry = new THREE.BufferGeometry()
        const vertices = []
        const sakuraColors = [0xFFB7C5, 0xFFC0CB, 0xFFD1DC]

        for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 2000
            const y = (Math.random() - 0.5) * 2000
            const z = (Math.random() - 0.5) * 2000
            vertices.push(x, y, z)
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

        const materials = sakuraColors.map(color => new THREE.PointsMaterial({ color, size: 4, transparent: true }))
        const sakuraGroups = materials.map(material => new THREE.Points(geometry, material))
        sakuraGroups.forEach(group => scene.add(group))

        camera.position.z = 1000

        const animate = () => {
            requestAnimationFrame(animate)
            sakuraGroups.forEach((group, index) => {
                group.rotation.x += 0.0003 * (index + 1)
                group.rotation.y += 0.0005 * (index + 1)
                group.position.y -= 0.1 * (index + 1)
                if (group.position.y < -1000) group.position.y = 1000
            })
            renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            if (mountRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                mountRef.current.removeChild(renderer.domElement)
            }
        }
    }, [])

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
}
