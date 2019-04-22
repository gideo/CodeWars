// 8kyu - Is it a paldinrome?
// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

#include <string>

bool isPalindrom (const std::string& str) {
  std::string lstr = str;
  for (char& c : lstr) {
  c = toupper(c);
  }
  return lstr == std::string(lstr.rbegin(), lstr.rend());
}