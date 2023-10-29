"use client";

import Link from "next/link";

const Navbar = () => {
	return (
		<div className="w-full flex items-center justify-center fixed py-1 px-5 z-10 bg-primary-light">
			<nav className="w-full max-w-[1300px] flex items-center">
				<Link href="/">
					<h1 className="font-muli font-bold text-3xl tracking-wider">
						Wet P
					</h1>
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
