import Image from "next/image";

export default function AdBox(){
    return(
        <>
            <div className="w-[calc(100%-2rem)] m-4">
                <a href="https://m.ssg.com/membership/gate.ssg">
                    <Image alt="2.0_공통_금액혜택_문구수정" src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202307/2023072514341351731208882220_399.jpg&amp;w=750&amp;h=0" width={550} height={100}/>
                </a>
            </div>
        </>
    )
}