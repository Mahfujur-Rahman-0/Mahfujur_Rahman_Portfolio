"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = () => {
		setIsChecked(!isChecked);
	};
	return (
		<header className="relative">
			<nav className="max-w-[1280px] h-16 px-6 mx-auto flex  text-white">
				<Link href={"/"}>
					<div className="flex w-[260px] py-3 items-center h-full">
						<Image
							src="/fabicon/favicon.png"
							className="aspect-square filter invert"
							alt="Logo"
							width={24}
							height={24}
						/>
						<span className="ml-2 font-black text-2xl pb-[4px]">
							MahFujur Rahman
						</span>
					</div>
				</Link>
				<ul
					className={` lg:flex hidden items-center h-full text-decoration-none font-medium w-[220px] ml-10 text-sm justify-between`}
				>
					<Link href={"/pages/about"}>
						<li className="px-2">About </li>
					</Link>

					<li className="cursor-pointer px-2 flex items-center h-full my-auto drop-down-container">
						Projects{" "}
						<i className="fa-solid fa-angle-down text-xs pt-[2px] ml-1"></i>
						<ul className="text-decoration-none md:w-[360px] drop-down rounded-lg">
							<li className="rounded-lg ">
								<div className="row flex items-center">
									<div className="col-2 bg-zinc-900 rounded-lg p-3">
										<i className="fa-brands text-2xl fa-x-twitter"></i>
									</div>
									<div className="col-10 px-3">
										<div className="font-medium">X.com</div>
										<div className="text-zinc-600">Follow our latest news</div>
									</div>
								</div>
							</li>
							<li className="rounded-lg ">
								<div className="row flex items-center">
									<div className="col-2 bg-zinc-900 rounded-lg p-3">
										<i className="fa-brands text-2xl fa-x-twitter"></i>
									</div>
									<div className="col-10 px-3">
										<div className="font-medium">LinkedIn</div>
										<div className="text-zinc-600">Follow our latest news</div>
									</div>
								</div>
							</li>
							<li className="rounded-lg ">
								<div className="row flex items-center">
									<div className="col-2 bg-zinc-900 rounded-lg p-3">
										<i className="fa-brands text-2xl fa-x-twitter"></i>
									</div>
									<div className="col-10 px-3">
										<div className="font-medium">GitHub</div>
										<div className="text-zinc-600">Follow our latest news</div>
									</div>
								</div>
							</li>
						</ul>
					</li>
					<li className="cursor-pointer px-2 flex items-center h-full my-auto drop-down-container">
						Contact{" "}
						<i className="fa-solid  pt-[2px] fa-angle-down text-xs ml-1"></i>
						<ul className="text-decoration-none  md:w-[360px] drop-down rounded-lg">
							<li className="rounded-lg ">
								<Link href="https://x.com/Mahfuj_50">
									<div className="row flex items-center">
										<div className="col-2 bg-zinc-900 rounded-lg p-3">
											<i className="fa-brands text-2xl fa-x-twitter"></i>
										</div>
										<div className="col-10 px-3">
											<div className="font-medium">X.com</div>
											<div className="text-zinc-600">
												Follow our latest news
											</div>
										</div>
									</div>
								</Link>
							</li>

							<li className="rounded-lg ">
								<Link href={"https://www.linkedin.com/in/mahfuj/"}>
									<div className="row flex items-center">
										<div className="col-2 bg-zinc-900 rounded-lg p-3">
											<i className="fa-brands text-2xl fa-linkedin"></i>
										</div>
										<div className="col-10 px-3">
											<div className="font-medium">LinkedIn</div>
											<div className="text-zinc-600">
												Follow our latest news
											</div>
										</div>
									</div>
								</Link>
							</li>
							<li className="rounded-lg ">
								<Link href={"https://github.com/Mahfujur-Rahman-0"}>
									<div className="row flex items-center">
										<div className="col-2 bg-zinc-900 rounded-lg p-3">
											<i className="fa-brands text-2xl fa-github"></i>
										</div>
										<div className="col-10 px-3">
											<div className="font-medium">GitHub</div>
											<div className="text-zinc-600">
												Follow our latest news
											</div>
										</div>
									</div>
								</Link>
							</li>
							<li className="rounded-lg ">
								<Link
									href={
										"https://www.facebook.com/profile.php?id=100092208460963"
									}
								>
									<div className="row flex items-center">
										<div className="col-2 bg-zinc-900 rounded-lg p-3">
											<i className="fa-brands text-2xl fa-facebook"></i>
										</div>
										<div className="col-10 px-3">
											<div className="font-medium">FaceBook</div>
											<div className="text-zinc-600">
												Follow our latest news
											</div>
										</div>
									</div>
								</Link>
							</li>
							<li className="rounded-lg ">
								<Link href={"https://wa.me/qr/L23ZNJS3TNLOB1"}>
									<div className="row flex items-center">
										<div className="col-2 bg-zinc-900 rounded-lg p-3">
											<i className="fa-brands text-2xl fa-whatsapp"></i>
										</div>
										<div className="col-10 px-3">
											<div className="font-medium">WhatsApp</div>
											<div className="text-zinc-600">
												Follow our latest news
											</div>
										</div>
									</div>
								</Link>
							</li>
						</ul>
					</li>
				</ul>
				<ul className="lg:flex hidden items-center h-full text-decoration-none font-medium w-[300px] ml-auto text-sm justify-between">
					<Link
						className="hover:text-stone-300"
						href={"https://github.com/Mahfujur-Rahman-0"}
					>
						<li className="flex items-center">
							<i className="fa-brands fa-github text-lg text-white pr-1"></i>{" "}
							Star Us
						</li>
					</Link>
					<Link
						className="hover:bg-neutral-900 border text-xs rounded-full px-4 py-2 border-white"
						href={"/pages/signin"}
					>
						<li className="uppercase">Sign In</li>
					</Link>
					<Link
						className="hover:bg-neutral-900 border text-xs rounded-full px-4 py-2 border-white"
						href={"/pges/signup"}
					>
						<li className="uppercase ">Get Started</li>
					</Link>
				</ul>

				<div className="lg:hidden flex ml-auto items-center">
					<input
						id="checkbox"
						type="checkbox"
						checked={isChecked}
						readOnly
						style={{ display: "none" }}
					/>
					<label className="toggle" onClick={handleChange}>
						<div id="bar1" className="bars"></div>
						<div id="bar2" className="bars"></div>
						<div id="bar3" className="bars"></div>
					</label>
				</div>
			</nav>{" "}
			<div
				className={`${
					!isChecked ? "right-full" : "right-0"
				} absolute lg:hidden w-full px-6 transition-all duration-300 `}
			>
				<ul
					className={`lg:hidden block w-full text-decoration-none text-white font-medium text-sm`}
				>
					<Link className="" href={"/pages/about"}>
						<li className="w-full py-3 px-2 border-gray-900 border-b hover:bg-zinc-600">
							About{" "}
						</li>
					</Link>

					<li className="w-full hover:bg-zinc-600 py-3 border-gray-900 border-b cursor-pointer px-2 flex items-center h-full my-auto MB_drop-down-container">
						Projects{" "}
						<i className="fa-solid fa-angle-down text-xs pt-[2px] ml-1"></i>
					</li>
					<ul className="text-decoration-none MB_drop-down py-2  ">
						<li className="rounded-lg hover:bg-zinc-600">
							<div className="row flex items-center">
								<div className="col-2 bg-zinc-900 rounded-lg p-2">
									<i className="fa-brands text-xl fa-x-twitter"></i>
								</div>
								<div className="col-10 px-2">
									<div className="font-medium">X.com</div>
									<div className="text-zinc-400">Follow our latest news</div>
								</div>
							</div>
						</li>
						<li className="rounded-lg hover:bg-zinc-600">
							<div className="row flex items-center">
								<div className="col-2 bg-zinc-900 rounded-lg p-2">
									<i className="fa-brands text-xl fa-x-twitter"></i>
								</div>
								<div className="col-10 px-2">
									<div className="font-medium">LinkedIn</div>
									<div className="text-zinc-400">Follow our latest news</div>
								</div>
							</div>
						</li>
						<li className="rounded-lg hover:bg-zinc-600">
							<div className="row flex items-center">
								<div className="col-2 bg-zinc-900 rounded-lg p-2">
									<i className="fa-brands text-xl fa-x-twitter"></i>
								</div>
								<div className="col-10 px-2">
									<div className="font-medium">GitHub</div>
									<div className="text-zinc-400">Follow our latest news</div>
								</div>
							</div>
						</li>
					</ul>
					<li className="hover:bg-zinc-600 w-full py-3 border-gray-900 border-b cursor-pointer px-2 flex items-center h-full my-auto MB_drop-down-container">
						Contact{" "}
						<i className="fa-solid  pt-[2px] fa-angle-down text-xs ml-1"></i>
					</li>
					<ul className="text-decoration-none MB_drop-down py-2  ">
						<li className="rounded-lg hover:bg-zinc-600">
							<Link href="https://x.com/Mahfuj_50">
								<div className="row flex items-center">
									<div className="col-2 bg-zinc-900 rounded-lg p-2">
										<i className="fa-brands text-xl fa-x-twitter"></i>
									</div>
									<div className="col-10 px-2">
										<div className="font-medium">X.com</div>
										<div className="text-zinc-400">Follow our latest news</div>
									</div>
								</div>
							</Link>
						</li>
						<li className="rounded-lg hover:bg-zinc-600">
							<Link href={"https://www.linkedin.com/in/mahfuj/"}>
								<div className="row flex items-center">
									<div className="col-2 bg-zinc-900 rounded-lg p-2">
										<i className="fa-brands text-xl fa-linkedin"></i>
									</div>
									<div className="col-10 px-2">
										<div className="font-medium">LinkedIn</div>
										<div className="text-zinc-400">Follow our latest news</div>
									</div>
								</div>
							</Link>
						</li>

						<li className="rounded-lg hover:bg-zinc-600">
							<Link href={"https://github.com/Mahfujur-Rahman-0"}>
								<div className="row flex items-center">
									<div className="col-2 bg-zinc-900 rounded-lg p-2">
										<i className="fa-brands text-xl fa-github"></i>
									</div>
									<div className="col-10 px-2">
										<div className="font-medium">GitHub</div>
										<div className="text-zinc-400">Follow our latest news</div>
									</div>
								</div>
							</Link>
						</li>
						<li className="rounded-lg hover:bg-zinc-600">
							<Link
								href={"https://www.facebook.com/profile.php?id=100092208460963"}
							>
								<div className="row flex items-center">
									<div className="col-2 bg-zinc-900 rounded-lg p-2">
										<i className="fa-brands text-xl fa-facebook"></i>
									</div>
									<div className="col-10 px-2">
										<div className="font-medium">FaceBook</div>
										<div className="text-zinc-400">Follow our latest news</div>
									</div>
								</div>
							</Link>
						</li>
						<li className="rounded-lg hover:bg-zinc-600">
							<Link href={"https://wa.me/qr/L23ZNJS3TNLOB1"}>
								<div className="row flex items-center">
									<div className="col-2 bg-zinc-900 rounded-lg p-2">
										<i className="fa-brands text-xl fa-whatsapp"></i>
									</div>
									<div className="col-10 px-2">
										<div className="font-medium">WhatsApp</div>
										<div className="text-zinc-400">Follow our latest news</div>
									</div>
								</div>
							</Link>
						</li>
					</ul>
				</ul>
				<ul className="lg:hidden block w-full h-full text-decoration-none font-medium ml-auto text-sm text-white">
					<Link
						className="hover:text-stone-300 "
						href={"https://github.com/Mahfujur-Rahman-0"}
					>
						<li className="hover:bg-zinc-600 flex items-center py-3 px-2 border-gray-900 border-b">
							<i className="fa-brands fa-github text-lg text-white pr-1"></i>{" "}
							Star Us
						</li>
					</Link>

					<Link href={"/pages/signin"}>
						<li className="w-full hover:bg-zinc-600 py-3 px-2 border-gray-900 border-b uppercase">
							Sign In
						</li>
					</Link>
					<Link href={"/pages/signup"}>
						<li className="w-full hover:bg-zinc-600 py-3 px-2 border-gray-900 border-b uppercase">
							Get Started
						</li>
					</Link>
				</ul>
			</div>
		</header>
	);
}
