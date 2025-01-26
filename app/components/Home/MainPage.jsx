"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import TorchlightEffect from "../Test";

export default function MainPage() {
	const videoRef = useRef(null);
	console.log(videoRef);
	useEffect(() => {
		const video = videoRef.current;

		if (video) {
			video.play().catch((err) => console.error("Autoplay error:", err));
		}
	}, []);
	// Function to update CSS variables for mouse position
	useEffect(() => {
		const handleMouseMove = (event) => {
			const root = document.documentElement;
			root.style.setProperty("--hero-mask-x", `${event.clientX}px`);
			root.style.setProperty("--hero-mask-y", `${event.clientY}px`);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
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
						className="w-full h-full absolute top-0 right-[-9%] object-cover"
					/>
					<Image
						src="/ImgTwo.svg"
						width={1920}
						height={1080}
						alt="Torchlight effect"
						className="w-full h-full absolute top-0 right-[-9%] object-cover"
					/>
				</div>
			</section>
		</>
	);
}
