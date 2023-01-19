 

function first_n_vowels(phrase, n) {
    // write your code here
    let vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < phrase.length; i++) {
        if (vowels.indexOf(phrase[i]) !== -1) {
            result += phrase[i];
            if (result.length >= n) {
                break;
            }
        }
    }
    if(result.length < n){
     	return "invalid";   
    }
    return result;
}


/* OR */

function first_n_vowels(phrase, n) {
    let result = phrase.match(/[aeiouAEIOU]/g);
   if (result.length >= n) {
         result = result.slice(0,n).join('')
         break;
            }
   if(result.length < n){
     	result= "invalid";   
   }
      return result;

}





/*
وصف التحدي
قم بكتابة دالة function تستقبل متغيرين، المتغير الأول عبارة عن نص من نوع string و المتغير الثاني عبارة عن عدد من نوع integer ، تقوم الدالة باستخراج أحرف العلة من النص المدخل إعتمادًا على العدد المدخل. في حال أن العدد المدخل أكبر من حروف العلة : تقوم الدالة بإظهار رسالة invalid ، و في حال أن العدد المدخل أصغر أو مساوي لحروف العلة : تقوم بإرجاع الحروف من نوع string بناء على العدد المدخل.
*/
