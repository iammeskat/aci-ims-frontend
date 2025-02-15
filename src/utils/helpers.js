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