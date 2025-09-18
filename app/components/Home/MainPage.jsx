import Banner from "../banner";
import KeyBordShortCut from "./KeyBordShortCut";
import Image from "next/image";
import Bell from "./Bell";

export default function MainPage() {
	return (
		<>
			<Banner />

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
							<li className="relative xl:h-[420px] overflow-hidden rounded-xl bg-grey-2 bg-clip-padding ring-[6px] ring-white/40 lg:h-[300px] h-[260px] w-full bg-black ">
								<KeyBordShortCut />

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
							<Bell />
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
