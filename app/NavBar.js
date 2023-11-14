"use client" 

import Link from 'next/link';
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


const HeadContationer = styled.header`
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    position: fixed;
    z-index: 1100;
    top: 0px;
    left: auto;
    right: 0px;
    background-color: rgba(0, 0, 0, 0.87);
    color: rgba(0, 0, 0, 0.87);
    font-family: "Noto-Sans-KR-Black";
`;

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 12px;
    min-height : 56px;
    color: rgb(255, 255, 255);
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding-left: 0;
`;

const Li = styled.li`
    padding: 0px 12px;
    margin: 0;
    text-decoration: none;
`;

export default function NavBar() {
  return (
    <HeadContationer className=''>
      <NavContainer>
      <Link href="/">
        <FontAwesomeIcon icon={faHouse} size='2x'/>
      </Link>
      <div className='pl-14'>About this</div>
      <List>
        <Li><Link href='https://github.com/hongju2024' passHref><FontAwesomeIcon icon={faGithub} size='2x'/></Link></Li>
        <Li><Link href="mailto:juwon2024@gmail.com" title="Send an Email"><FontAwesomeIcon icon={faEnvelope} size='2x'/></Link></Li>
      </List>
      </NavContainer>
    </HeadContationer>
  );
}