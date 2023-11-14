import Head from 'next/head'
import Image from 'next/image'
import Lay from '../components/lay';
import profilePic from '../../public/FrodoLOTR4.jpeg';
import Footer from '../components/footer'

export default function IntroPost() {
  return (
    <Lay className='p-8 '>

      <Head>
        <title>title</title>
      </Head>


      <main className="min-h-screen p-8 grow flex flex-col items-center justify-start text-center">
        <h1 className='leading-tight text-[30px]'>

          About Me

        </h1>

        <div className='mt-[40px]'>
          <Image src={profilePic} className="rounded-[50%]"
            height={150} width={150} alt="프로필사진" vertical-align="middle" />

          <div className='inline-block'>
            <h2 className='ml-5 font-semibold text-[25px] tracking-[3px]'>  홍주원 <span className='ml-[2px] text-rose-400 text-[10px] italic'> 서비스프레소 </span>
            </h2>
            <p className='mt-2 font-mono text-[10px]'> Juwon Hong </p>
            <p className='mt-[2px] font-mono text-[13px]'> 천안시 </p>
            <br></br>
            <p className='font-mono text-[0.8px] tracking-tighter mb-[10px]'> Handong Global University <br></br> GE & 컴퓨터공학 </p>

          </div>

          <div className='font-medium text-[15px] text-inherit max-w-[300px] mt-7 
                 proportional-nums border-inherit border-b-2 border-solid rounded-[10px] mb-3'> Info.</div>
          <ul className='whitespace-pre list-inside text-justify text-[11px]  font-sans proportional-nums border-inherit border-solid rounded-[10px] mb-6'>
            <li className='ml-10 mb-1' >    생년월일 : 98.12.17 </li>
            <li className='ml-10 mb-1'>    MBTI : INTP</li>
            <li className='ml-10 mb-1'>    혈액형 : O</li>
            <li className='ml-10 mb-1'>    취미 : 테니스</li>
          </ul>

          <div className='font-medium text-[15px] text-inherit max-w-[300px] mt-8 
                 proportional-nums border-inherit border-b-2 border-solid rounded-[10px] mb-3'> 소속</div>
          <ul className='lwhitespace-pre ist-inside text-justify text-[11px] font-sans proportional-nums border-inherit border-solid rounded-[10px] mb-6'>
            <li className='ml-10 mb-1 '>     그랜드슬램, 테니스 동아리</li>
            <li className='ml-10 mb-1 '>     서비스 프레소, 웹개발학회</li>

          </ul>

          <div className='font-medium text-[15px] text-inherit max-w-[300px] mt-8 
                 proportional-nums border-inherit border-b-2 border-solid rounded-[10px] mb-3'> 활동 내역</div>
          <ul className='lwhitespace-pre ist-inside text-justify text-[11px] font-sans  proportional-nums border-inherit border-solid rounded-[10px] mb-6'>
            <li className='ml-10 mb-1'>    2023 서비스프레소 학회장</li>
          </ul>

        </div>

      </main>

      <Footer></Footer>

    </Lay>
  );
}