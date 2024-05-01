import React, { useState, useCallback } from 'react';

const DraggableModal = ({ children, onDragStart, onDragEnd, style }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const startDrag = useCallback((e) => {
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
        if (onDragStart) {
            onDragStart();
        }
    }, [position, onDragStart]);

    const onDrag = useCallback((e) => {
        if (isDragging) {
            const newPosition = {
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            };
            setPosition(newPosition);
        }
    }, [isDragging, offset]);

    const stopDrag = useCallback(() => {
        setIsDragging(false);
        if (onDragEnd) {
            onDragEnd();
        }
    }, [onDragEnd]);

    return (
        <div
            style={{
                cursor: isDragging ? 'grabbing' : 'grab',
                position: 'fixed',
                top: position.y,
                left: position.x,
                zIndex: 1000, 
                backgroundColor: 'transparent', 
                ...style
            }}
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
        >
            {children}
        </div>
    );
};

export default DraggableModal;
