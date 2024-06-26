import MainLogo from '../../../public/logo/main_logo_545x155.webp'
import Image from 'next/image'

import styled from 'styled-components'

/** HOME */
export default function Page() {
  const categories = ['감염병', '선청성 질환', '신생물']
  const healthInfoSummaries = [
    {
      title: '아토피에 좋은 음식',
      imgSrc: 'https://source.unsplash.com/random/300×300/?skin',
    },
    {
      title: '🥕 당근 먹어야함',
      imgSrc: 'https://source.unsplash.com/random/300×300/?carrot',
    },
    {
      title: '비타민 관련 정보',
      imgSrc: 'https://source.unsplash.com/random/300×300/?vitamin',
    },
  ]
  return (
      <>
        {categories.map((category, idx) => {
          return (
              <div key={idx}>{category}</div>
          )
        })}
        <Image className="bg-red-500 flex w-screen mr-10" src={MainLogo} alt='HearUR_Logo'></Image>
        {healthInfoSummaries.map((summary, idx) => {
          return (
              <div key={idx}>{summary.title}</div>
          )
        })}
        <div>
          <div className="space-x-4">

            <button
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-700 transition duration-300">
              기본 버튼
            </button>


            <button
                className="px-4 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300">
              아웃라인 버튼
            </button>


            <button className="px-4 py-2 text-blue-500 font-semibold rounded hover:underline transition duration-300">
              텍스트 버튼
            </button>
            <button
                className="flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-700 transition duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              아이콘 버튼
            </button>


            <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-full shadow hover:bg-red-700 transition duration-300">
              둥근 버튼
            </button>
          </div>
        </div>
      </>
  );
}
