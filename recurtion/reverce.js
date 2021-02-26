/*
    Function to reverce a string
*/
function reverse(str) {
  // sanising input field
  if (str.length == 1) return str;

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}
console.log(reverse("awesome"));
console.log(reverse("rithmschool"));
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
