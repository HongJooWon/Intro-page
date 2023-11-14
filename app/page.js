import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from '../public/FrodoLOTR4.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>Intro</title>
      </Head>

      <main className="p-16 items-center justify-start text-center">
        <FontAwesomeIcon icon={faHouse} size='2xl' />
        <h3 className="m-0 leading-normal text-4xl text-title text-flex sm:scale-75">
          Juwon Hong
          <span className='text-blue-300 text-[30px] sm:hidden'> &#9786; </span>
          {/* &#9786; */}
        </h3>

        <div className='mt-[30px]'>
          <Image src={profilePic} className="rounded-[30%]"
            height={180} width={180} alt="프로필사진" vertical-align="middle"/>
        </div>

        <div className="md:grid grid-cols-10 grid-rows-2 gap-4 items-center justify-center flex-wrap w-full flex-col">
          {/* link로 다른창으로 넘어가보기 */}
          {/* <h1 className="m-2 p-6 text-justify border-solid rounded-[10px] border-[1px] border-gray-200 
           hover:text-blue-500 hover:border-blue-600 cursor-pointer"> */}

          <div className="col-start-4 col-span-4 m-2 p-3 text-center border-solid rounded-[10px] border-[1px] border-gray-200 
           hover:text-blue-500 hover:border-blue-600 cursor-pointer">

            <Link href="/intro-post">
              <div>
                <p className="mt-3.5 font-normal text-xs"> Who?</p>
                <p className="mt-1 font-normal text-xs"> 프로필 </p>
              </div>
            </Link>
          </div>
          <div className="col-start-4 col-span-2 m-2  text-center border-solid rounded-[10px] border-[1px] border-gray-200
            hover:text-blue-500 hover:border-blue-600 cursor-pointer">
            <a href='https://nextjs.org/' target='_blank' rel="noreferrer noopener">

              <h2 className="text-center m-1 text-sm"> ✏️
                <p className="mt-3.5 font-normal text-xs">Next.js</p>
                <p className="mt-1 font-normal text-[0.5rem]"> 학습하기 </p>
              </h2>
            </a>
          </div>
          <div className="col-start-6 col-span-2 m-2 text-justify border-solid rounded-[10px] border-[1px] border-gray-200
            hover:text-blue-500 hover:border-blue-600 cursor-pointer">
            <a href="https://blog.naver.com/" target='_blank' rel="noreferrer noopener" >
              <h2 className="text-center m-1 text-sm"> link
                <p className="mt-3.5 font-normal text-xs"> Tailwind</p>
                <p className="mt-1 font-normal text-[0.5rem]">  학습하기 </p>
              </h2>
            </a>
          </div>

        </div>
        contact
      </main>
      <footer className="flex flex-1 p-8 border-t-2 border-solid border-indigo-100 justify-center items-center text-gray-800">

          <a href="https://github.com/hongjoowon" target='_blank' rel="noreferrer noopener"
            className=' mr-3'>
            {/* <Image height={30} width={30} className='h-8 m-4' src='/imgs/github.png' /> */}
            <FontAwesomeIcon icon={faGithub} size='2xl' />

          </a>

          <a href='https://instagram.com/' target="_blank" rel="noopener noreferrer"
            className=' mr-3'>
            <FontAwesomeIcon icon={faInstagram} size='2xl' />
          </a>

          <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size='2xl' />
          </a>
      </footer>
      


    </div>
  )
}
