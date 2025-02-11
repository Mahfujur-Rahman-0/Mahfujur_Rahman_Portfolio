"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

export default function Banner() {
	const videoRef = useRef(null);
	const intervalRef = useRef(null);
	useEffect(() => {
		const playVideo = (ref) => {
			const video = ref.current;
			if (video) {
				video.play().catch((err) => console.error("Autoplay error:", err));
			}
		};

		playVideo(videoRef);
	}, []);
	const isMoving = useRef(null);
	const containerRef = useRef(null);
	const positionRef = useRef({ x: 0, y: 0 });
	const handleMouseMove = useCallback((event) => {
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		positionRef.current = { x, y };
		containerRef.current.style.setProperty("--hero-mask-x", `${x}px`);
		containerRef.current.style.setProperty("--hero-mask-y", `${y}px`);
		if (!isMoving.current) {
			isMoving.current = { x, y };
			counter();
		}
		stopAnimation();
	}, []);

	//Processing leter
	const counter = () => {
		let remainingTime = 1; // Starting time
		const timer = setInterval(() => {
			remainingTime--;
			if (remainingTime === 0) {
				isMoving.current = null;
				animateStart();
				clearInterval(timer); // Stop the timer when it reaches 0
			}
		}, 3000);
	};
	const animateStart = () => {
		let tempX = 0;
		let tempY = 30;
		let checkY = false;
		let checkX = false;
		if (!isMoving.current) {
			if (!intervalRef.current) {
				intervalRef.current = setInterval(() => {
					if (tempX <= 91 && checkX === false) {
						if (tempX <= 50) {
							tempX++;
						} else if (tempY >= 0 && checkY === true) {
							if (tempX === 91) {
								checkX = true;
							} else {
								tempX++;
							}
						}
					} else {
						if (tempX <= 91) {
							if (tempX <= 0 && checkX === true) {
								checkX = false;
							} else {
								tempX--;
							}
						} else if (tempY >= 0 && checkY === true) {
							tempX--;
						}
					}

					if (tempX >= 50) {
						if (tempY > 0 && checkY === false) {
							tempY--;
							if (tempY === 1) {
								checkY = true;
							}
						} else if (tempY <= 100 && checkY === true) {
							tempY++;
							if (tempY === 100) {
								checkY = false;
							}
						}
					}

					//setting the mouse animated position
					containerRef.current.style.setProperty("--hero-mask-x", `${tempX}%`);
					containerRef.current.style.setProperty("--hero-mask-y", `${tempY}%`);
				}, 100);
			}
		}
	};
	const stopAnimation = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null; // Clear the reference to ensure it's reset.
		}
	};

	useEffect(() => {
		animateStart();
	}, []);


	console.log(isMoving);
	return (
		<section className={`relative bg-[#090B0D]`}>
			<div
				onMouseMove={handleMouseMove}
				ref={containerRef}
				style={{
					"--hero-mask-size": "200px",
					"--hero-mask-x": "0",
					"--hero-mask-y": "0",
					maskRepeat: "no-repeat",
				}}
			>
				<video
					className="md:w-full w-[160%] ml-[-21%] max-w-[160%] md:max-w-[1900px] md:mx-auto"
					ref={videoRef}
					muted
					playsInline
					loop
					preload="auto"
				>
					<source src="/video/showreAnimation.mp4" type="video/mp4" />
				</video>

				<Image
					src="/ImageOne.svg"
					width={200}
					height={100}
					alt="Torchlight effect"
					className="w-full sm:block hidden h-full transition-all absolute top-0 right-[-9%] object-cover mask-radial-spotlight"
				/>
				<Image
					src="/ImgTwo.svg"
					width={200}
					height={100}
					alt="Torchlight effect"
					className="w-full h-full  sm:block hidden transition-all absolute top-0 right-[-9%] object-cover mask-radial-spotlight"
				/>
			</div>
		</section>
	);
}
