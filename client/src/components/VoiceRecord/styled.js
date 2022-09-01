import styled from "styled-components";

export const Container = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.2s;
  margin-top: 64px;
  height: 100vh;
  position: relative;
  & .content {
    font-weight: 800;
    color: #696969;
    padding: 0 0 32px 0;
  }
  & .content span {
    color: #00a0cb;
  }
`;
export const RecordingButtonWrapper = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 20%);
  transition: 0.2s;
  position: relative;
  margin: 24px 0;
  cursor: pointer;

  &.active {
    border-radius: 50px;
    width: 164px;
  }

  & .timer {
    color: #e56d53;
    position: absolute;
    font-size: 28px;
    font-weight: 800;
    top: 15px;
    left: 74px;
  }

  & .tip-icon {
    font-size: 24px;
    color: #e79b8c;
    position: absolute;
    top: -6px;
    right: 0px;
    transition: 0.1s;
    cursor: default;
  }

  & .tip-icon:hover {
    color: rgba(0, 0, 0, 20%);
  }

  & .tip-modal {
    z-index: 1024;
    position: absolute;
    top: -54px;
    padding: 8px 16px;
    border-radius: 4px;
    white-space: nowrap;
    background-color: #cccccc;
    color: #000;
    &::before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: #cccccc;
      bottom: -4px;
      left: 146px;
      transform: rotate(45deg);
    }
  }
`;
export const RecordingButton = styled.button`
  position: absolute;
  top: 11px;
  left: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ff0033;
  transition: 0.2s;

  &:hover {
    transform: scale(1.15);
  }
`;
export const OffIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 30%);
`;
export const Audio = styled.audio`
  width: 400px;
  border-radius: 50px;
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.3);
`;
export const Button = styled.button`
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.3);
  //box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);

  margin-top: 24px;
  background-color: #ff0033;
  color: #ecd7b6;
  width: 400px;
  height: 54px;
  border: none;
  outline: none;
  border-radius: 50px;
  transition-duration: 0.2s;
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    color: #ffffff;
  }

  &:active {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
    position: relative;
    top: 2px;
  }
`;
export const GenreButtonWrapper = styled.div`
  margin-top: 24px;
`;
export const GenreButton = styled.button`
  margin: 0 10px;
  box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.3);
  background-color: #ff0033;
  color: #ecd7b6;
  width: 190px;
  height: 54px;
  border: none;
  outline: none;
  border-radius: 50px;
  transition-duration: 0.2s;
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover {
    color: #ffffff;
  }
  &:active {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
    position: relative;
    top: 2px;
  }
`;
export const ScrollPosition = styled.div`
  position: absolute;
  background-color: transparent;
  bottom: 0;
  left: 0;
`;
