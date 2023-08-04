function isPalindrome(str) {
       str = str.toLowerCase().replace(/\s/g, "");

    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str.charAt(left) !== str.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

const inputString = "A man a plan a canal Panama";
const result = isPalindrome(inputString);
console.log(result);
