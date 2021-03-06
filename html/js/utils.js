(() => {
	UTILS = {};

	UTILS.parseBSAlertType = function(type) {
		var alertType;
		// Switch statement not consistent with style used in app.js
		switch(type.toLowerCase()) {
			case 'primary':
			default:
			alertType = 'alert-primary';
			break;
			case 'secondary':
			alertType = 'alert-secondary';
			break;
			case 'success':
			alertType = 'alert-success';
			break;
			case 'danger':
			alertType = 'alert-danger';
			break;
			case 'warning':
			alertType = 'alert-warning';
			break;
			case 'info':
			alertType = 'alert-info';
			break;
			// 'light', 'dark' types not included
		}
		return alertType;
	};

	UTILS.parseInt = function(data, defaultValue) {
		let number = parseInt(data);
		if (isNaN(number)) number = defaultValue;
		return number;
	}
})();
