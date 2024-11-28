/**
 * Renders a logo.
 *
 * @returns {JSX.Element}
 * @since 1.0.0
 */
export default function Logo(): JSX.Element {
	return (
		<div className="branding flex items-center gap-x-2">
			<svg
				width="30"
				height="auto"
				viewBox="0 0 184 242"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="inline-flex items-center leading-3"
			>
				<path
					d="M183.384 37.0641C145.502 37.0641 116.481 26.0126 91.94 1.64453C67.402 26.0126 38.382 37.0641 0.503155 37.0641C0.503155 100.518 -12.3558 191.42 91.94 228.333C196.243 191.42 183.384 100.518 183.384 37.0641Z"
					fill="url(#paint0_linear_3929_798)"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M103.297 117.64L45.6719 241.948L142.558 91.272L86.5529 99.611L139.926 0L47.9659 123.57L103.297 117.64Z"
					fill="url(#paint1_linear_3929_798)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_3929_798"
						x1="91.944"
						y1="1.64453"
						x2="91.944"
						y2="228.333"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#177DF3" />
						<stop offset="1" stopColor="#0A38A5" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_3929_798"
						x1="195"
						y1="10"
						x2="-7.00011"
						y2="221"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.0833333" stopColor="#0847D9" />
						<stop offset="0.502991" stopColor="white" />
						<stop offset="0.9375" stopColor="#0847D9" />
					</linearGradient>
				</defs>
			</svg>

			<svg
				width="136"
				height="21"
				viewBox="0 0 136 21"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="fill-slate-900 dark:fill-slate-100"
			>
				<path d="M5.62 16.1C4.59333 16.1 3.67333 15.86 2.86 15.38C2.04667 14.8867 1.4 14.22 0.92 13.38C0.453333 12.54 0.22 11.5933 0.22 10.54C0.22 9.47333 0.46 8.52 0.94 7.68C1.43333 6.84 2.1 6.18 2.94 5.7C3.78 5.20667 4.72667 4.96 5.78 4.96C6.83333 4.96 7.77333 5.20667 8.6 5.7C9.44 6.18 10.1 6.84 10.58 7.68C11.0733 8.52 11.3267 9.47333 11.34 10.54L10.72 11.02C10.72 11.98 10.4933 12.8467 10.04 13.62C9.6 14.38 8.99333 14.9867 8.22 15.44C7.46 15.88 6.59333 16.1 5.62 16.1ZM5.78 14.7C6.55333 14.7 7.24 14.52 7.84 14.16C8.45333 13.8 8.93333 13.3067 9.28 12.68C9.64 12.04 9.82 11.3267 9.82 10.54C9.82 9.74 9.64 9.02667 9.28 8.4C8.93333 7.77333 8.45333 7.28 7.84 6.92C7.24 6.54667 6.55333 6.36 5.78 6.36C5.02 6.36 4.33333 6.54667 3.72 6.92C3.10667 7.28 2.62 7.77333 2.26 8.4C1.9 9.02667 1.72 9.74 1.72 10.54C1.72 11.3267 1.9 12.04 2.26 12.68C2.62 13.3067 3.10667 13.8 3.72 14.16C4.33333 14.52 5.02 14.7 5.78 14.7ZM10.56 16C10.3333 16 10.1467 15.9333 10 15.8C9.85333 15.6533 9.78 15.4667 9.78 15.24V11.82L10.16 10.24L11.34 10.54V15.24C11.34 15.4667 11.2667 15.6533 11.12 15.8C10.9733 15.9333 10.7867 16 10.56 16ZM18.3152 16.1C17.2618 16.1 16.3152 15.86 15.4752 15.38C14.6352 14.8867 13.9685 14.22 13.4752 13.38C12.9952 12.54 12.7552 11.5867 12.7552 10.52C12.7552 9.46667 12.9885 8.52 13.4552 7.68C13.9352 6.84 14.5818 6.18 15.3952 5.7C16.2085 5.20667 17.1285 4.96 18.1552 4.96C19.0485 4.96 19.8552 5.15333 20.5752 5.54C21.2952 5.91333 21.8752 6.41333 22.3152 7.04V1.16C22.3152 0.919999 22.3885 0.733332 22.5352 0.599999C22.6818 0.453333 22.8685 0.38 23.0952 0.38C23.3218 0.38 23.5085 0.453333 23.6552 0.599999C23.8018 0.733332 23.8752 0.919999 23.8752 1.16V10.6C23.8485 11.64 23.5885 12.58 23.0952 13.42C22.6152 14.2467 21.9552 14.9 21.1152 15.38C20.2885 15.86 19.3552 16.1 18.3152 16.1ZM18.3152 14.7C19.0885 14.7 19.7752 14.52 20.3752 14.16C20.9885 13.7867 21.4685 13.2867 21.8152 12.66C22.1752 12.0333 22.3552 11.32 22.3552 10.52C22.3552 9.73333 22.1752 9.02667 21.8152 8.4C21.4685 7.76 20.9885 7.26 20.3752 6.9C19.7752 6.54 19.0885 6.36 18.3152 6.36C17.5552 6.36 16.8685 6.54 16.2552 6.9C15.6418 7.26 15.1552 7.76 14.7952 8.4C14.4352 9.02667 14.2552 9.73333 14.2552 10.52C14.2552 11.32 14.4352 12.0333 14.7952 12.66C15.1552 13.2867 15.6418 13.7867 16.2552 14.16C16.8685 14.52 17.5552 14.7 18.3152 14.7ZM31.4558 16.1C30.4024 16.1 29.4558 15.86 28.6158 15.38C27.7758 14.8867 27.1091 14.22 26.6158 13.38C26.1358 12.54 25.8958 11.5867 25.8958 10.52C25.8958 9.46667 26.1291 8.52 26.5958 7.68C27.0758 6.84 27.7224 6.18 28.5358 5.7C29.3491 5.20667 30.2691 4.96 31.2958 4.96C32.1891 4.96 32.9958 5.15333 33.7158 5.54C34.4358 5.91333 35.0158 6.41333 35.4558 7.04V1.16C35.4558 0.919999 35.5291 0.733332 35.6758 0.599999C35.8224 0.453333 36.0091 0.38 36.2358 0.38C36.4624 0.38 36.6491 0.453333 36.7958 0.599999C36.9424 0.733332 37.0158 0.919999 37.0158 1.16V10.6C36.9891 11.64 36.7291 12.58 36.2358 13.42C35.7558 14.2467 35.0958 14.9 34.2558 15.38C33.4291 15.86 32.4958 16.1 31.4558 16.1ZM31.4558 14.7C32.2291 14.7 32.9158 14.52 33.5158 14.16C34.1291 13.7867 34.6091 13.2867 34.9558 12.66C35.3158 12.0333 35.4958 11.32 35.4958 10.52C35.4958 9.73333 35.3158 9.02667 34.9558 8.4C34.6091 7.76 34.1291 7.26 33.5158 6.9C32.9158 6.54 32.2291 6.36 31.4558 6.36C30.6958 6.36 30.0091 6.54 29.3958 6.9C28.7824 7.26 28.2958 7.76 27.9358 8.4C27.5758 9.02667 27.3958 9.73333 27.3958 10.52C27.3958 11.32 27.5758 12.0333 27.9358 12.66C28.2958 13.2867 28.7824 13.7867 29.3958 14.16C30.0091 14.52 30.6958 14.7 31.4558 14.7ZM44.5964 16.1C43.5297 16.1 42.5764 15.86 41.7364 15.38C40.8964 14.9 40.2364 14.24 39.7564 13.4C39.2764 12.56 39.0364 11.6067 39.0364 10.54C39.0364 9.46 39.2764 8.5 39.7564 7.66C40.2364 6.82 40.8964 6.16 41.7364 5.68C42.5764 5.2 43.5297 4.96 44.5964 4.96C45.6631 4.96 46.6097 5.2 47.4364 5.68C48.2764 6.16 48.9364 6.82 49.4164 7.66C49.8964 8.5 50.1431 9.46 50.1564 10.54C50.1564 11.6067 49.9097 12.56 49.4164 13.4C48.9364 14.24 48.2764 14.9 47.4364 15.38C46.6097 15.86 45.6631 16.1 44.5964 16.1ZM44.5964 14.7C45.3697 14.7 46.0631 14.52 46.6764 14.16C47.2897 13.8 47.7697 13.3067 48.1164 12.68C48.4631 12.0533 48.6364 11.34 48.6364 10.54C48.6364 9.74 48.4631 9.02667 48.1164 8.4C47.7697 7.76 47.2897 7.26 46.6764 6.9C46.0631 6.54 45.3697 6.36 44.5964 6.36C43.8231 6.36 43.1297 6.54 42.5164 6.9C41.9031 7.26 41.4164 7.76 41.0564 8.4C40.7097 9.02667 40.5364 9.74 40.5364 10.54C40.5364 11.34 40.7097 12.0533 41.0564 12.68C41.4164 13.3067 41.9031 13.8 42.5164 14.16C43.1297 14.52 43.8231 14.7 44.5964 14.7ZM61.5316 16C61.3049 16 61.1182 15.9267 60.9716 15.78C60.8249 15.6333 60.7516 15.4533 60.7516 15.24V10.04C60.7516 9.21333 60.5916 8.53333 60.2716 8C59.9649 7.46667 59.5382 7.06667 58.9916 6.8C58.4582 6.53333 57.8516 6.4 57.1716 6.4C56.5182 6.4 55.9249 6.52667 55.3916 6.78C54.8716 7.03333 54.4582 7.38 54.1516 7.82C53.8449 8.26 53.6916 8.76 53.6916 9.32H52.5916C52.6182 8.48 52.8449 7.73333 53.2716 7.08C53.6982 6.41333 54.2649 5.89333 54.9716 5.52C55.6782 5.13333 56.4649 4.94 57.3316 4.94C58.2782 4.94 59.1249 5.14 59.8716 5.54C60.6182 5.92667 61.2049 6.5 61.6316 7.26C62.0716 8.02 62.2916 8.94667 62.2916 10.04V15.24C62.2916 15.4533 62.2182 15.6333 62.0716 15.78C61.9249 15.9267 61.7449 16 61.5316 16ZM52.9316 16C52.6916 16 52.4982 15.9333 52.3516 15.8C52.2182 15.6533 52.1516 15.4667 52.1516 15.24V5.84C52.1516 5.6 52.2182 5.41333 52.3516 5.28C52.4982 5.13333 52.6916 5.06 52.9316 5.06C53.1582 5.06 53.3382 5.13333 53.4716 5.28C53.6182 5.41333 53.6916 5.6 53.6916 5.84V15.24C53.6916 15.4667 53.6182 15.6533 53.4716 15.8C53.3382 15.9333 53.1582 16 52.9316 16ZM65.7867 16C65.5467 16 65.3534 15.9333 65.2067 15.8C65.0734 15.6533 65.0067 15.46 65.0067 15.22V5.84C65.0067 5.6 65.0734 5.41333 65.2067 5.28C65.3534 5.13333 65.5467 5.06 65.7867 5.06C66.0134 5.06 66.1934 5.13333 66.3267 5.28C66.4734 5.41333 66.5467 5.6 66.5467 5.84V15.22C66.5467 15.46 66.4734 15.6533 66.3267 15.8C66.1934 15.9333 66.0134 16 65.7867 16ZM65.7667 2.98C65.4734 2.98 65.2201 2.87333 65.0067 2.66C64.7934 2.44667 64.6867 2.18667 64.6867 1.88C64.6867 1.54667 64.7934 1.28667 65.0067 1.1C65.2334 0.899999 65.4934 0.799999 65.7867 0.799999C66.0667 0.799999 66.3134 0.899999 66.5267 1.1C66.7534 1.28667 66.8667 1.54667 66.8667 1.88C66.8667 2.18667 66.7601 2.44667 66.5467 2.66C66.3334 2.87333 66.0734 2.98 65.7667 2.98ZM70.828 16C70.628 16 70.4546 15.9333 70.308 15.8C70.1613 15.6533 70.088 15.46 70.088 15.22V5.08C70.088 4.14667 70.248 3.32667 70.568 2.62C70.888 1.91333 71.3613 1.36667 71.988 0.979999C72.6146 0.579999 73.3813 0.38 74.288 0.38C74.5146 0.38 74.7013 0.446666 74.848 0.579999C74.9946 0.713333 75.068 0.879999 75.068 1.08C75.068 1.28 74.9946 1.44667 74.848 1.58C74.7013 1.71333 74.5146 1.78 74.288 1.78C73.688 1.78 73.188 1.92 72.788 2.2C72.4013 2.46667 72.108 2.84667 71.908 3.34C71.7213 3.82 71.628 4.37333 71.628 5V15.22C71.628 15.46 71.5546 15.6533 71.408 15.8C71.2746 15.9333 71.0813 16 70.828 16ZM68.808 6.8C68.5946 6.8 68.4213 6.74 68.288 6.62C68.168 6.48667 68.108 6.32667 68.108 6.14C68.108 5.94 68.168 5.78 68.288 5.66C68.4213 5.52667 68.5946 5.46 68.808 5.46H74.028C74.2413 5.46 74.408 5.52667 74.528 5.66C74.6613 5.78 74.728 5.94 74.728 6.14C74.728 6.32667 74.6613 6.48667 74.528 6.62C74.408 6.74 74.2413 6.8 74.028 6.8H68.808ZM77.6722 20.76C77.5655 20.76 77.4455 20.7333 77.3122 20.68C76.8589 20.48 76.7322 20.16 76.9322 19.72L83.3922 5.48C83.5922 5.05333 83.9122 4.93333 84.3522 5.12C84.8055 5.30667 84.9322 5.62 84.7322 6.06L78.2522 20.3C78.1189 20.6067 77.9255 20.76 77.6722 20.76ZM79.8922 15.66C79.6922 15.7533 79.5055 15.7733 79.3322 15.72C79.1589 15.6533 79.0189 15.52 78.9122 15.32L74.4522 6.08C74.3589 5.88 74.3455 5.69333 74.4122 5.52C74.4789 5.34667 74.6122 5.21333 74.8122 5.12C75.0122 5.02667 75.1989 5.01333 75.3722 5.08C75.5455 5.13333 75.6789 5.26 75.7722 5.46L80.1522 14.7C80.2589 14.9 80.2922 15.0867 80.2522 15.26C80.2122 15.4333 80.0922 15.5667 79.8922 15.66ZM95.5686 16.08C94.5286 16.08 93.5886 15.84 92.7486 15.36C91.9219 14.8667 91.2619 14.2 90.7686 13.36C90.2886 12.52 90.0486 11.5733 90.0486 10.52C90.0486 9.46667 90.2686 8.52667 90.7086 7.7C91.1619 6.86 91.7753 6.2 92.5486 5.72C93.3219 5.22667 94.1953 4.98 95.1686 4.98C95.9553 4.98 96.6819 5.14667 97.3486 5.48C98.0153 5.8 98.5753 6.24 99.0286 6.8V1.4C99.0286 1.09333 99.1219 0.846666 99.3086 0.66C99.5086 0.473333 99.7553 0.38 100.049 0.38C100.355 0.38 100.602 0.473333 100.789 0.66C100.975 0.846666 101.069 1.09333 101.069 1.4V10.52C101.069 11.5733 100.822 12.52 100.329 13.36C99.8486 14.2 99.1953 14.8667 98.3686 15.36C97.5419 15.84 96.6086 16.08 95.5686 16.08ZM95.5686 14.28C96.2486 14.28 96.8553 14.12 97.3886 13.8C97.9219 13.4667 98.3419 13.0133 98.6486 12.44C98.9553 11.8667 99.1086 11.2267 99.1086 10.52C99.1086 9.8 98.9553 9.16 98.6486 8.6C98.3419 8.04 97.9219 7.6 97.3886 7.28C96.8553 6.94667 96.2486 6.78 95.5686 6.78C94.9019 6.78 94.2953 6.94667 93.7486 7.28C93.2153 7.6 92.7886 8.04 92.4686 8.6C92.1619 9.16 92.0086 9.8 92.0086 10.52C92.0086 11.2267 92.1619 11.8667 92.4686 12.44C92.7886 13.0133 93.2153 13.4667 93.7486 13.8C94.2953 14.12 94.9019 14.28 95.5686 14.28ZM108.631 16.08C107.551 16.08 106.598 15.8467 105.771 15.38C104.944 14.9 104.291 14.2467 103.811 13.42C103.344 12.58 103.111 11.62 103.111 10.54C103.111 9.44667 103.344 8.48667 103.811 7.66C104.291 6.82 104.944 6.16667 105.771 5.7C106.598 5.22 107.551 4.98 108.631 4.98C109.698 4.98 110.644 5.22 111.471 5.7C112.298 6.16667 112.944 6.82 113.411 7.66C113.891 8.48667 114.131 9.44667 114.131 10.54C114.131 11.62 113.898 12.58 113.431 13.42C112.964 14.2467 112.318 14.9 111.491 15.38C110.664 15.8467 109.711 16.08 108.631 16.08ZM108.631 14.28C109.324 14.28 109.938 14.12 110.471 13.8C111.004 13.48 111.418 13.04 111.711 12.48C112.018 11.92 112.171 11.2733 112.171 10.54C112.171 9.80667 112.018 9.16 111.711 8.6C111.418 8.02667 111.004 7.58 110.471 7.26C109.938 6.94 109.324 6.78 108.631 6.78C107.938 6.78 107.324 6.94 106.791 7.26C106.258 7.58 105.838 8.02667 105.531 8.6C105.224 9.16 105.071 9.80667 105.071 10.54C105.071 11.2733 105.224 11.92 105.531 12.48C105.838 13.04 106.258 13.48 106.791 13.8C107.324 14.12 107.938 14.28 108.631 14.28ZM121.127 16.08C120.061 16.08 119.107 15.84 118.267 15.36C117.441 14.8667 116.787 14.2067 116.307 13.38C115.841 12.54 115.607 11.5933 115.607 10.54C115.607 9.46 115.841 8.5 116.307 7.66C116.774 6.82 117.414 6.16667 118.227 5.7C119.041 5.22 119.974 4.98 121.027 4.98C121.814 4.98 122.534 5.13333 123.187 5.44C123.841 5.73333 124.427 6.18 124.947 6.78C125.134 6.99333 125.201 7.21333 125.147 7.44C125.094 7.66667 124.947 7.86667 124.707 8.04C124.521 8.17333 124.314 8.22 124.087 8.18C123.861 8.12667 123.654 8.00667 123.467 7.82C122.814 7.12667 122.001 6.78 121.027 6.78C120.347 6.78 119.747 6.94 119.227 7.26C118.707 7.56667 118.301 8 118.007 8.56C117.714 9.12 117.567 9.78 117.567 10.54C117.567 11.26 117.714 11.9 118.007 12.46C118.314 13.02 118.734 13.4667 119.267 13.8C119.801 14.12 120.421 14.28 121.127 14.28C121.594 14.28 122.001 14.2267 122.347 14.12C122.707 14 123.034 13.82 123.327 13.58C123.541 13.4067 123.761 13.3133 123.987 13.3C124.214 13.2733 124.414 13.3333 124.587 13.48C124.814 13.6667 124.941 13.88 124.967 14.12C124.994 14.3467 124.914 14.5533 124.727 14.74C123.767 15.6333 122.567 16.08 121.127 16.08ZM131.159 16.08C130.226 16.08 129.359 15.94 128.559 15.66C127.772 15.3667 127.159 15 126.719 14.56C126.519 14.3467 126.432 14.1067 126.459 13.84C126.499 13.56 126.632 13.3333 126.859 13.16C127.126 12.9467 127.386 12.86 127.639 12.9C127.906 12.9267 128.132 13.04 128.319 13.24C128.546 13.4933 128.906 13.7333 129.399 13.96C129.906 14.1733 130.466 14.28 131.079 14.28C131.852 14.28 132.439 14.1533 132.839 13.9C133.252 13.6467 133.466 13.32 133.479 12.92C133.492 12.52 133.299 12.1733 132.899 11.88C132.512 11.5867 131.799 11.3467 130.759 11.16C129.412 10.8933 128.432 10.4933 127.819 9.96C127.219 9.42667 126.919 8.77333 126.919 8C126.919 7.32 127.119 6.76 127.519 6.32C127.919 5.86667 128.432 5.53333 129.059 5.32C129.686 5.09333 130.339 4.98 131.019 4.98C131.899 4.98 132.679 5.12 133.359 5.4C134.039 5.68 134.579 6.06667 134.979 6.56C135.166 6.77333 135.252 7 135.239 7.24C135.226 7.46667 135.112 7.66 134.899 7.82C134.686 7.96667 134.432 8.01333 134.139 7.96C133.846 7.90667 133.599 7.78667 133.399 7.6C133.066 7.28 132.706 7.06 132.319 6.94C131.932 6.82 131.486 6.76 130.979 6.76C130.392 6.76 129.892 6.86 129.479 7.06C129.079 7.26 128.879 7.55333 128.879 7.94C128.879 8.18 128.939 8.4 129.059 8.6C129.192 8.78667 129.446 8.96 129.819 9.12C130.192 9.26667 130.739 9.41333 131.459 9.56C132.459 9.76 133.246 10.0133 133.819 10.32C134.406 10.6267 134.826 10.9867 135.079 11.4C135.332 11.8 135.459 12.2667 135.459 12.8C135.459 13.4133 135.292 13.9667 134.959 14.46C134.639 14.9533 134.159 15.3467 133.519 15.64C132.892 15.9333 132.106 16.08 131.159 16.08Z" />
			</svg>
		</div>
	);
}
