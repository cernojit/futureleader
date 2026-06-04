"use client";

import styles from "./BlobBackground.module.css";

export function BlobBackground() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 600 600"
        preserveAspectRatio="xMaxYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
              result="cm"
            />
          </filter>

          <radialGradient id="g0" cx="292" cy="171.5" r="56.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#cf5a45" />
            <stop offset="0.6" stopColor="#cf5a45" stopOpacity="0.7" />
            <stop offset="1" stopColor="#cf5a45" stopOpacity="0.4" />
          </radialGradient>
          <radialGradient id="g1" cx="297" cy="167.5" r="37.2" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#cf5a45" stopOpacity="0.9" />
            <stop offset="1" stopColor="#cf5a45" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="g2" cx="294" cy="157" r="23" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#cf5a45" />
            <stop offset="1" stopColor="#cf5a45" stopOpacity="0.6" />
          </radialGradient>
          <radialGradient
            id="g3"
            cx="284.5"
            cy="421.5"
            r="53.5"
            gradientTransform="matrix(-0.028 -1 5.998 -0.168 -2235.5 776.8)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#cf5a45" stopOpacity="0.8" />
            <stop offset="1" stopColor="#cf5a45" stopOpacity="0.3" />
          </radialGradient>
          <radialGradient id="g4" cx="291.9" cy="167.5" r="41.1" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#cf5a45" stopOpacity="0.85" />
            <stop offset="1" stopColor="#cf5a45" stopOpacity="0.45" />
          </radialGradient>
          <radialGradient id="g5" cx="306.5" cy="155" r="14.1" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#cf5a45" />
            <stop offset="1" stopColor="#cf5a45" stopOpacity="0.5" />
          </radialGradient>
        </defs>

        <g filter="url(#goo)">
          <path
            className={styles.blob0}
            fill="url(#g0)"
            d="M326.2,149.5c-5,19.2-21.4,29.2-37.8,26.6c-16.5-2.9-33.4-12.9-37.1-26.6
              c-3.8-13.6,12.5-32.1,37.8-34.9C314.4,111.8,331.3,130.4,326.2,149.5z"
          />
          <path
            className={styles.blob1}
            fill="url(#g1)"
            d="M320.5,146.4c-4.4,10.1-16.4,20.2-26.8,25.3c-10.4,5.2-22.4-2.9-26.8-15.2
              c-4.4-11.6,7.6-20.4,26.8-25.3C312.9,126.3,324.9,135.6,320.5,146.4z"
          />
          <path
            className={styles.blob2}
            fill="url(#g2)"
            d="M278,147.7c2.7-7.1,9.4-15.7,15.4-16.4c5.9-0.4,12.6,8.5,15.4,16.9
              c2.7,8.4-4.2,14.9-15.4,14.2C282.2,161.5,275.3,154.8,278,147.7z"
          />
          <path
            className={styles.blob3}
            fill="url(#g3)"
            d="M354,381.2c6.8,3.4,5.4,7.4-5.6,10.4c-10.7,3.1-31.1,5.1-54.4,8.4
              c-23.3,3.3-43.7,0.8-54.4-2.4c-11-3.4-12.4-7.6-5.6-13.8c6.8-7,18.9-14.6,29.6-17.4c11-3.3,20.6-1.8,30.4-1.4
              c9.8,0.4,19.4,5.1,30.4,8.3C335.1,376.8,347.2,378.6,354,381.2z"
          />
          <path
            className={styles.blob4}
            fill="url(#g4)"
            d="M312.7,147.3c-2.1,16.4-15.3,27.2-23.2,25.3c-8.1-1.8-12.6-13-14.8-24.9
              c-1.9-11.8,2.7-22.7,14.8-25.3C301.5,119.6,314.7,130.8,312.7,147.3z"
          />
          <path
            className={styles.blob5}
            fill="url(#g5)"
            d="M317.8,147.4c-1,8.2-9.8,10.3-13.8,9.3c-4-0.9-6.5-3-7.6-8.9c-1-5.9,2.3-8.5,8.4-9.8
              C310.8,136.6,318.8,139.1,317.8,147.4z"
          />
        </g>
      </svg>
    </div>
  );
}
