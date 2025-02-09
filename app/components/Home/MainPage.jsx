"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MainPage() {
	const videoRef = useRef(null);
	const intervalRef = useRef(null);
	const NotificationRef = useRef(null);
	const [Mposition, setMposition] = useState({ x: 0, y: 0 });
	const [Checkerposition, setCheckerPosition] = useState({ x: 0, y: 0 });
	const [animate, setAnimation] = useState(false);
	const [ani, setAni] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const playVideo = (ref) => {
			const video = ref.current;
			if (video) {
				video.play().catch((err) => console.error("Autoplay error:", err));
			}
		};

		playVideo(videoRef);
		playVideo(NotificationRef);
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
		let tempY = 30;
		let checkY = false;
		let checkX = false;

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

				setAni({ x: `${tempX}`, y: `${tempY}` });
			}, 100);
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (
				Mposition.x === Checkerposition.x &&
				Mposition.y === Checkerposition.y
			) {
				setAnimation(null);
				animateStart();
			}
		}, 1000);
		return () => {
			clearTimeout(timeout);
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [Mposition, Checkerposition]);

	// bell animation start

	const [rotationAngle, setRotationAngle] = useState(0);
	const [rotationAnglePendem, setRotationAnglePendem] = useState(0);
	const [bellSize, setBellSize] = useState(0);
	const [TextSize, setTextSize] = useState(0);

	const animationFrameRef = useRef(null);
	const animationPendenRef = useRef(null);

	const startTimeRef = useRef(null);
	const startPendenTimeRef = useRef(null);

	const isAnimating = useRef(false);

	const TheBell = () => {
		if (isAnimating.current) return;

		isAnimating.current = true;

		const animateRotation = (timestamp) => {
			if (!startTimeRef.current) startTimeRef.current = timestamp;
			const elapsedTime = timestamp - startTimeRef.current;
			const angle = Math.sin((elapsedTime / 100) * Math.PI) * 18;
			setRotationAngle(angle);
			animationFrameRef.current = requestAnimationFrame(animateRotation);
		};
		const animatePendenRotation = (timestamp) => {
			if (!startPendenTimeRef.current) startPendenTimeRef.current = timestamp;
			const elapsedTime = timestamp - startPendenTimeRef.current;
			const angle = Math.sin((elapsedTime / 60) * Math.PI) * 18;
			setRotationAnglePendem(angle);
			animationPendenRef.current = requestAnimationFrame(animatePendenRotation);
			setBellSize(1.1);
			setTextSize("326.3177 190.8712");
		};
		// Start the animation
		animationFrameRef.current = requestAnimationFrame(animateRotation);
		animationPendenRef.current = requestAnimationFrame(animatePendenRotation);

		// Stop the animation after 500ms
		setTimeout(() => {
			isAnimating.current = false; // Mark the animation as stopped
			cancelAnimationFrame(animationFrameRef.current); // Cancel the ongoing animation frame
			setRotationAngle(0); // Reset the rotation angle to 0
		}, 300); // 300ms stop time

		setTimeout(() => {
			isAnimating.current = false; // Mark the animation as stopped
			cancelAnimationFrame(animationPendenRef.current); // Cancel the ongoing animation frame
			setBellSize(0);
			setTextSize(0);
			setRotationAnglePendem(0); // Reset the rotation angle to 0
		}, 450);
	};

	//bell animation end

	return (
		<>
			<section className={`relative bg-[#090B0D]`}>
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
									"--hero-mask-size": "250px",
									maskRepeat: "no-repeat",
									"--hero-mask-x": `${ani.x}%`,
									"--hero-mask-y": `${ani.y}%`,
							  }
					}
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

			<div className="overflow-hidden bg-[#f6f6f6]">
				<section className=" max-w-[1200px] lg:w-[80%] w-[90%] mx-auto lg:pt-32 md:pt-24 pt-16">
					<div className="px-5 z-10">
						<h2 className="text-4xl font-semibold leading-tight tracking-tighter text-black  md:text-6xl lg:text-7xl xl:text-8xl">
							Unmatched productivity
						</h2>

						<p className="xl:mt-6 xl:text-lg leading-tight tracking-tight lg:mt-5  mt-3 sm:max-w-2xl text-sm">
							Huly is a process, project, time, and knowledge management
							platform that provides amazing collaboration opportunities for
							developers and product teams alike.
						</p>
						<ul className="xl:mt-10 flex flex-wrap lg:gap-5 lg:mt-9 gap-4 md:mt-6 mt-5 sm:grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
							<li className="relative xl:h-[420px] overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] h-[260px] w-full  ">
								<div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4  sm:px-5 sm:pb-5 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:z-0 md:after:h-[180%] md:after:w-full md:after:bg-[linear-gradient(180deg,rgba(9,10,12,0)_0%,#090A0C_40.76%)] md:after:blur-md">
									<p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
										<span className="font-medium text-white">
											Keyboard shortcuts.
										</span>{" "}
										Work efficiently with instant access to common actions.
									</p>
								</div>

								<div className="relative col-span-full row-span-full">
									<span
										className="absolute left-1/2 top-0 -z-10 h-full w-px"
										aria-hidden="true"
									></span>
									<div
										className="absolute left-1/2 aspect-[1.01904] h-full w-full -translate-x-1/2 overflow-hidden sm:-top-12 sm:h-auto xs:-top-8"
										aria-hidden="true"
									></div>
								</div>
							</li>
							<li className="relative md:col-span-2 xl:h-[420px] overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] h-[260px] w-full">
								<div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4  sm:px-5 sm:pb-5 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:z-0 md:after:h-[180%] md:after:w-full md:after:bg-[linear-gradient(180deg,rgba(9,10,12,0)_0%,#090A0C_40.76%)] md:after:blur-md">
									<p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15 max-w-[436px] md:max-w-[344px]">
										<span className="font-medium text-white">
											Team Planner.
										</span>{" "}
										Keep track of the bigger picture by viewing all individual
										tasks in one centralized team calendar.
									</p>
								</div>
								<div className="relative col-span-full row-span-full">
									<span
										className="absolute left-1/2 top-0 -z-10 h-full w-px"
										aria-hidden="true"
									></span>
									<div
										className="absolute left-1/2 aspect-[1.82857] h-full -translate-x-1/2 overflow-hidden"
										aria-hidden="true"
									></div>
								</div>
							</li>

							<li className="relative md:col-span-2 xl:h-[420px] overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] h-[260px] w-full">
								<div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4  sm:px-5 sm:pb-5 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:z-0 md:after:h-[180%] md:after:w-full md:after:bg-[linear-gradient(180deg,rgba(9,10,12,0)_0%,#090A0C_40.76%)] md:after:blur-md">
									<p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15 max-w-[392px] lg:max-w-[348px]">
										<span className="font-medium text-white">
											Time-blocking.
										</span>{" "}
										Transform daily tasks into structured time blocks for
										focused productivity.
									</p>
								</div>
								<div className="relative col-span-full row-span-full">
									<span
										className="absolute left-1/2 top-0 -z-10 h-full w-px"
										aria-hidden="true"
									></span>
									<div
										className="absolute left-1/2 aspect-[1.82857] h-full -translate-x-1/2 overflow-hidden"
										aria-hidden="true"
									></div>
								</div>
							</li>

							<li
								onMouseEnter={TheBell}
								className="relative grid xl:h-[420px] bg-[#0C0C0C] grid-cols-1 grid-rows-1 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] h-[260px]  order-4 w-full"
							>
								<div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4 sm:px-5 sm:pb-5">
									<p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
										<span className="font-medium text-white">
											Notifications.
										</span>{" "}
										Keep up to date with any changes by receiving instant
										notifications.
									</p>
								</div>
								<div className="relative col-span-full row-span-full">
									<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-full aspect-[1.52381]">
										<video
											className="absolute inset-0 z-0"
											width="640"
											height="420"
											ref={NotificationRef}
											muted
											playsInline
											loop
											preload="auto"
											style={{ opacity: 1 }}
										>
											<source
												src="/video/Notification_BG.mp4"
												type="video/mp4"
											/>
											<source
												src="/video/Notification_BG.webm"
												type="video/webm"
											/>
										</video>
									</div>
									<span
										className="absolute left-1/2 top-0 -z-10 h-full w-px"
										aria-hidden="true"
									></span>
									<div
										className="absolute left-1/2 aspect-[1.01904] h-full -translate-x-1/2 overflow-hidden"
										aria-hidden="true"
									>
										<div className="h-full flex justify-center items-center w-full md:pointer-events-none [&_canvas]:!h-full [&_canvas]:!w-full">
											<div
												className={`w-[20%] xl:mt-[-13.5%] sm:mt-[-14%] mt-[-13.4%] rounded-full border border-red-500 aspect-square`}
											>
												<svg
													className="w-full h-full"
													version="1.1"
													id="Layer_1"
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink"
													viewBox="-200 -50 848 612"
													style={{ enableBackground: "new -200 -50 848 612" }}
													xmlSpace="preserve"
												>
													<style>
														{`
          .st0 { fill: #DDDDDD; }
          .st1 { fill: #fc7742; }
          .st2 { font-family: 'arial'; }
          .st3 { font-size: 96.9077px; }
        `}
													</style>
													<g>
														<g
															transform={`rotate(${rotationAnglePendem} 224 90) scale(${
																bellSize == 0 ? 1 : bellSize
															})`}
														>
															<path
																className="st0"
																d="M160,448c0,35.3,28.6,64,64,64s64-28.6,64-64H160z"
															/>
														</g>

														<g
															transform={`rotate(${rotationAngle} 224 90) scale(${
																bellSize == 0 ? 1 : bellSize
															})`}
														>
															<path
																className="st0"
																d="M448,384.6c-0.1,3.3-1,14-9.2,22.2c-5.7,5.7-13.5,9.2-22.2,9.2H31.4c-8.7,0-16.5-3.5-22.2-9.2
          C1,398.6,0.1,387.9,0,384.6c-0.1-3,0-12.6,11.9-28.9c11.4-15.5,20-18.6,28.1-27.2c16.4-17.3,16.1-41.4,16.8-57.2
          c2-42-4.3-123.3,55.5-177c17.3-15.5,46.1-39.5,111.6-42.3c65.5,2.7,94.3,26.7,111.6,42.3c59.9,53.7,53.5,135,55.5,177
          c0.8,15.7,0.4,39.9,16.8,57.2c8.1,8.6,16.8,11.7,28.1,27.2C448,372,448.1,381.6,448,384.6z"
															/>
														</g>
														<path
															transform={`rotate(${rotationAngle} 224 90) scale(${
																bellSize == 0 ? 1 : bellSize
															})`}
															className="st0"
															d="M256,60.7l-15.9,0L208,60.8l-16,0l0-27.9h0v-0.3C192,14.6,206.3,0,224,0c17.7,0,32,14.6,32,32.6v0.2L256,60.7z"
														/>
														<path
															transform={`scale(${
																bellSize == 0 ? 1.1 : bellSize + 0.1
															})`}
															className="st1"
															d="M347.4,197.7h-66.8c-35.5,0-64.4-28.8-64.4-64.4v0c0-35.5,28.8-64.4,64.4-64.4h66.8
          c35.5,0,64.4,28.8,64.4,64.4v0C411.8,168.9,383,197.7,347.4,197.7z"
														/>
														<text
															transform={`matrix(1 0 0 1 ${
																TextSize == 0 ? "295.3177 170.8712" : TextSize
															})`}
															className="st2 st3"
														>
															33
														</text>
													</g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>

				<section className=" max-w-[1200px] mx-auto lg:pt-32 md:pt-24 pt-16">
					<div className="px-5">
						<h2 className="relative xl:max-w-[550px] font-title mx-auto font-semibold leading-[0.9] tracking-tighter text-black xl:text-7xl md:max-w-[430px] md:text-6xl text-4xl max-w-[544px]">
							Work together. Like in the office.
						</h2>
						<p className="relative mx-auto mt-3.5 max-w-[544px] leading-tight tracking-tight lg:mt-2.5 md:max-w-[450px] text-base sm:mt-3">
							Create customized virtual office spaces for any department or
							event with high-quality audio and video conferencing.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
