import styled from "styled-components";
import { Colors } from "./Colors";

interface Props {
  width?: number
}

export const BaseButton = styled.button<Props>`
  cursor: pointer;
  height: 50px;
  width: ${(props) => (props.width ? props.width + 'px' : "100%")};
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${Colors.gradient};
  color: ${Colors.white};
  border: none;
`;


export const OutlinedButton = styled(BaseButton)<Props>`
  width: ${(props) => (props.width ? props.width + 'px' : "100%")};
  background: transparent;
  color: ${Colors.aqua};
  border: 1px solid ${Colors.aqua};
`;
