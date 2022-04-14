export default const useFullscreen = (callback) => {
	const element = useRef();
	const runCb = (isFull) => {
		if (callback && typeof callback === 'function') {
			callback(isFull);
		}
	};
	const triggerFull = () => {
		if (element.current) {
			if (element.current.requestFullscreen) {
				element.current.requestFullscreen();
			} else if (element.current.mozRequestFullscreen) {
				element.current.mozRequestFullscreen();
			} else if (element.current.webkitRequestFullscreen) {
				element.current.webkitRequestFullscreen();
			} else if (element.current.msRequestFullscreen) {
				element.current.msRequestFullscreen();
			}
			runCb(true);
		}
	};
	const exitFull = () => {
		document.exitFullscreen();
		if (element.exitFullscreen) {
			element.exitFullscreen();
		} else if (element.mozCancelFullscreen) {
			element.mozCancelFullscreen();
		} else if (element.webkitExitFullscreen) {
			element.webkitExitFullscreen();
		} else if (element.msExitFullscreen) {
			element.msExitFullscreen();
		}
		runCb(false);
	};
	return { element, triggerFull, exitFull };
};
