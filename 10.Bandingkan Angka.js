
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false

function bandingkanAngka(angka1, angka2) {
    var pertama=angka1
    var kedua=angka2
    if (pertama<kedua){
        return true
    }
    else if (pertama===kedua){
        return (angka1-angka2-1)
    }
    else {
        return false}
}



