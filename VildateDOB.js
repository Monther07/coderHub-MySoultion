
function kSumSubset(dateString) {
    // create a new Date object
  let date = new Date(dateString);
  // get the current date
  let today = new Date();
  // check if the input date is before today
  if (date > today) {
    return false;
  }
  // check if the input date is at least 4 years ago
  if (date > new Date(today.getFullYear() - 4, today.getMonth(), today.getDate())) {
    return false;
  }
  // check if the input date is not more than 200 years ago
  if (date < new Date(today.getFullYear() - 200, today.getMonth(), today.getDate())) {
    return false;
  }
  // if all checks pass, return true
  return true;
}


/*
وصف التحدي
قم بكتابة دالة function تستقبل تاريخ ووقت على شكل قيمة نصية string. تقوم الدالة باللتحقق ما إن كان التاريخ المُدخل تاريخ عُمر صحيح أم لا. بحيث تقوم الداله بإرجاع القيمة True في حال كان التاريخ المُدخل تاريخاً صحيحاً وتقوم بإرجاع القيمة False في حال كان التاريخ المُدخل غير صحيح وذلك حسب الشروط التالية:

١. أن يكون التاريخ المدخل قبل تاريخ اليوم الحالي

٢. أن يكون التاريخ المدخل قبل ٤ أعوام كحد أدنى من تاريخ اليوم الحالي

٣. أن يكون التاريخ المدخل لا يتجاوز 200 عام في الماضي عن التاريخ الحالي

المخرجات المتوقعة
الاختبار 1

المدخلات (Inputs)
dateString = '2099-08-02T00:00:00'
المخرجات (Outputs)
false
الاختبار 2

المدخلات (Inputs)
dateString = '2017-10-21T00:00:00'
المخرجات (Outputs)
true
الاختبار 3

المدخلات (Inputs)
dateString = '1111-08-29T00:00:00'
المخرجات (Outputs)
false
الاختبار 4

المدخلات (Inputs)
dateString = '3020-01-01T00:00:00'
المخرجات (Outputs)
false
*/
