import {useState} from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className="navbar__logo">nextmap</div>
                <ul className="navbar__list">
                    <li className="navbar__list--item"><Link href="/stores">맛집 목록</Link></li>
                    <li className="navbar__list--item"><Link href="/stores/new">맛집 등록</Link></li>
                    <li className="navbar__list--item"><Link href="/users/likes">찜한 목록</Link></li>
                    <li className="navbar__list--item"><Link href="/users/mypage">마이페이지</Link></li>
                </ul>
                <button 
                    role="presentation" 
                    className="navbar__button"
                    onClick={() => {
                        setIsOpen((val) => !val)
                    }}
                >
                    {isOpen ? <AiOutlineClose /> : <BiMenu />}
                </button>

                {/* mobile */}
                {isOpen && (
                    <div className="navbar--mobile">
                        <ul className="navbar__list--mobile">
                            <li className="navbar__list--item--mobile"><Link href="/stores">맛집 목록</Link></li>
                            <li className="navbar__list--item--mobile"><Link href="/stores/new">맛집 등록</Link></li>
                            <li className="navbar__list--item--mobile"><Link href="/users/likes">찜한 목록</Link></li>
                            <li className="navbar__list--item--mobile"><Link href="/users/mypage">마이페이지</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}