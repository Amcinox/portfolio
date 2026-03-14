"use client"
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SakuraParticleField() {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mountRef.current) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        mountRef.current.appendChild(renderer.domElement)

        // Sakura petals (pink tones)
        const sakuraGeometry = new THREE.BufferGeometry()
        const sakuraVertices = []
        const sakuraColors = [
            new THREE.Color(0xFFB7C5), // sakura pink
            new THREE.Color(0xFF8FA3), // deep sakura
            new THREE.Color(0xFFD1DC), // light sakura
        ]

        for (let i = 0; i < 3000; i++) {
            const x = (Math.random() - 0.5) * 2000
            const y = (Math.random() - 0.5) * 2000
            const z = (Math.random() - 0.5) * 2000
            sakuraVertices.push(x, y, z)
        }
        sakuraGeometry.setAttribute('position', new THREE.Float32BufferAttribute(sakuraVertices, 3))

        // Stars (white/blue tones for Star Wars feel)
        const starsGeometry = new THREE.BufferGeometry()
        const starsVertices = []
        for (let i = 0; i < 2000; i++) {
            const x = (Math.random() - 0.5) * 3000
            const y = (Math.random() - 0.5) * 3000
            const z = (Math.random() - 0.5) * 3000
            starsVertices.push(x, y, z)
        }
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3))

        // Create sakura particle groups
        const sakuraMaterials = sakuraColors.map(color =>
            new THREE.PointsMaterial({ color, size: 3, transparent: true, opacity: 0.6 })
        )
        const sakuraGroups = sakuraMaterials.map(material => new THREE.Points(sakuraGeometry, material))
        sakuraGroups.forEach(group => scene.add(group))

        // Create star particles
        const starMaterial = new THREE.PointsMaterial({ color: 0xE8E6E3, size: 1.5, transparent: true, opacity: 0.8 })
        const stars = new THREE.Points(starsGeometry, starMaterial)
        scene.add(stars)

        // Blue accent stars
        const blueStarMaterial = new THREE.PointsMaterial({ color: 0x4FC3F7, size: 2, transparent: true, opacity: 0.4 })
        const blueStars = new THREE.Points(starsGeometry, blueStarMaterial)
        scene.add(blueStars)

        camera.position.z = 1000

        const animate = () => {
            requestAnimationFrame(animate)

            // Sakura falling + swaying
            sakuraGroups.forEach((group, index) => {
                group.rotation.x += 0.0002 * (index + 1)
                group.rotation.y += 0.0003 * (index + 1)
                group.position.y -= 0.08 * (index + 1)
                if (group.position.y < -1000) group.position.y = 1000
            })

            // Slow star rotation for space feel
            stars.rotation.y += 0.0001
            stars.rotation.x += 0.00005
            blueStars.rotation.y -= 0.00015

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
            // Dispose of Three.js objects
            sakuraGeometry.dispose()
            starsGeometry.dispose()
            sakuraMaterials.forEach(m => m.dispose())
            starMaterial.dispose()
            blueStarMaterial.dispose()
            renderer.dispose()
        }
    }, [])

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />
}
