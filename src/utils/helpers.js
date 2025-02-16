export const toQueryStrings = (object) => {
	if (!object) return "";
	else
		return (
			"?" +
			Object.keys(object)
				.map((key) => `${key}=${object[key].toString()}`)
				.join("&")
		);
};



export const getElementWidthById = (eleId) => (
	document.getElementById(eleId)?.clientWidth
)