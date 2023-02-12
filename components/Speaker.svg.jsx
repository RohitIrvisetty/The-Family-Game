import { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import styles from "../styles/Speaker.module.css";
import { GameContext } from "../providers/GameProvider";

const Speaker = ({ size, color, style, className }) => {
  const {
    state: { isSoundOn },
    updateState,
  } = useContext(GameContext);

  const unmute = useRef(
    typeof Audio !== "undefined" ? new Audio("/sounds/unmute.mp3") : undefined
  );
  const mute = useRef(
    typeof Audio !== "undefined" ? new Audio("/sounds/mute.mp3") : undefined
  );

  const toggleMute = () => {
    isSoundOn ? mute.current.play() : unmute.current.play();
    updateState({ isSoundOn: !isSoundOn });
  };

  return (
    <button
      className={[className, styles.volume].join(" ")}
      onClick={toggleMute}
    >
      <motion.svg
        layout
        width={size}
        height={size}
        style={style}
        fill={color}
        viewBox="0 0 100 100"
      >
        <motion.path
          layout
          className={isSoundOn ? styles.volume_bar_in : styles.volume_bar_out}
          d="M78.864,17.021c-0.026-0.026-0.056-0.042-0.082-0.067l0.008-0.008l-1.924-1.923l-0.022,0.022
		c-1.05-0.836-2.567-0.788-3.553,0.161l-0.004-0.004l-3.419,3.418l0.023,0.023c-0.773,0.983-0.77,2.365,0.01,3.345l-0.022,0.022
		l0.216,0.216c0,0,0,0,0,0h0l1.707,1.708l0.031-0.031c0.025,0.026,0.042,0.057,0.067,0.083
		c14.358,14.358,14.401,37.688,0.138,52.104l-0.019-0.019l-1.707,1.707l0,0c0,0,0,0,0,0l-0.216,0.216l0.022,0.022
		c-0.836,1.05-0.787,2.568,0.16,3.553l-0.004,0.004l3.42,3.42l0.023-0.023c0.983,0.773,2.365,0.769,3.345-0.011l0.022,0.022
		l0.216-0.216h0l0,0l1.707-1.707l-0.004-0.004C97.105,64.797,97.061,35.219,78.864,17.021z"
        />
        <motion.path
          layout
          className={isSoundOn ? styles.volume_bar_in : styles.volume_bar_out}
          d="M69.376,30.198c-0.026-0.026-0.056-0.042-0.082-0.067l0.008-0.008L67.377,28.2l-0.022,0.022
		c-1.05-0.836-2.568-0.787-3.554,0.16l-0.004-0.004l-0.035,0.035c-0.001,0.001-0.002,0.002-0.003,0.002
		c-0.001,0.001-0.002,0.002-0.002,0.003l-3.149,3.148c-0.001,0.001-0.002,0.002-0.003,0.002c-0.001,0.001-0.002,0.002-0.002,0.003
		l-0.225,0.225l0.023,0.023c-0.773,0.984-0.769,2.365,0.011,3.344l-0.022,0.022l1.923,1.924l0.031-0.031
		c0.025,0.026,0.042,0.057,0.067,0.083c7.091,7.091,7.132,18.594,0.135,25.746l-0.014-0.014L60.825,64.6c0,0,0,0-0.001,0l-0.001,0
		l-0.215,0.215l0.022,0.022c-0.836,1.05-0.788,2.569,0.16,3.554l-0.004,0.004l3.42,3.42l0.023-0.023
		c0.983,0.773,2.364,0.769,3.344-0.011l0.022,0.022l1.923-1.923l-0.004-0.004C80.352,58.886,80.308,41.131,69.376,30.198z"
        />
        <motion.path
          layout
          className={isSoundOn ? styles.volume_speaker : ""}
          d="M52.751,23.803c-0.378,0-0.727,0.108-1.031,0.285l-0.018-0.032L31.238,35.871v0.012l-7.74,4.469H9.016v0.04
		c-0.012,0-0.024-0.004-0.037-0.004c-0.842,0-1.525,0.684-1.525,1.525v20.66c0,0.842,0.683,1.524,1.525,1.524
		c0.013,0,0.024-0.003,0.037-0.004v0.041h14.482l11.524,6.653v-0.031l16.548,9.555c0.336,0.232,0.742,0.372,1.181,0.372
		c1.143,0,2.071-0.927,2.071-2.07c0-0.081-0.015-0.155-0.024-0.233h0.024V25.64h-0.024C54.681,24.609,53.815,23.803,52.751,23.803z"
        />
      </motion.svg>
    </button>
  );
};

Speaker.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

Speaker.defaultProps = {
  size: 50,
  color: "#333",
};

export default Speaker;
