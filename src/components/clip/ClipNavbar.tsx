type ClipNumsType = {
  [key: string]: number
}

type ClipNavbarProps = {
  clipNums: ClipNumsType
}

export default function ClipNavbar({ clipNums }: ClipNavbarProps) {
  //브랜드, 카테고리 좋아요는 페이지 따로 만들기
  return (
    <nav className="text-sm bg-[#F5F5F5]">
      <ul className="px-4 py-5 flex flex-row gap-3">
        <li>
          <button>
            <span>상품 ({clipNums.item})</span>
          </button>
        </li>
        <li>
          <span>브랜드&스토어 ({clipNums.brand})</span>
        </li>
        <li>
          <span>카테고리 ({clipNums.category})</span>
        </li>
      </ul>
    </nav>
  )
}
