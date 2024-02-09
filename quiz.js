const studentGrades = [100, 50, 65, 70, 85, 96, 45];

//const computeGrades(array)=

function computeGrades(array) {
	A = 0;
	B = 0;
	C = 0;
	D = 0;
	F = 0;
	for (let index = 0; index < array.length; index++) {
		if (A >= 90 && A <= 100) {
			return array.number;
		} else if (B >= 80 && B <= 89) {
			return array.number;
		} else if (C >= 70 && C <= 79) {
			return array.number;
		} else if (D >= 60 && D <= 69) {
			return array.number;
		} else if (F < 60) {
			return array.number;
		}
	}
}

const result = computeGrades(studentGrades);
console.log(result);
