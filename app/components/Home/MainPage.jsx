"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MainPage() {
	const videoRef = useRef(null);
	const intervalRef = useRef(null);
	const [Mposition, setMposition] = useState({ x: 0, y: 0 });
	const [Checkerposition, setCheckerPosition] = useState({ x: 0, y: 0 });
	const [animate, setAnimation] = useState(false);
	const [ani, setAni] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const video = videoRef.current;
		if (video) {
			video.play().catch((err) => console.error("Autoplay error:", err));
		}
	}, []);

	const handleMouseMove = (event) => {
		setMposition({
			x: event.nativeEvent.offsetX,
			y: event.nativeEvent.offsetY,
		});
		setAnimation(true);
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};
	useEffect(() => {
		setCheckerPosition(Mposition);
	}, [Mposition]);
	const animateStart = () => {
		let tempX = 0;
		let tempY = 0;
		if (!intervalRef.current) {
			intervalRef.current = setInterval(() => {
				if (tempX <= 100) {
					tempX++;
				} else {
					tempX = 0;
				}
				if (tempX >= 50) {
					if (tempY <= 100) {
						tempY--;
					} else {
						tempY = 0;
					}
				}

				setAni({ x: `${tempX}`, y: ` ${tempY}` });
				console.log(tempX);
				console.log(tempY);
			}, 100);
		}
	};
	console.log(ani);
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (
				Mposition.x === Checkerposition.x &&
				Mposition.y === Checkerposition.y
			) {
				setAnimation(null);
				animateStart();
				console.log("Mouse position did not change within the time limit");
			}
		}, 6000);
		return () => {
			clearTimeout(timeout);
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [Mposition, Checkerposition]);
	return (
		<section className={`relative`}>
			<div
				onMouseMove={handleMouseMove}
				style={
					animate !== null
						? {
								"--hero-mask-size": "200px",
								"--hero-mask-x": `${Mposition.x}px`,
								"--hero-mask-y": `${Mposition.y}px`,
						  }
						: {
								"--hero-mask-size": "400px",
								maskRepeat: "no-repeat",
								"--hero-mask-x": `${ani.x}%`,
								"--hero-mask-y": `${ani.y}%`,
						  }
				}
			>
				<video
					className="w-full"
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
					className="w-full md:block hidden h-full transition-all absolute top-0 right-[-9%] object-cover mask-radial-spotlight"
				/>
				<Image
					src="/ImgTwo.svg"
					width={200}
					height={100}
					alt="Torchlight effect"
					className="w-full h-full  md:block hidden transition-all absolute top-0 right-[-9%] object-cover mask-radial-spotlight"
				/>
			</div>
		</section>
	);
}
