"use strict"

$("document").ready(function(){
	$("#add").click(function(){
		var a = parseInt($("#firstNum").val());
		var b = parseInt($("#secondNum").val());

		var ans = add(a, b);
		$("#ans").val(ans);
	});

	$("#sub").click(function(){
		var a = parseInt($("#firstNum").val());
		var b = parseInt($("#secondNum").val());

		var ans = sub(a, b);
		$("#ans").val(ans);
	});

	$("#mul").click(function(){
		var a = parseInt($("#firstNum").val());
		var b = parseInt($("#secondNum").val());

		var ans = mul(a, b);
		$("#ans").val(ans);
	});
});

//src for add and mul: http://www.pixelstech.net/article/1344149505-Implementation-of-%2B---*-with-bitwise-operator
var add = function(a, b){
	var x = a & b; //AND
	var y = a ^ b; //XOR

	while(x != 0){
		var carry = x << 1;
		x = y & carry;
		y = y ^ carry;
	};

	return y;
};

var sub = function(a, b){
	//find two's compliment aka negate the number
	var x = ~b;
	x = add(x, 1);

	var y = a;
	return add(x, y);
};

var mul = function(a, b){
	var x = 1;
	var y = 0;

	if(a < 0){
		a = add(~a, 1);
		b = add(~b, 1);
	};

	while(a >= x && b){
		if(a & x)
			y = add(b, y);
		b <<= 1;
		x <<= 1;
	};
	return y;
};