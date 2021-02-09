
const employee = {name: "Hope", streetAddress: "2417 Bradcliff Dr NE"};

function updateEmployeeWithKeyAndValue(obj, key, value) {
	return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
	obj[key] = value;
	return obj;
}

function deleteFromEmployeeByKey(obj, key) {
	const ans = Object.assign({}, obj);
	delete ans.[key];
	return ans;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
	delete obj.[key];
	return obj;
}
