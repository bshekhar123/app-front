import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Cart = (props) => (
    <Svg
        width={26}
        height={20}
        viewBox="0 0 26 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M7.82075 19.75C7.05547 19.75 6.40096 19.5017 5.85721 19.0052C5.31346 18.5087 5.04159 17.9174 5.04159 17.2313V7.18333L2.83638 2.41667H0.208252V0.25H4.46763L6.46138 4.58333H24.3145C24.7777 4.58333 25.1301 4.75486 25.3718 5.09792C25.6135 5.44097 25.6235 5.79306 25.402 6.15417L21.9583 12.1938C22.9853 12.3382 23.8463 12.7625 24.5411 13.4667C25.2359 14.1708 25.5833 15.0014 25.5833 15.9583C25.5833 17.0056 25.1754 17.8993 24.3598 18.6396C23.5442 19.3799 22.5523 19.75 21.3843 19.75C20.1961 19.75 19.1942 19.3799 18.3786 18.6396C17.5629 17.8993 17.1551 17.0056 17.1551 15.9583C17.1551 15.5972 17.2055 15.2632 17.3062 14.9563C17.4069 14.6493 17.5478 14.3514 17.7291 14.0625L13.7718 13.7375L10.1468 18.6125C9.88499 18.9736 9.54766 19.2535 9.13482 19.4521C8.72197 19.6507 8.28395 19.75 7.82075 19.75ZM19.3603 12.0312L22.351 6.75L7.45825 6.77708L8.96867 10C9.12978 10.3611 9.38655 10.6635 9.73898 10.9073C10.0914 11.151 10.4992 11.291 10.9624 11.3271L19.3603 12.0312ZM7.85096 17.5563C7.89124 17.5563 7.98186 17.5111 8.12284 17.4208L11.053 13.5208C10.0662 13.4306 9.29089 13.2184 8.727 12.8844C8.16311 12.5503 7.7402 12.2028 7.45825 11.8417V17.2583C7.45825 17.3486 7.49853 17.4208 7.57909 17.475C7.65964 17.5292 7.75027 17.5563 7.85096 17.5563ZM21.3541 17.5833C21.8777 17.5833 22.3107 17.4253 22.653 17.1094C22.9954 16.7934 23.1666 16.4097 23.1666 15.9583C23.1666 15.4889 22.9954 15.1007 22.653 14.7938C22.3107 14.4868 21.8777 14.3333 21.3541 14.3333C20.8506 14.3333 20.4227 14.4868 20.0702 14.7938C19.7178 15.1007 19.5416 15.4889 19.5416 15.9583C19.5416 16.4097 19.7178 16.7934 20.0702 17.1094C20.4227 17.4253 20.8506 17.5833 21.3541 17.5833Z"
            fill="#FF4343"
        />
    </Svg>
);
export default Cart;