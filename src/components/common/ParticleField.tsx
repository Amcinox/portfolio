"use client"
import { useEffect, useRef } from "react"
import * as THREE from 'three'

export default function ParticleField() {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mountRef.current) return

        const currentMountRef = mountRef.current; // Copy the value of mountRef.current

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        currentMountRef.appendChild(renderer.domElement)

        const geometry = new THREE.BufferGeometry()
        const vertices = []

        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000
            const y = (Math.random() - 0.5) * 2000
            const z = (Math.random() - 0.5) * 2000
            vertices.push(x, y, z)
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

        const material = new THREE.PointsMaterial({ color: 0x8A2BE2, size: 2, transparent: true })
        const particles = new THREE.Points(geometry, material)
        scene.add(particles)

        camera.position.z = 1000

        const animate = () => {
            requestAnimationFrame(animate)
            particles.rotation.x += 0.0005
            particles.rotation.y += 0.0005
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
            if (currentMountRef) {
                currentMountRef.removeChild(renderer.domElement)
            }
        }
    }, [])

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
}