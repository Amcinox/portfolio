"use client"
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
    className?: string;
    petalCount?: number;
    starCount?: number;
    compact?: boolean; // smaller/lighter variant for footer
}

/* ---- shared texture caches (avoids re-creating between instances) ---- */
const petalTexCache = new Map<string, THREE.Texture>();
let starTexCache: THREE.Texture | null = null;

/**
 * Creates a canvas texture shaped like a soft sakura petal — cached.
 */
function createPetalTexture(color: string, size = 64): THREE.Texture {
    if (petalTexCache.has(color)) return petalTexCache.get(color)!;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.38;

    ctx.save();
    ctx.translate(cx, cy);
    for (let i = 0; i < 5; i++) {
        ctx.rotate((Math.PI * 2) / 5);
        ctx.beginPath();
        ctx.ellipse(0, -r * 0.4, r * 0.45, r * 0.7, 0, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.55;
        ctx.fill();
    }
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 0.35);
    grad.addColorStop(0, "#fff");
    grad.addColorStop(1, "transparent");
    ctx.fillStyle = grad;
    ctx.arc(0, 0, r * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    petalTexCache.set(color, tex);
    return tex;
}

/**
 * Creates a soft circular glow texture for stars — cached.
 */
function createStarTexture(size = 32): THREE.Texture {
    if (starTexCache) return starTexCache;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const cx = size / 2;
    const grad = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.3, "rgba(255,255,255,0.6)");
    grad.addColorStop(0.7, "rgba(200,220,255,0.15)");
    grad.addColorStop(1, "rgba(200,220,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    starTexCache = tex;
    return tex;
}

export default function SakuraParticleField({
    className,
    petalCount = 250,
    starCount = 500,
    compact = false,
}: Props) {
    const mountRef = useRef<HTMLDivElement>(null);
    const visibleRef = useRef(true);

    useEffect(() => {
        if (!mountRef.current) return;
        const container = mountRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        /* ---- IntersectionObserver: pause when off-screen ---- */
        const observer = new IntersectionObserver(
            ([entry]) => { visibleRef.current = entry.isIntersecting; },
            { threshold: 0 }
        );
        observer.observe(container);

        // Renderer — no antialias needed for point sprites
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        container.appendChild(renderer.domElement);

        // Scene & camera
        const scene = new THREE.Scene();
        const fov = compact ? 60 : 75;
        const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 3000);
        camera.position.z = compact ? 400 : 800;

        // ---- Sakura petals (3 colour groups instead of 5) ----
        const petalColors = ["#FFB7C5", "#FF8FA3", "#FFD1DC"];
        const petalTextures = petalColors.map((c) => createPetalTexture(c));

        const spread = compact ? 600 : 1600;
        const petalGroups: THREE.Points[] = [];
        const petalVelocities: Float32Array[] = [];

        petalTextures.forEach((tex, gi) => {
            const count = Math.floor(petalCount / petalTextures.length);
            const positions = new Float32Array(count * 3);
            const sizes = new Float32Array(count);
            const velocities = new Float32Array(count * 3);

            for (let i = 0; i < count; i++) {
                positions[i * 3] = (Math.random() - 0.5) * spread;
                positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
                positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.6;
                sizes[i] = compact ? 4 + Math.random() * 6 : 6 + Math.random() * 10;
                velocities[i * 3] = (Math.random() - 0.5) * 0.15;
                velocities[i * 3 + 1] = -(0.15 + Math.random() * 0.35);
                velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.05;
            }

            const geo = new THREE.BufferGeometry();
            geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

            const mat = new THREE.PointsMaterial({
                map: tex,
                size: sizes[0],
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.35 + gi * 0.08,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
            });

            const pts = new THREE.Points(geo, mat);
            scene.add(pts);
            petalGroups.push(pts);
            petalVelocities.push(velocities);
        });

        // ---- Stars ----
        const starTex = createStarTexture();
        const starPositions = new Float32Array(starCount * 3);
        const starSpread = compact ? 800 : 2500;

        for (let i = 0; i < starCount; i++) {
            starPositions[i * 3] = (Math.random() - 0.5) * starSpread;
            starPositions[i * 3 + 1] = (Math.random() - 0.5) * starSpread;
            starPositions[i * 3 + 2] = (Math.random() - 0.5) * starSpread;
        }

        const starGeo = new THREE.BufferGeometry();
        starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

        const starMat = new THREE.PointsMaterial({
            map: starTex,
            size: 2,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.7,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            color: 0xe8e6e3,
        });
        const starPoints = new THREE.Points(starGeo, starMat);
        scene.add(starPoints);

        // Blue accent stars — small fixed amount
        const blueCount = Math.floor(starCount * 0.1);
        const bluePositions = new Float32Array(blueCount * 3);
        for (let i = 0; i < bluePositions.length; i++) {
            bluePositions[i] = (Math.random() - 0.5) * starSpread;
        }
        const blueGeo = new THREE.BufferGeometry();
        blueGeo.setAttribute("position", new THREE.BufferAttribute(bluePositions, 3));
        const blueStarMat = new THREE.PointsMaterial({
            map: starTex,
            size: 2.5,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.35,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            color: 0x4fc3f7,
        });
        const blueStarPoints = new THREE.Points(blueGeo, blueStarMat);
        scene.add(blueStarPoints);

        // ---- Animation ----
        let time = 0;
        let animId = 0;
        const halfSpread = spread / 2;

        const animate = () => {
            animId = requestAnimationFrame(animate);

            // Skip rendering when element is off-screen
            if (!visibleRef.current) return;

            time += 0.008;

            const windX = Math.sin(time * 0.3) * 0.12;
            const windZ = Math.cos(time * 0.2) * 0.04;

            petalGroups.forEach((group, gi) => {
                const posAttr = group.geometry.getAttribute("position") as THREE.BufferAttribute;
                const vel = petalVelocities[gi];
                const arr = posAttr.array as Float32Array;

                for (let i = 0; i < posAttr.count; i++) {
                    const ix = i * 3;
                    arr[ix] += vel[ix] + windX + Math.sin(time + i * 0.1) * 0.06;
                    arr[ix + 1] += vel[ix + 1];
                    arr[ix + 2] += vel[ix + 2] + windZ;

                    if (arr[ix + 1] < -halfSpread) {
                        arr[ix + 1] = halfSpread;
                        arr[ix] = (Math.random() - 0.5) * spread;
                        arr[ix + 2] = (Math.random() - 0.5) * spread * 0.6;
                    }
                    if (arr[ix] > halfSpread) arr[ix] = -halfSpread;
                    if (arr[ix] < -halfSpread) arr[ix] = halfSpread;
                }
                posAttr.needsUpdate = true;
                group.rotation.y += 0.00008 * (gi + 1);
            });

            starPoints.rotation.y += 0.00008;
            starPoints.rotation.x += 0.00003;
            blueStarPoints.rotation.y -= 0.0001;

            starMat.opacity = 0.6 + Math.sin(time * 1.5) * 0.1;

            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            petalGroups.forEach((g) => {
                g.geometry.dispose();
                (g.material as THREE.PointsMaterial).dispose();
            });
            starGeo.dispose();
            starMat.dispose();
            blueGeo.dispose();
            blueStarMat.dispose();
            renderer.dispose();
        };
    }, [petalCount, starCount, compact]);

    return (
        <div
            ref={mountRef}
            className={className}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}
