import Link from "next/link"

export default function Home() {
  return(
    <>
      <h1 className="font-bold">Map Index Page</h1>
      <ul className="px-4 py-2">
        <li><Link href="/stores">맛집목록</Link></li>
        <li><Link href="/stores/new">맛집생성</Link></li>
        <li><Link href="/stores/1">맛집상세</Link></li>
        <li><Link href="/stores/1/edit">맛집수정</Link></li>
        <li><Link href="/users/login">로그인</Link></li>
        <li><Link href="/users/mypage">마이페이지</Link></li>
        <li><Link href="/users/likes">찜목록</Link></li>
      </ul>
    </>
  )
}
