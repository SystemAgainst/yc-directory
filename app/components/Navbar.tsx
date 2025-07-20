import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth'


const Navbar = async () => {
	const session = await auth();

	const isUserLoggedIn = session && session?.user;

	return (
		<div className="px-5 py-3 bg-white shadow-sm font-work-sans">
			<nav className="flex items-center justify-between">
				<Link href="/" className="text-xl font-bold text-gray-800">
					<Image src="/logo.svg" alt="Logo" width={144} height={30} />
				</Link>

				<div className="flex items-center gap-5 text-black">
					{isUserLoggedIn ? (
						<>
							<Link href="/startup/create" className="text-gray-800 hover:text-blue-600">
								<span>Create</span>				
							</Link>

							<form action={async () => {
								"use server";

								await signOut({ redirectTo: "/" });
							}}>
								<button type="submit">Logout</button>
							</form>

							<Link href={`/user/${session?.user?.id}`}>
								<span>{session?.user?.name}</span>				
							</Link>
						</>
					) : (
						<form action={async () => {
							"use server";

							await signIn('github');
						}}>
							<button type="submit">Login</button>
						</form>
					)
				}
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
