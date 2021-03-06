var evt = {
	addListener: function(obj, type, fn) {
		if (obj.addEventListener) {
			obj.addEventListener(type, fn);
		} else {
			obj.attachEvent("on" + type, fn);
		}
	},
	removeListener: function(obj, type, fn) {
		if (obj.removeEventListener) {
			obj.removeEventListener(type, fn);
		} else {
			obj.detachEvent("on" + type, fn);
		}
	},
	getTarget: function(e) {
		if (e.target) {
			return e.target;
		} else {
			return e.srcElement;
		}
		
	},
	preventDefault: function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	},
	isOldIE: function() {
		return typeof document.addEventListener == "undefined";
	}
};