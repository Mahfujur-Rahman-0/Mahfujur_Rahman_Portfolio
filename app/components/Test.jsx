"use client";

import Image from "next/image";
import { useState } from "react";

const TorchlightEffect = () => {
	const [maskPosition, setMaskPosition] = useState({ x: "50%", y: "50%" });

	const handleMouseMove = (e) => {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - left; // Get cursor's X position relative to the container
		const y = e.clientY - top; // Get cursor's Y position relative to the container

		setMaskPosition({ x: `${x}px`, y: `${y}px` });
	};

	const handleMouseLeave = () => {
		setMaskPosition({ x: "50%", y: "50%" }); // Reset position when the mouse leaves
	};

	return (
		<div
			className="relative w-[600px] h-[400px] overflow-hidden"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<Image
				src="/ImageOne.svg" // Replace with your image path
				width={1920}
				height={1080}
				alt="Torchlight effect"
				className="w-full h-full object-cover"
				style={{
					maskImage: `radial-gradient(circle 100px at ${maskPosition.x} ${maskPosition.y}, white 70%, black)`,
					WebkitMaskImage: `radial-gradient(circle 100px at ${maskPosition.x} ${maskPosition.y}, white 70%, black)`,
					maskComposite: "exclude",
					WebkitMaskComposite: "exclude",
				}}
			/>
		</div>
	);
};

export default TorchlightEffect;
