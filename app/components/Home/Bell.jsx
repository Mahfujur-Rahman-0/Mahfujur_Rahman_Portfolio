"use client";
import { useEffect, useRef, useState, useCallback } from "react";

export default function Bell() {
	const [MouseCounter, setMouseCounter] = useState(33);
	const NotificationRef = useRef(null);

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

		if (NotificationRef.current) {
			observer.observe(NotificationRef.current);
		}

		return () => {
			if (NotificationRef.current) {
				observer.unobserve(NotificationRef.current);
			}
		};
	}, []);
	// bell animation start
	const [rotationAngle, setRotationAngle] = useState(0);
	const [rotationAnglePendem, setRotationAnglePendem] = useState(0);

	const isAnimating = useRef(false);
	const FinulStopN = useRef(-1);
	const FinulStopPendem = useRef(-1);

	const pendemChecker = useRef(true);
	const NumChecker = useRef(true);

	// Runs only when State changes
	useEffect(() => {
		if (rotationAngle === 0) {
			FinulStopN.current = FinulStopN.current + 1;
		}
	}, [rotationAngle]);
	useEffect(() => {
		if (rotationAnglePendem === 0) {
			FinulStopPendem.current = FinulStopPendem.current + 1;
		}
	}, [rotationAnglePendem]);
	const [trry, setTry] = useState(false);

	const TheBell = useCallback(() => {
		if (isAnimating.current) return;
		isAnimating.current = true;
		setMouseCounter((prev) => {
			if (prev <= 41) {
				return prev + 1;
			} else {
				return 33;
			}
		});

		setTry(true);
		const interval = setInterval(() => {
			// Bell Body Animation start
			if (FinulStopN.current !== 3) {
				setRotationAngle((prev) => {
					if (prev <= 19 && NumChecker.current) {
						if (prev === 18) NumChecker.current = false;
						return prev + 2;
					} else if (prev >= -18 && !NumChecker.current) {
						if (prev === -18) NumChecker.current = true;
						return prev - 2;
					}
					return prev;
				});
			} else {
				setRotationAngle(0);
			}
			// Bell pendem Animation Start

			if (FinulStopPendem.current <= 6) {
				setRotationAnglePendem((prev) => {
					if (prev <= 18 && pendemChecker.current) {
						if (prev === 18) pendemChecker.current = false;
						return prev + 2;
					} else if (prev >= -18 && !pendemChecker.current) {
						if (prev === -18) pendemChecker.current = true;
						return prev - 2;
					}
				});
			} else {
				setRotationAnglePendem(0);
			}

			// Bell pendem Animation End
		}, 7);

		setTimeout(() => {
			clearInterval(interval);
			isAnimating.current = false;
			FinulStopN.current = -1;
			FinulStopPendem.current = -1;
			setTry(false);
		}, 1500);
	}, [
		isAnimating,
		setMouseCounter,
		setTry,
		FinulStopN,
		FinulStopPendem,
		setRotationAngle,
		setRotationAnglePendem,
		NumChecker,
		pendemChecker,
	]);

	return (
		<>
			<li
				onMouseEnter={TheBell}
				className="xxsm:min-h-[300px] relative grid xl:h-[420px] bg-[#0C0C0C] grid-cols-1 grid-rows-1 overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] h-[260px]  order-4 w-full"
			>
				<div className="absolute bottom-0 z-10 col-span-full flex w-full items-end px-6 pb-6 lg:px-5 lg:pb-5 md:px-4 md:pb-4 sm:px-5 sm:pb-5">
					<p className="relative z-10 font-light leading-snug tracking-snugger text-white/65 md:leading-[1.2] sm:text-15">
						<span className="font-medium text-white">Notifications.</span> Keep
						up to date with any changes by receiving instant notifications.
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
							<source src="/video/Notification_BG.mp4" type="video/mp4" />
							<source src="/video/Notification_BG.webm" type="video/webm" />
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
								className={`w-[20%] xl:mt-[-13.5%] sm:mt-[-14%] mt-[-13.4%] rounded-full aspect-square`}
							>
								<svg
									className={`w-full h-full overflow-visible`}
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
          .st1 { fill: #ff6d00; }
          .st2 { font-family: 'arial'; }
          .st3 { font-size: 96.9077px; }
        `}
									</style>

									<g
										className={`${
											trry ? "try" : ""
										} transform translate-x-[19px] translate-y-[50px] scale-y-[0.8]`}
										transform={`scale(0.8)`}
									>
										<g
											transform={`scale(1) rotate(${rotationAnglePendem} 224 90)`}
										>
											<path
												className="st0"
												d="M160,448c0,35.3,28.6,64,64,64s64-28.6,64-64H160z"
											/>
										</g>

										<g transform={`scale(1) rotate(${rotationAngle} 224 90)`}>
											<path
												className="st0"
												d="M448,384.6c-0.1,3.3-1,14-9.2,22.2c-5.7,5.7-13.5,9.2-22.2,9.2H31.4c-8.7,0-16.5-3.5-22.2-9.2
          C1,398.6,0.1,387.9,0,384.6c-0.1-3,0-12.6,11.9-28.9c11.4-15.5,20-18.6,28.1-27.2c16.4-17.3,16.1-41.4,16.8-57.2
          c2-42-4.3-123.3,55.5-177c17.3-15.5,46.1-39.5,111.6-42.3c65.5,2.7,94.3,26.7,111.6,42.3c59.9,53.7,53.5,135,55.5,177
          c0.8,15.7,0.4,39.9,16.8,57.2c8.1,8.6,16.8,11.7,28.1,27.2C448,372,448.1,381.6,448,384.6z"
											/>
										</g>

										<path
											transform={`rotate(${rotationAngle} 224 90) ${"translate(0 0)"}`}
											className="st0"
											d="M256,60.7l-15.9,0L208,60.8l-16,0l0-27.9h0v-0.3C192,14.6,206.3,0,224,0c17.7,0,32,14.6,32,32.6v0.2L256,60.7z"
										/>
										<g className={`${trry ? "Text_sizing" : ""} C-text-style`}>
											<path
												transform={`scale(1.2) translate(-7 -26)`}
												className="st1"
												d="M347.4,197.7h-66.8c-35.5,0-64.4-28.8-64.4-64.4v0c0-35.5,28.8-64.4,64.4-64.4h66.8
          c35.5,0,64.4,28.8,64.4,64.4v0C411.8,168.9,383,197.7,347.4,197.7z"
											/>
											<text
												style={{
													isolation: "isolate",
													fontSize: "139.57675170898438px",
													fontFamily: "ArialMT, Arial",
												}}
												transform={`matrix(1 0 0 1 295.3177 170.8712 )`}
												className="st2 st3"
											>
												{MouseCounter}
											</text>
										</g>
										<g transform={`scale(1) rotate(${rotationAngle} 224 90)`}>
											<path
												className={`st0 ${trry ? "Cus_stt" : ""} opacity-0`}
												d="M448,384.6c-0.1,3.3-1,14-9.2,22.2c-5.7,5.7-13.5,9.2-22.2,9.2H31.4c-8.7,0-16.5-3.5-22.2-9.2
          C1,398.6,0.1,387.9,0,384.6c-0.1-3,0-12.6,11.9-28.9c11.4-15.5,20-18.6,28.1-27.2c16.4-17.3,16.1-41.4,16.8-57.2
          c2-42-4.3-123.3,55.5-177c17.3-15.5,46.1-39.5,111.6-42.3c65.5,2.7,94.3,26.7,111.6,42.3c59.9,53.7,53.5,135,55.5,177
          c0.8,15.7,0.4,39.9,16.8,57.2c8.1,8.6,16.8,11.7,28.1,27.2C448,372,448.1,381.6,448,384.6z"
											/>
										</g>

										<path
											transform={`rotate(${rotationAngle} 224 90) ${"translate(0 0)"}`}
											className="st0"
											d="M256,60.7l-15.9,0L208,60.8l-16,0l0-27.9h0v-0.3C192,14.6,206.3,0,224,0c17.7,0,32,14.6,32,32.6v0.2L256,60.7z"
										/>
									</g>

									<g
										id={`${trry ? "Rotater_Circle" : ""}`}
										className="w-full h-full Custom-translate"
									>
										<image
											width="874"
											height="874"
											transform="translate(25 24)"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											xlinkHref="/Image/Two.png"
										/>
										<g style={{ opacity: 0.7 }}>
											<image
												width="923"
												height="923"
												xmlnsXlink="http://www.w3.org/1999/xlink"
												xlinkHref="/Image/One.png"
											/>
										</g>
										<image
											width="867"
											height="868"
											transform="translate(28 27)"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											xlinkHref="/Image/Three.png"
										/>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</li>
		</>
	);
}
