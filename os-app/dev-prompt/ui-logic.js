const mod = {
	
	MSWPermalinkEncode (inputData) {
		if (typeof inputData !== 'string') {
			throw new Error('MSWErrorInputNotValid');
		}

		return encodeURIComponent(inputData).split('').reduce(function (coll, item) {
			return coll.concat(['(', ')', '*'].includes(item) ? `%${ parseInt(item.charCodeAt(0)).toString(16) }` : item);
		}, '');

	},
	
	MSWStringify (inputData) {
		if (typeof inputData === 'string') {
			return inputData;
		}

		return JSON.stringify(inputData);

	},

};

Object.assign(exports, mod);
