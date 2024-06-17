"use client";

import cn from "classnames";
import { FC, useEffect, useState } from "react";
import "../../../styles/audio.scss";
import NextSong from "./nextSong";
const playlist = [
  "/music/awake.mp3",
  "/music/terminal.mp3",
  "/music/sleeping.mp3",
];
const AudioPlayer: FC = () => {
  const [music, setMusic] = useState<HTMLAudioElement | undefined>(undefined);
  const [activeTrack, setActiveTrack] = useState(0);
  const [musicStatus, setMusicStatus] = useState(false);
  useEffect(() => {
    if (musicStatus) {
      activateMusic(playlist[activeTrack]);
    } else {
      activateMusic("");
    }
  }, [musicStatus]);

  const activateMusic = (currentTrack: string) => {
    if (music && currentTrack == "") {
      music.pause();
      music.volume = 0;
      localStorage.setItem("music", "false");
      return;
    }
    if (currentTrack == playlist[activeTrack] && music) {
      music.play();
      music.loop = true;
      music.volume = 0.2;
      localStorage.setItem("music", "true");
    } else if (music && currentTrack !== playlist[activeTrack]) {
      music.src = playlist[activeTrack + 1]
        ? playlist[activeTrack + 1]
        : playlist[0];
      const index = playlist.findIndex((el) => el == currentTrack);
      setMusicStatus(true)
      setActiveTrack(index);
      music.play();
      music.loop = true;
      music.volume = 0.2;
    }
  };
  useEffect(() => {
    setMusic(new Audio(playlist[0]));
  }, []);
  return (
    <div className={cn("audio", "audio_terminal")}>
      {!musicStatus ? (
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
          onClick={() => setMusicStatus(!musicStatus)}
        >
          <path
            d="M1.99999 21L1.99999 11L6.49999 11L15 6L15 26L6.49999 21L1.99999 21Z"
            stroke="white"
          />
          <path d="M30.3135 10L18.9998 21.3137" stroke="white" />
          <path d="M19 10L30.3137 21.3137" stroke="white" />
        </svg>
      ) : (
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
          onClick={() => setMusicStatus(!musicStatus)}
        >
          <path
            d="M1.99999 21L1.99999 11L6.49999 11L15 6L15 26L6.49999 21L1.99999 21Z"
            stroke="white"
          />
          <path
            d="M22.5922 27.0862C24.0481 26.4831 25.371 25.5992 26.4853 24.4849C27.5996 23.3706 28.4835 22.0477 29.0866 20.5918C29.6896 19.1359 30 17.5755 30 15.9996C30 14.4238 29.6896 12.8633 29.0866 11.4074C28.4835 9.95153 27.5996 8.62866 26.4853 7.51436C25.371 6.40006 24.0481 5.51614 22.5922 4.91309"
            stroke="white"
          />
          <path
            d="M20.2961 21.5436C21.0241 21.2421 21.6855 20.8001 22.2426 20.2429C22.7998 19.6858 23.2417 19.0244 23.5433 18.2964C23.8448 17.5685 24 16.7882 24 16.0003C24 15.2124 23.8448 14.4322 23.5433 13.7042C23.2417 12.9763 22.7998 12.3148 22.2426 11.7577C21.6855 11.2005 21.0241 10.7586 20.2961 10.457"
            stroke="white"
          />
        </svg>
      )}
      <span>{playlist[activeTrack].replace("/music/", "")}</span>
      <div
        className="audio_next"
        onClick={() => {
          if (activeTrack < 2) {
            activateMusic(playlist[activeTrack + 1]);
          } else {
            activateMusic(playlist[0]);
          }
        }}
      >
        <NextSong />
      </div>
    </div>
  );
};

export default AudioPlayer;
