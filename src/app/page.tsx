import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<main>
			<section>
				<div className={"bg-[#feeae3]/30 text-black border-black"}>
					<div className={"wrapper flex flex-col md:flex-row"}>
						<div className="relative w-full aspect-square flex-1/2">
							<Image src={"/img1.jpg"} alt={"Sultry & Smart"} fill/>
						</div>
						<Link href={"/"} className={"bg-[#feeae3] flex flex-col flex-1/2 py-20 justify-center items-center gap-4 text-center"}>
							<h2 className={"text-4xl spinnaker"}>Sultry & Smart</h2>
							<p className={"text-2xl uppercase"}>Hot spring looks</p>
							<div className={"border-b-4 w-14"}/>
							<p className={"text-2xl"}>Shop Women</p>
						</Link>
					</div>
				</div>
				<div className={"bg-[#a3c7bd]/30 text-white border-white"}>
					<div className={"wrapper flex flex-col md:flex-row-reverse"}>
						<div className="relative w-full aspect-square flex-1/2">
							<Image src={"/img2.jpg"} alt={"Elegant & Slick"} fill/>
						</div>
						<Link href={"/"} className={"bg-[#a3c7bd] flex flex-col flex-1/2 py-20 justify-center items-center gap-4 text-center"}>
							<h2 className={"text-4xl spinnaker"}>Elegant & Slick</h2>
							<p className={"text-2xl uppercase"}>Get ready for summer</p>
							<div className={"border-b-4 w-14"}/>
							<p className={"text-2xl"}>Shop Men</p>
						</Link>
					</div>
				</div>
			</section>

			<section>
				<div className={"wrapper py-12"}>
					<h2 className={"spinnaker text-3xl text-center mb-12"}>New arrivals</h2>
					<div className={"grid md:grid-cols-3 gap-4 px-8 md:px-0"}>
						<Link href={"/"} className={"bg-gray-300"}>
							<div className="relative w-full object-cover">
								<Image src={"/img3.jpg"} alt={"Pleated Skirt"} width={800} height={800} className={"w-full max-h-160 object-cover"}></Image>
							</div>
							<div className={"text-center py-4"}>
								<p className={"uppercase text-lg"}>Pleated Skirt</p>
								<p className={"pt-2"}>$49.00</p>
							</div>
						</Link>
						<Link href={"/"} className={"bg-gray-300"}>
							<div className="relative w-full object-cover">
								<Image src={"/img4.jpg"} alt={"Slim fit chinos"} width={800} height={800} className={"w-full max-h-200 object-cover"}></Image>
							</div>
							<div className={"text-center py-4"}>
								<p className={"uppercase text-lg"}>Slim fit chinos</p>
								<p className={"pt-2"}>$45.00</p>
							</div>
						</Link>
						<Link href={"/"} className={"bg-gray-300"}>
							<div className="relative w-full object-cover">
								<Image src={"/img5.jpg"} alt={"Printed chiffon dress"} width={800} height={800} className={"w-full max-h-200 object-cover"}></Image>
							</div>
							<div className={"text-center py-4"}>
								<p className={"uppercase text-lg"}>Printed chiffon dress</p>
								<p className={"pt-2"}>$120.00</p>
							</div>
						</Link>
					</div>

					<div className={"flex flex-col-reverse md:flex-col gap-8 text-center py-12"}>
						<div>
							<h2 className={"text-2xl spinnaker"}>Get on the list</h2>
							<p className={"text-lg"}>and be the first to shop new arrivals and exclusive promotions.</p>
						</div>
						<form className={"flex flex-col gap-2 items-center px-6 md:w-100 mx-auto"}>
							<input type={"email"} className={"border-1 border-gray-500 px-6 w-full text-sm h-12"} placeholder={"Enter your email here"}/>
							<button type={"submit"} className={"bg-gray-500 text-white w-full text-lg h-12"}>Subscribe Now</button>
						</form>
					</div>
				</div>
			</section>

			<section className={"bg-dark text-white"}>
				<div className={"wrapper grid md:grid-cols-2 gap-12 py-12 px-8 md:px-0"}>
					<Link href={"/"} className={"grid w-full aspect-square"}>
						<Image src={"/img6.jpg"} alt={"Accessories"} width={500} height={500} className={"col-span-full row-span-full w-full h-full"}/>
						<div className={"flex flex-col justify-center gap-4 text-center row-span-full col-span-full z-1"}>
							<p className={"uppercase text-lg"}>Swoon-worthy</p>
							<p className={"uppercase text-4xl"}>Accessories</p>
						</div>
					</Link>
					<Link href={"/"} className={"grid w-full aspect-square"}>
						<Image src={"/img7.jpg"} alt={"Winter sale"} width={500} height={500} className={"col-span-full row-span-full w-full h-full"}/>
						<div className={"flex flex-col justify-center gap-4 text-center row-span-full col-span-full"}>
							<p className={"uppercase text-lg"}>Winter sale</p>
							<p className={"uppercase text-4xl"}>Now 30% off</p>
						</div>
					</Link>
				</div>
			</section>
		</main>
	)
}
