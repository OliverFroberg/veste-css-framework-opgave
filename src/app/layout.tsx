import type {Metadata} from "next"
import {Geist, Geist_Mono, Spinnaker} from "next/font/google"
import "./globals.css"
import React from "react"
import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faInstagram, faPinterestP, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {NavBar} from "@/app/NavBar"

const spinnaker = Spinnaker({
	variable: "--font-spinnaker",
	subsets: ["latin"],
	weight: "400",
})

export const metadata: Metadata = {
	title: "Veste",
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={`${spinnaker.variable} antialiased`}>
				<header className={"bg-dark text-stone-400/90"}>
					<NavBar/>
				</header>

				{children}

				<footer className={"bg-[#e4e4e4]"}>
					<div className={"wrapper px-6 py-12 text-stone-400/90"}>
						<div className={"flex flex-col md:flex-row md:justify-around gap-12"}>
							{/* Logo */}
							<h3 className={"text-xl spinnaker"}>Veste</h3>

							{/* Customer care */}
							<div className={"flex flex-col gap-8 md:border-l md:border-current md:pl-4"}>
								<h3 className={"spinnaker"}>Customer care</h3>
								<ul className={"flex flex-col gap-2"}>
									<li><Link href={"/"} className={"hover:text-stone-500 hover:font-bold"}>Shipping Policy</Link></li>
									<li><Link href={"/"} className={"hover:text-stone-500 hover:font-bold"}>Returns Policy</Link></li>
									<li><Link href={"/"} className={"hover:text-stone-500 hover:font-bold"}>Contact Us</Link></li>
									<li><Link href={"/"} className={"hover:text-stone-500 hover:font-bold"}>About Us</Link></li>
								</ul>
							</div>

							{/* Address */}
							<div className={"flex flex-col gap-8 md:border-l md:border-current md:pl-4"}>
								<h3 className={"spinnaker"}>Visit our store</h3>
								<Link href={"/"} className={"hover:text-stone-500 hover:font-bold"}>
									500 Terry Francois Street<br/>
									San Francisco, CA 94158
								</Link>
							</div>

							{/* Socials */}
							<div className={"flex flex-col gap-8 md:border-l md:border-current md:pl-4"}>
								<h3 className={"spinnaker"}>Stay connected</h3>
								<ul className={"flex gap-6"}>
									{/* Instagram */}
									<li><Link href={"/"} className={"hover:text-stone-500"}>
										<FontAwesomeIcon icon={faInstagram} className={"text-4xl md:text-2xl aspect-square"}/>
									</Link></li>

									{/* Facebook */}
									<li><Link href={"/"} className={"hover:text-stone-500"}>
										<FontAwesomeIcon icon={faFacebookF} className={"text-4xl md:text-2xl aspect-square"}/>
									</Link></li>

									{/* Twitter */}
									<li><Link href={"/"} className={"hover:text-stone-500"}>
										<FontAwesomeIcon icon={faTwitter} className={"text-4xl md:text-2xl aspect-square"}/>
									</Link></li>

									{/* Pinterest */}
									<li><Link href={"/"} className={"hover:text-stone-500"}>
										<FontAwesomeIcon icon={faPinterestP} className={"text-4xl md:text-2xl aspect-square"}/>
									</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className={"bg-dark text-center text-white pb-10 md:pb-4 pt-4"}>
						&copy; 2023 by <span className={"uppercase"}>Veste</span>. Proudly created
					</div>
				</footer>
			</body>
		</html>
	)
}
