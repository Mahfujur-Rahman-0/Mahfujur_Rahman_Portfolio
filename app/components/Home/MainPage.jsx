"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MainPage() {
	const videoRef = useRef(null);
	const [Mposition, setMposition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const video = videoRef.current;

		if (video) {
			video.play().catch((err) => console.error("Autoplay error:", err));
		}
	}, []);

	const handleMouseMove = (event) => {
		setMposition({ x: event.clientX, y: event.clientY });
	};

	return (
		<>
			<section>
				<div className="relative ">
					<video
						className="w-full "
						ref={videoRef}
						autoplay
						muted
						playsInline
						loop
						preload="auto"
					>
						<source src="/video/showreAnimation.mp4" type="video/mp4"></source>
					</video>

					<Image
						src="/ImageOne.svg"
						width={1920}
						height={1080}
						alt="Torchlight effect"
						className="w-full h-full transition-all absolute top-0 right-[-9%] object-cover mask-radial-spotlight"
						style={{
							"--hero-mask-size": "100px",
							"--hero-mask-x": Mposition.x - 50 + "px",
							"--hero-mask-y": Mposition.y - 50 + "px",
						}}
					/>
					<Image
						onMouseMove={handleMouseMove}
						src="/ImgTwo.svg"
						width={1920}
						height={1080}
						alt="Torchlight effect"
						className="w-full h-full transition-all absolute top-0 right-[-9%] object-cover mask-radial-spotlight"
						style={{
							"--hero-mask-size": "150px",
							"--hero-mask-x": `${Mposition.x - 75}px`,
							"--hero-mask-y": `${Mposition.y - 75}px`,
						}}
					/>
				</div>
			</section>
		</>
	);
}
