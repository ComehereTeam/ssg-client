"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function TopNav(){

    const [underline, setUnderline] = useState("홈");
    const callCurrentInner = (value:string) => {setUnderline(value)}

    return(
        <>
            <nav className="overflow-auto w-full top-0 left-0 sticky z-50 bg-white">
                <ul className="flex justify-between text-[15px] leading-3 font-normal font-[pretendard]  whitespace-nowrap">
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin] ">
                        <Link href="#" 
                        className={underline == "홈" ? "border-b-2 border-black" : ""}
                        onClick={() => callCurrentInner("홈")}
                        >홈</Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#"
                        className={underline == "특가" ? "border-b-2 border-black" : ""}
                        onClick={() => callCurrentInner("특가")}
                        >특가</Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#"
                        className={underline == "베스트" ? "border-b-2 border-black" : ""}
                        onClick={() => callCurrentInner("베스트")}
                        >베스트</Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#"
                        className={underline == "명품" ? "border-b-2 border-black" : ""}
                        onClick={() => callCurrentInner("명품")}
                        >명품</Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#"
                        className={underline == "뷰티" ? "border-b-2 border-black" : ""}
                        onClick={() => callCurrentInner("뷰티")}
                        >뷰티</Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#"
                        className={underline == "패션" ? "border-b-2 border-black" : ""}
                        onClick={() => callCurrentInner("패션")}
                        >패션</Link>
                    </li>
                    <li className="my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#"
                        className={underline == "SSGTV" ? "border-b-2 border-black" : ""}
                        onClick={() => callCurrentInner("SSGTV")}
                        ><Image alt="쓱TV" src="https://sui.ssgcdn.com/cmpt/banner/202402/2024022816022058499040766014_217.png" width={60} height={46} priority className="mx-auto"/></Link>
                    </li>
                    <li className="text-center my-auto flex-grow font-[Pretendard-Thin]">
                        <Link href="#"
                        className={underline == "브랜드" ? "border-b-2 border-black" : ""}
                        onClick={() => callCurrentInner("브랜드")}
                        >브랜드</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}