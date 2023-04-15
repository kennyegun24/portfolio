import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [forwardDirection, setForwardDirection] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (forwardDirection) {
                if (currentIndex < text.length) {
                    setCurrentText(currentText + text[currentIndex]);
                    setCurrentIndex(currentIndex + 1);
                } else {
                    setForwardDirection(false);
                    setCurrentIndex(currentIndex - 1);
                }
            } else {
                if (currentIndex >= 0) {
                    setCurrentText(currentText.slice(0, -1));
                    setCurrentIndex(currentIndex - 1);
                } else {
                    setForwardDirection(true);
                    setCurrentIndex(currentIndex + 1);
                }
            }
        }, 200);

        return () => clearTimeout(timeoutId);
    }, [currentText, currentIndex, forwardDirection, text]);

    return <h3>{currentText}</h3>;
};

export default Typewriter;