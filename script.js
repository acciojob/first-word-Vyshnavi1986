function firstWord(s) {
  // your code here
	 // If the string is empty or doesn't contain any space, return the entire string
    if (!s || s.indexOf(' ') === -1) {
        return s;
    } else {
        // Otherwise, find the index of the first space and return the substring up to that index
        return s.substring(0, s.indexOf(' '));
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
