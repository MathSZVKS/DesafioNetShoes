import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  overflow: auto;
  max-height: 720px;
`;

export const Page = styled.div`
  padding: 20px 80px 0px 80px;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  color: #888;
  font-size: 18px;
  text-align: center;
  animation: ${fadeInUp} 0.5s ease forwards;
`;

export const EmptyIcon = styled(AiOutlineHeart)`
  font-size: 64px;
  margin-bottom: 20px;
  color: #ccc;
`;

export const Card = styled.article`
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  animation: ${fadeInUp} 0.5s ease forwards;
`;

export const ImageWrap = styled.div`
  position: relative;
  background: #fafafa;
`;

export const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  font-size: 26px;
  line-height: 1;
  background-color: transparent;
  color: #6b7280;
  &:hover {
    color: #e11d48;
  }
`;

export const Info = styled.div`
  padding: 12px 12px 16px;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  min-height: 38px;
  margin: 0 0 6px;
  text-align: left;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #f59e0b;
  font-size: 14px;
  margin: 2px 0 8px;
  small {
    color: #6b7280;
  }
`;

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
`;

export const OldPrice = styled.span`
  color: #9ca3af;
  text-decoration: line-through;
  font-size: 13px;
`;

export const Price = styled.strong`
  color: #8200ff;
  font-size: 16px;
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0;
  background: ${({ $active }) => ($active ? "#e60023" : "#979797ff")};
  width: 34px;
  height: 34px;
  border-radius: 50%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: background 0.3s ease;
`;

export const HeartIcon = styled(AiOutlineHeart)`
  color: white;
  fill: none;
  stroke-width: 100;
  font-size: 20px;
`;
