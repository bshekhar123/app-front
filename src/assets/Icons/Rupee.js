import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Rupee = (props) => (
  <Svg
    width={6}
    height={7}
    viewBox="0 0 6 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.775 1C5.89926 1 6 0.916047 6 0.8125V0.1875C6 0.0839531 5.89926 0 5.775 0H0.225C0.100744 0 0 0.0839531 0 0.1875V0.886688C0 0.990234 0.100744 1.07419 0.225 1.07419H1.824C2.33602 1.07419 2.72889 1.22978 2.96719 1.5H0.225C0.100744 1.5 0 1.58395 0 1.6875V2.3125C0 2.41605 0.100744 2.5 0.225 2.5H3.20169C3.08513 3.06384 2.58368 3.41613 1.8 3.41613H0.225C0.100744 3.41613 0 3.50008 0 3.60362V4.43194C0 4.48427 0.02625 4.53422 0.0723938 4.56972L3.16712 6.95028C3.20868 6.98225 3.26317 7 3.31973 7H4.86776C5.07259 7 5.17088 6.7905 5.02037 6.67472L2.19133 4.49853C3.62569 4.46197 4.65028 3.66423 4.78479 2.5H5.775C5.89926 2.5 6 2.41605 6 2.3125V1.6875C6 1.58395 5.89926 1.5 5.775 1.5H4.67456C4.6092 1.31967 4.51931 1.15241 4.40734 1H5.775Z"
      fill="black"
    />
  </Svg>
);
export default Rupee;