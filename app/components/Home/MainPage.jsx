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
	return (
		<>
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
									"--hero-mask-size": "250px",
									maskRepeat: "no-repeat",
									"--hero-mask-x": `${ani.x}%`,
									"--hero-mask-y": `${ani.y}%`,
							  }
					}
				>
					<video
						className="md:w-full w-[160%] md:ml-0 ml-[-21%] max-w-[160%] md:max-w-[auto]"
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
				<section className=" max-w-[1200px] mx-auto lg:pt-32 md:pt-24 pt-16">
					<div className="px-5 z-10">
						<h2 className="text-4xl font-semibold leading-tight tracking-tighter text-black  md:text-6xl lg:text-7xl xl:text-8xl">
							Unmatched productivity
						</h2>

						<p className="xl:mt-6 xl:text-lg leading-tight tracking-tight lg:mt-5  mt-3 sm:max-w-2xl text-sm">
							Huly is a process, project, time, and knowledge management
							platform that provides amazing collaboration opportunities for
							developers and product teams alike.
						</p>
						<ul className="xl:mt-10 flex flex-wrap lg:gap-5 lg:mt-9 gap-4 md:mt-6 mt-5 sm:grid sm:grid-cols-3 xs:grid-cols-1">
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
							<li className="relative col-span-2 xl:h-[420px] overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] h-[260px] w-full">
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

							<li className="relative col-span-2 xl:h-[420px] overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] h-[260px] w-full">
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

							<li className="relative grid xl:h-[420px] grid-cols-1 grid-rows-1 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] h-[260px]  order-4 w-[428px] w-full">
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
											<div className="w-[80px] h-[80px] xl:mt-[-12%] mt-[-13%]">
												<svg
													className="border border-red-600 rounded-full"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 100 100"
													preserveAspectRatio="xMidYMid meet"
													style={{
														transform: "translate3d(0px, 0px, 0px)",
														contentVisibility: "visible",
													}}
												>
													<defs>
														<clipPath id="__lottie_element_2">
															<rect width="100" height="100" x="0" y="0" />
														</clipPath>
													</defs>
													<g clipPath="url(#__lottie_element_2)">
														<g
															transform="matrix(0.999,0.0445,-0.0445,0.999,1.1,-2.2)"
															opacity="1"
															style={{ display: "block" }}
														>
															<g
																opacity="1"
																transform="matrix(1,0,0,1,50,24.25)"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	stroke="#DDDDDD"
																	fillOpacity="1"
																	fill="#DDDDDD"
																	strokeOpacity="1"
																	strokeWidth="1"
																	d="M3.5,1.75 C3.5,-0.183 1.93,-1.75 0,-1.75 C-1.93,-1.75 -3.5,-0.183 -3.5,1.75"
																/>
															</g>
															<g opacity="1" transform="matrix(1,0,0,1,50,48)">
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	fillOpacity="1"
																	stroke="#000"
																	fill="#DDDDDD"
																	strokeOpacity="1"
																	strokeWidth="1"
																	d="M-21.51,14 C-21.51,14 -19.75,-4.08 -19.75,-4.08 C-18.76,-14.25 -10.21,-22 0,-22 C10.21,-22 18.76,-14.25 19.75,-4.08 C19.75,-4.08 21.51,14 21.51,14 C21.51,14 22,14 22,14 C24.21,14 26,15.79 26,18 C26,20.21 24.21,22 22,22 C22,22 -22,22 -22,22 C-24.21,22 -26,20.21 -26,18 C-26,15.79 -24.21,14 -22,14 C-22,14 -21.51,14 -21.51,14z"
																/>
															</g>
														</g>

														<g
															transform="matrix(0.998,0.0645,-0.0645,0.998,-2.74,-3.24)"
															opacity="1"
															style={{ display: "block" }}
														>
															<g
																opacity="1"
																transform="matrix(1,0,0,1,50,73.75)"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	fillOpacity="1"
																	stroke="#000"
																	fill="#DDDDDD"
																	strokeOpacity="1"
																	strokeWidth="1"
																	d="M7.5,-3.75 C7.5,0.393 4.14,3.75 0,3.75 C-4.14,3.75 -7.5,0.393 -7.5,-3.75"
																/>
															</g>
														</g>
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
