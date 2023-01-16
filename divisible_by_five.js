
function divisible_by_five(num) {
  
 // if number model of 5 is 0 then it means this number can be divided by 5
	if((num % 5) === 0){
    	return true;
    }else {
    	return false;
    }
}










/*
وصف التحدي
قم بكتابة دالة function تستقبل عدد صحيح integer. تقوم الدالة بالتحقق من العدد ما إذا كان يقبل القسمة على العدد 5 أم لا عن طريق إرجاع القيمة true في حال كان العدد القسمة، و false في حال كان غير ذلك.

المخرجات المتوقعة
الاختبار 1

المدخلات (Inputs)
num = 3
المخرجات (Outputs)
false
الاختبار 2

المدخلات (Inputs)
num = 5
المخرجات (Outputs)
true
الاختبار 3

المدخلات (Inputs)
num = 25
المخرجات (Outputs)
true
الاختبار 4

المدخلات (Inputs)
num = 40
المخرجات (Outputs)
true
*/
