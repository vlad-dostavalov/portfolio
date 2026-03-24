"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";

export function LightboxImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handler);
    };
  }, [open, close]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`${className ?? ""} cursor-zoom-in`}
        onClick={() => setOpen(true)}
      />
      {open && createPortal(
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md">
          {/* Controls */}
          <div className="absolute top-0 right-0 z-10 flex items-center gap-1 p-3">
            <button
              onClick={() => transformRef.current?.zoomIn(0.5)}
              className="rounded-lg p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              title="Zoom in"
            >
              <ZoomIn className="size-5" />
            </button>
            <button
              onClick={() => transformRef.current?.zoomOut(0.5)}
              className="rounded-lg p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              title="Zoom out"
            >
              <ZoomOut className="size-5" />
            </button>
            <button
              onClick={() => transformRef.current?.resetTransform()}
              className="rounded-lg p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              title="Reset zoom"
            >
              <RotateCcw className="size-5" />
            </button>
            <div className="w-px h-5 bg-white/20 mx-1" />
            <button
              onClick={close}
              className="rounded-lg p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              title="Close"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Zoomable image */}
          <TransformWrapper
            ref={transformRef}
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            centerOnInit
            doubleClick={{ mode: "zoomIn", step: 0.7 }}
            wheel={{ step: 0.15 }}
            panning={{ velocityDisabled: true }}
          >
            <TransformComponent
              wrapperStyle={{
                width: "100%",
                height: "100%",
              }}
              contentStyle={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="max-h-[90vh] max-w-[90vw] object-contain select-none"
                draggable={false}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>,
        document.body
      )}
    </>
  );
}
