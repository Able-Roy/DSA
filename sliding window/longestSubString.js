/*
    Find the longest sub string
*/
function findLongestSubstring(str) {
  // sanitsing input
  if (str.length === 0) return 0;

  // Defining windowSum , windowStart , windowEnd, windowSpan
  let windowStart = 0;
  let windowEnd = 0;
  let windowSpan = 1;
  let lookup = {};
  // lookup[str[windowEnd]] = 1;
  // Itrate through str
  while (windowEnd < str.length) {
    lookup[str[windowEnd]] = (lookup[str[windowEnd]] || 0) + 1;
    if (lookup[str[windowEnd]] > 1) { 
      console.log('d1');  
      console.log("windowStart" + windowStart);
      console.log("windowEnd" + windowEnd);
      windowSpan = Math.max(windowSpan, (windowEnd - windowStart));
      console.log("windowSpan" + windowSpan);
      windowStart++;
      windowEnd = windowStart;
      lookup = {};
    }
    else {
      console.log("d2");
      console.log("windowStart" + windowStart);
      console.log("windowEnd" + windowEnd);
      windowSpan = Math.max(windowSpan, (windowEnd - windowStart) + 1);
      console.log("windowSpan" + windowSpan);
      windowEnd++;
    }
    if (windowStart === str.length) break;
  }
  console.table(lookup);
  return windowSpan;
}

//console.log(findLongestSubstring(""));
// console.log(findLongestSubstring("rithmschool"));
// console.log(findLongestSubstring("thisisawesome"));
// console.log(findLongestSubstring("thecatinthehat"));

// console.log(findLongestSubstring("bbbb"));
// console.log(findLongestSubstring("longestsubstring"));
// console.log(findLongestSubstring("thisishowwedoit"));