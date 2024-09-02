import styled, { keyframes } from "styled-components";
import BgIMage from "common/assets/image/main-bg.jpeg";
import MobIMage from "common/assets/image/mobile-bg.png";

const Bubble = keyframes`
  0% {
		box-shadow: 0 0 0 3px rgba(255,65,108,0.3);
		opacity: 1;
		transform: scale3d(1, 1, 1);
	}
	100% {
		box-shadow: 0 0 0 100px rgba(255,65,108,0);
		opacity: 0;
		transform: scale3d(1, 1, 1);
	}
`;

export const BannerWrapper = styled.section`
  padding: 100px 0 50px 0;
  background-image: url("https://cdn.triton-series.com/wp-content/uploads/2019/12/02135525/main-banner.png");
  background-size: contain;
  background-position: top center;
  overflow: hidden;
  background-repeat: no-repeat;
  background-color: #000;
  min-height: 76vh;
  .video-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: nowrap;
    align-content: center;
  }
  .react-player__play-icon {
    border-color: transparent transparent transparent red !important;
    border-width: 36px 0px 36px 56px !important;
  }
  @media (max-width: 575px) {
    padding: 120px 0 0 0;
    background-size: contain;
    background-image: url("https://cdn.triton-series.com/wp-content/uploads/2019/12/02135522/mobile-banner.png");
    min-height: 80vh;
    .react-reveal > div {
      width: 400px !important;
      height: 225px !important;
    }
  }
  .text-st {
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    color: #fff;
    padding-top: 40px;
    & span {
      font-size: 20px;
      font-weight: bold;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .banner-shape {
    z-index: 2;
  }
`;

export const DiscountWrapper = styled.div`
  text-align: center;
`;

export const DiscountLabel = styled.div`
  font-family: "Open Sans", sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 9px 22px;
  margin-bottom: 22px;
  background-color: rgba(255, 255, 255, 0.15);
  @media (max-width: 575px) {
    padding: 7px 10px;
  }
`;

export const VideoModal = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
   
    );
    opacity: 0.2;
    pointer-events: none;
    z-index: 2;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const PlayButton = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ff4553;
  cursor: pointer;
  outline: 0;
  z-index: 2;
  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
    svg {
      width: 30px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: none;
    top: 0;
    left: 0;
    border-radius: inherit;
  }
  &:focus {
    &:after {
      animation: ${Bubble} 0.5s ease-out forwards;
    }
  }
`;

export const VideoWrapper = styled.div`
  max-width: calc(100% - 30px);
  width: 900px;
  position: relative;
  &:before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
