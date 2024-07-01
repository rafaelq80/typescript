function somar(numero1: number, numero2: number) {
	return new Promise((resolve, reject) => {
		let result = numero1 + numero2;
		if (result > 0) {
			resolve(result);
		} else {
			reject('O resultado é inválido');
		}
	});
}

//console.log(somar(2, 5));

// somar(2, 5)
// 	.then(resultado => {
// 		console.log(`O resultado é ${resultado}`);
// 	})
// 	.catch(error => {
// 		console.error(`Ocorreu um erro: ${error}`);
// 	});

// async function soma(){
// 	await somar(2,5).then(resultado => {;
//         console.log(resultado);
//     });
// }

// soma()