// 7kyu - ReOrdering

// There is a sentence which has a mistake in it's ordering.

// The part with a capital letter should be the first word.

// Please build a function for re-ordering

// Examples
// >>> re_ordering('ming Yao')
// 'Yao ming'

// >>> re_ordering('Mano donowana')
// 'Mano donowana'

// >>> re_ordering('wario LoBan hello')
// 'LoBan wario hello'

// >>> re_ordering('bull color pig Patrick')
// 'Patrick bull color pig'

function reOrdering(text) {
  let s = text.split(' '), i = s.findIndex(a => a[0] === a[0].toUpperCase());
  return [s[i], ...s.slice(0, i), ...s.slice(i + 1)].join(' ');
}