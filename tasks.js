function approach1(formula) {
	let brackets = { '[': 0, '{': 0, '(': 0, ']': 0, '}': 0, ')': 0 };
	for (let i = 1; i <= formula.length; i++) {
		let curser = formula.charAt(i);
		if (brackets[curser] !== undefined) brackets[curser] = brackets[curser] + 1;
	}
	if (brackets['['] == brackets[']'] && brackets['{'] == brackets['}'] && brackets['('] == brackets[')']) return true;
	else return false;
}

function approach2(formula) {
	let stack = [];
	let top;
	for (let i = 1; i <= formula.length; i++) {
		let curser = formula.charAt(i);
		if (curser === '[' || curser == '(' || curser == '{') {
			stack.push(curser);
			console.log('start sss', stack, stack.length);
		}
		if (stack.length === 0) {
			console.log('start ', stack, stack.length)
			return false;
		}
		switch (curser) {
			case ']': {
				top = stack[stack.length - 1];
				stack.pop();
				if (top == ')' || top == '}') {
					console.log(']')
					return false
				};
				break;
			}
			case ')': {
				top = stack[stack.length - 1];
				stack.pop();
				if (top == ']' || top == '}') {
					console.log(')')
					return false
				};
				break;
			}
			case '}': {
				top = stack[stack.length - 1];
				stack.pop();
				if (top == ']' || top == ')') {
					console.log('}')
					return false
				};
				break;
			}

		}
	}
	return stack.length == 0;
}

console.log(approach1('[]([a+b])')); // true
console.log(approach1('[]([a+b))')); // false
console.log(approach1('[]{([a+b)')); // false

