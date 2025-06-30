import React, { useEffect, useRef, useState } from 'react';
import styles from './RotatingRays.module.css';

const RotatingRays = ({ ColorOne, ColorTwo, ColorThree }) => {
  const rayGroupRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle resize to make the component responsive
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    // Initial measurement
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    const rayGroup = rayGroupRef.current;
    if (!rayGroup || dimensions.width === 0 || dimensions.height === 0) return;

    // Clear any existing rays
    while (rayGroup.firstChild) {
      rayGroup.removeChild(rayGroup.firstChild);
    }

    // Constants
    const numRays = 20;
    const largerRayColor = ColorOne;
    const smallerRayColor = ColorTwo;
    const containerWidth = dimensions.width;
    const containerHeight = dimensions.height;

    // Calculate maximum radius needed to reach corners of container
    const maxRadius = Math.sqrt(Math.pow(containerWidth / 2, 2) + Math.pow(containerHeight / 2, 2));

    // Create rays
    for (let i = 0; i < numRays; i++) {
      const angle = (i * 360 / numRays);

      // Create a group for each ray
      const rayElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
      rayElement.setAttribute("data-angle", angle);
      rayElement.setAttribute("transform", `rotate(${angle})`);

      // Constants for ray dimensions
      const innerWidth = 15;       // Width at the center
      const outerWidth = 150;      // Width at the outer edge
      const totalLength = maxRadius + 20;  // Length of ray to ensure it reaches corners

      // Define ratio for the division (e.g., 1/3 and 2/3)
      const ratio = 1 / 3;  // Smaller section is 1/3, larger is 2/3

      // Left section (1/3 of the width - smaller ray)
      const leftSection = document.createElementNS("http://www.w3.org/2000/svg", "path");

      // Calculate points for the left section (1/3 of width)
      const lx1 = 0;
      const ly1 = -innerWidth / 2;
      const lx2 = totalLength;
      const ly2 = -outerWidth / 2;
      const lx3 = totalLength;
      const ly3 = -outerWidth / 2 + (outerWidth * ratio);
      const lx4 = 0;
      const ly4 = -innerWidth / 2 + (innerWidth * ratio);

      const leftPathData = `M${lx1},${ly1} L${lx2},${ly2} L${lx3},${ly3} L${lx4},${ly4} Z`;

      leftSection.setAttribute("d", leftPathData);
      leftSection.setAttribute("fill", smallerRayColor);

      // Right section (2/3 of the width - larger ray)
      const rightSection = document.createElementNS("http://www.w3.org/2000/svg", "path");

      // Calculate points for the right section (2/3 of width)
      const rx1 = 0;
      const ry1 = -innerWidth / 2 + (innerWidth * ratio);
      const rx2 = totalLength;
      const ry2 = -outerWidth / 2 + (outerWidth * ratio);
      const rx3 = totalLength;
      const ry3 = outerWidth / 2;
      const rx4 = 0;
      const ry4 = innerWidth / 2;

      const rightPathData = `M${rx1},${ry1} L${rx2},${ry2} L${rx3},${ry3} L${rx4},${ry4} Z`;

      rightSection.setAttribute("d", rightPathData);
      rightSection.setAttribute("fill", largerRayColor);

      // Add sections to the ray
      rayElement.appendChild(leftSection);
      rayElement.appendChild(rightSection);

      // Add the ray to the group
      rayGroup.appendChild(rayElement);
    }

    // Animation function
    const updateRays = () => {
      const currentTime = Date.now();
      const angle = (currentTime / 100) % 360;

      rayGroup.setAttribute("transform", `translate(${containerWidth / 2}, ${containerHeight / 2}) rotate(${angle})`);

      animationRef.current = requestAnimationFrame(updateRays);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(updateRays);

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.svgBackground} style={{ backgroundColor: ColorThree }}>
        <svg viewBox={`0 0 ${dimensions.width || 100} ${dimensions.height || 100}`} className={styles.svg}>
          <g ref={rayGroupRef} transform={`translate(${(dimensions.width || 100) / 2}, ${(dimensions.height || 100) / 2})`}></g>
        </svg>
      </div>
    </div>
  );
};

export default RotatingRays;