let userConfirmed = confirm("ต้องการดำเนินการต่อหรือไม่?");
console.log(userConfirmed);

if (userConfirmed) {
    // location.href = "thankyou.html";
    location.assign('./thankyou.html');
} else {
    location.assign('https://youtu.be/XRVQKihyACM?si=ru7S8Dkg-EmdVNfS'); // อันนี้ผมทำเล่นๆ นะคับ
}