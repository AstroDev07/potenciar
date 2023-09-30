// Funcion para elevar un nemero a una potencia

/*

Para usarla debes incluir 2 parametros de tipo numerico. 
En el primer parametro el numero que se desea usar
y en el segundo parametro la potencia a la cual se desea elevar el primer numero.

Ejemplo: 
Para elevar 5 a la 10ma potencia, escribir:

potenciar(5, 10)

*/

const potenciar = (x, n)=>{
	//Revisar que ambos parametros sean numeros
	if( x == NaN || n == NaN){
		return 'Uno de los parametros no es un Numero'
	}
	else{
		let num;
		// Si n es cero devuelve 1
		if(n==0){
			return 1
		}

		// Si n es negativo devuelve 1/(a^n)

		/*
			HAY ERRORES EN ESTA PARTE

			Podrias ayudarme?? :)

			Funciona, creo, pero no me da el mismo
			resultado que la calculadora del telefono
		*/
		else if( n<0 ){
			// Primero llevar n a positivo
			let pn=n
			let i=0
			for(i; pn<=0; i++){
				pn++
			}
			for(i;i>=0;i--){
				pn++
			}

			for(let i=1; i<=pn; i++){
				num = x*i;
			}
			return 1/num
		}
		// En caso contrario opera de forma normal
		else{
			for(let i=1; i<=n; i++){
				num = x*i;
			}
			return num
		}
	}
}

console.log(potenciar(2, -5))