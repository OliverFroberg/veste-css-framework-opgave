"use client"
import Link from "next/link"
import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"

export function NavBar() {
	const [open, setOpen] = React.useState(false)

	return (
		<nav className={"wrapper p-6"}>
			<div className={"flex items-center justify-between"}>
				<Link href={"/"} className={"spinnaker text-2xl text-white"}>Veste</Link>

				{/* Desktop links */}
				<ul className={"hidden md:flex uppercase font-light items-center gap-8"}>
					<li><Link href={"/"} className={"hover:text-white"}>Home</Link></li>
					<li><Link href={"/"} className={"hover:text-white"}>Collection</Link></li>
					<li><Link href={"/"} className={"hover:text-white"}>Lookbook</Link></li>
					<li><Link href={"/"} className={"hover:text-white"}>Customer care</Link></li>
					<li><Link href={"/"} className={"hover:text-white"}>Visit us</Link></li>
				</ul>

				{/* Mobile burger menu button */}
				<button
					type={"button"}
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					aria-controls={"mobile-menu"}
					className={`md:hidden flex items-center justify-center p-1 text-white aspect-square border border-white`}
					onClick={() => setOpen((v) => !v)}
				>
					{open ? (
						<FontAwesomeIcon icon={faXmark} size={"2x"}/>
					) : (
						<FontAwesomeIcon icon={faBars} size={"2x"}/>
					)}
				</button>
			</div>

			{/* Mobile burger menu */}
			<div
				id={"mobile-menu"}
				className={`md:hidden overflow-hidden transition-[max-height] duration-300 
							${open ? "max-h-96" : "max-h-0"}`}
			>
				<ul className={"mt-4 flex flex-col gap-4 uppercase font-light"}>
					<li><Link href={"/"} className={"hover:text-white"} onClick={() => setOpen(false)}>Home</Link></li>
					<li><Link href={"/"} className={"hover:text-white"} onClick={() => setOpen(false)}>Collection</Link></li>
					<li><Link href={"/"} className={"hover:text-white"} onClick={() => setOpen(false)}>Lookbook</Link></li>
					<li><Link href={"/"} className={"hover:text-white"} onClick={() => setOpen(false)}>Customer care</Link></li>
					<li><Link href={"/"} className={"hover:text-white"} onClick={() => setOpen(false)}>Visit us</Link></li>
				</ul>
			</div>
		</nav>
	)
}