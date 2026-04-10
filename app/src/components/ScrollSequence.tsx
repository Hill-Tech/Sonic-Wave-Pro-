"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 174;
const IMG_WIDTH = 1280;
const IMG_HEIGHT = 720;

function getFrameSrc(index: number): string {
  const num = String(Math.min(Math.max(index, 1), FRAME_COUNT)).padStart(3, "0");
  return `/frames/ezgif-frame-${num}.jpg`;
}

interface TextOverlay {
  text: string;
  subtitle?: string;
  startProgress: number;
  endProgress: number;
  position: "left" | "center" | "right";
}

const TEXT_OVERLAYS: TextOverlay[] = [
  {
    text: "Sound Redefined",
    subtitle: "SonicWave Pro",
    startProgress: 0.05,
    endProgress: 0.2,
    position: "center",
  },
  {
    text: "Precision Engineered",
    subtitle: "Every Component Matters",
    startProgress: 0.25,
    endProgress: 0.42,
    position: "left",
  },
  {
    text: "40mm Custom Drivers",
    subtitle: "Adaptive Noise Cancellation",
    startProgress: 0.47,
    endProgress: 0.65,
    position: "right",
  },
  {
    text: "60-Hour Battery Life",
    subtitle: "All-Day Immersion",
    startProgress: 0.7,
    endProgress: 0.88,
    position: "center",
  },
];

function getPositionClasses(position: "left" | "center" | "right"): string {
  switch (position) {
    case "left":
      return "items-start text-left pl-[8%]";
    case "right":
      return "items-end text-right pr-[8%]";
    case "center":
      return "items-center text-center";
  }
}

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];

    if (!canvas || !ctx || !img) return;

    // Set canvas dimensions to match container
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, rect.width, rect.height);

    // Cover fill: maintain aspect ratio
    const imgAspect = IMG_WIDTH / IMG_HEIGHT;
    const canvasAspect = rect.width / rect.height;

    let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

    if (canvasAspect > imgAspect) {
      drawWidth = rect.width;
      drawHeight = rect.width / imgAspect;
      drawX = 0;
      drawY = (rect.height - drawHeight) / 2;
    } else {
      drawHeight = rect.height;
      drawWidth = rect.height * imgAspect;
      drawX = (rect.width - drawWidth) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Draw frame on scroll
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const frameIndex = Math.min(
      Math.floor(progress * FRAME_COUNT),
      FRAME_COUNT - 1
    );

    if (frameIndex !== currentFrameRef.current && imagesLoaded) {
      currentFrameRef.current = frameIndex;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        renderFrame(frameIndex);
      });
    }
  });

  // Initial render once images are loaded
  useEffect(() => {
    if (imagesLoaded) {
      renderFrame(0);
    }
  }, [imagesLoaded, renderFrame]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (imagesLoaded) {
        renderFrame(currentFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, renderFrame]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: "500vh" }}
      aria-label="Product animation sequence"
    >
      {/* Sticky canvas container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />

        {/* Vignette overlay for seamless blending */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, #0a0a0a 100%)",
          }}
        />

        {/* Text overlays */}
        {TEXT_OVERLAYS.map((overlay, index) => (
          <TextOverlayItem
            key={index}
            overlay={overlay}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function TextOverlayItem({
  overlay,
  scrollYProgress,
}: {
  overlay: TextOverlay;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const { startProgress, endProgress } = overlay;
  const mid = (startProgress + endProgress) / 2;
  const fadeInEnd = startProgress + (mid - startProgress) * 0.5;
  const fadeOutStart = mid + (endProgress - mid) * 0.5;

  const opacity = useTransform(
    scrollYProgress,
    [startProgress, fadeInEnd, fadeOutStart, endProgress],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [startProgress, fadeInEnd, fadeOutStart, endProgress],
    [60, 0, 0, -60]
  );

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 flex flex-col justify-center ${getPositionClasses(overlay.position)}`}
      style={{ opacity, y }}
    >
      <h2 className="heading-xl text-4xl sm:text-5xl md:text-7xl text-white/90">
        {overlay.text}
      </h2>
      {overlay.subtitle && (
        <p className="body-text mt-3 text-base sm:text-lg md:text-xl tracking-wide text-white/50">
          {overlay.subtitle}
        </p>
      )}
    </motion.div>
  );
}
