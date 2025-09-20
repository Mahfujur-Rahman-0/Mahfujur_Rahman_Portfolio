"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

export default function Banner() {
	const videoRef = useRef(null);
	const intervalRef = useRef(null);
	const Testtt = useRef(null);
	console.log(Testtt);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const video = entry.target;
					if (entry.isIntersecting) {
						video.play().catch((err) => console.error("Play error:", err));
					} else {
						video.pause();
					}
				});
			},
			{ threshold: 0.5 } // Trigger when at least 50% is visible
		);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current);
			}
		};
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
		containerRef.current.style.setProperty("--hero-mask-x", `${x - 150}px`);
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

	return (
		<section ref={Testtt} className={`relative bg-[#090B0D]`}>
			<h1 className="left-[9%] top-[10%] absolute font-semibold tracking-tight text-white lg:w-[572px] md:w-[435px] w-[300px] 2xl:text-[84px] lg:text-[72px]  md:text-[56px] text-[32px]">
				Everything App for&nbsp;your teams
			</h1>
			<p className="absolute mt-5 max-w-md text-18 leading-snug tracking-tight text-grey-90 lg:mt-4 md:mt-3.5 md:text-16 sm:mt-3 sm:max-w-[248px] sm:text-15">
				Huly, an open-source platform, serves as an all-in-one replacement of
				Linear, Jira, Slack, and Notion.
			</p>
			<div
				//	className="BannerCover overflow-hidden md:w-[53vw] w-[85vw] absolute bottom-[2%] max-w-[983px] left-dynamic md:left-[45%] left-[50%] translate-x-[-50%]"
				className="BannerCover overflow-hidden lg:w-[53vw] w-[85vw] absolute bottom-[2%] max-w-[983px] left-dynamic lg:left-[45%] left-[50%] translate-x-[-50%]"
			>
				<Image
					width={2048}
					height={1138}
					className="w-[99%] mx-auto h-full"
					src="/Image/topBanner.png"
					alt="topBanner"
				/>
			</div>
			<video
				className="w-[160%] ml-[-21%] max-w-[160%] lg:max-w-[1900px] lg:mx-auto lg:w-full "
				ref={videoRef}
				muted
				playsInline
				loop
				preload="auto"
			>
				<source src="/video/showreAnimation.mp4" type="video/mp4" />
			</video>
			<div
				className="absolute w-full top-0 h-full"
				onMouseMove={handleMouseMove}
				ref={containerRef}
				style={{
					"--hero-mask-size": "200px",
					"--hero-mask-x": "0",
					"--hero-mask-y": "0",
					maskRepeat: "no-repeat",
				}}
			>
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
