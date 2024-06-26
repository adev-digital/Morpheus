"use client";
import cn from "classnames";

import Link from "next/link";
import "@/styles/header.scss";
import Menu from "../../components/header/menu";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { useConnect } from "@/store/useConnect";
import { addressSlice } from "@/utils/common";
// import Index from "../footer/player/player";

const Header = () => {
  const { address, warpcastUser } = useConnect();
  return (
    <header className={"header"}>
      <div className={"header__line"}>
        <div className={"headerBurger"}>
          <div className={cn("headerBurger__box")}>
            <div>Menu</div>
          </div>

          <Image style={{ marginTop: "7px" }} src={logo} alt={"Logo"} />
          {/*<Index />*/}
        </div>
        <Menu />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            pointerEvents: "auto",
          }}
        >
          <div style={{ color: "white" }}>
            {warpcastUser ? (
              <a
                href={`https://warpcast.com/${warpcastUser.username}`}
                target="_blank"
              >
                <button className={"wrapcast__connect"}>
                  {warpcastUser.displayName}
                </button>
              </a>
            ) : (
              <Link
                href={
                  address
                    ? "https://basescan.org/address/" + address
                    : "/connect"
                }
              >
                <button className={"wrapcast__connect"}>
                  {!address ? "Connect" : addressSlice(address)}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* <HeaderMenu
        openMenu={openMenu}
        closeMenuHandler={setOpenMenu}
      /> */}
    </header>
  );
};

export default Header;
