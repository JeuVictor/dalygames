import  logoImg  from '../../../public/logo.svg'
import Link from "next/link";
import Image from "next/image";
import { LiaGamepadSolid } from 'react-icons/lia';


export function Header(){
    return(
        <header className="w-full h-28 bg-slate-100 text-black px-2">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
                <nav className='flex justify-center items-center gap-4'>
                    <Link href="/" >
                        <Image 
                            src={logoImg} 
                            alt="Logo do site dalygames"
                            quality={100}
                            priority={true}
                            className='w-full'/>
                    </Link>

                    <Link href="/">
                        Games
                    </Link>

                    <Link href='/profile'>
                        Perfil
                    </Link>
                </nav>

                <div className='hidden sm:flex justify-center items-center'>
                    <Link href="/">
                        <LiaGamepadSolid size={34} color='#475569'/>
                    </Link>
                </div>
            </div>
        </header>
    )
}