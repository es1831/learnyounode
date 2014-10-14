var answer = 0;

for (var i=2; i< process.argv.length; i++){

	answer+= +process.argv[i];
}
console.log(answer);