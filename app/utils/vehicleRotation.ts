import { useState, useRef, MouseEvent, TouchEvent } from 'react';

export function useVehicleRotation(totalImages: number) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startXRef = useRef(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % totalImages);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        startXRef.current = e.clientX;
        e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const diff = e.clientX - startXRef.current;

        if (Math.abs(diff) > 30) {
            if (diff > 0) nextImage();
            else prevImage();
            startXRef.current = e.clientX;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setIsDragging(true);
        startXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const diff = e.touches[0].clientX - startXRef.current;

        if (Math.abs(diff) > 30) {
            if (diff > 0) nextImage();
            else prevImage();
            startXRef.current = e.touches[0].clientX;
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return {
        currentIndex,
        setCurrentIndex,
        isDragging,
        handlers: {
            onMouseDown: handleMouseDown,
            onMouseMove: handleMouseMove,
            onMouseUp: handleMouseUp,
            onMouseLeave: handleMouseUp,
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd,
        }
    };
}