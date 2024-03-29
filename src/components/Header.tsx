import Image from "next/image"
import Link from "next/link"
import backArrow from "@/asset/images/backArrow.svg"

type HeaderPropsType = {
  title: string
}

function Header({ title }: HeaderPropsType) {
  return (
    <div className="flex justify-between pr-[49px] w-full h-[42px] text-sm text-center text-black whitespace-nowrap border-b border-solid border-stone-300">
      <Link href="#" className="w-[50px] flex item-center justify-center">
        <Image
          loading="lazy"
          src={backArrow}
          width={22}
          height={41}
          alt="뒤로가기"
        />
      </Link>
      <div className="flex-auto my-auto">{title}</div>
    </div>
  )
}

export default Header
