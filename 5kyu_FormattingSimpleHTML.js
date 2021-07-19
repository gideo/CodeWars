// 5kyu - Formatting Simple HTML

// Task
// Format a source in a simple HTML-dialect.

// A source consists of tags and text.
// It is not necessarily valid HTML, or a complete document ( it may be a snippet ).

// Tags and text
// Tags are either matching opening and closing tags ( <tag>content</tag> ), or self-closed ( <tag /> ).
// All tags* need to be on their own line. There are no inline tags.
// Content between opening and closing tags should be indented.
// No whitespace ( other than indent/newline ) should be before or after tags.

// All ( consecutive ) text needs to be on its own line.
// Text may have spurious whitespace. This needs to be collapsed to single spaces.
// ( Do not reformat whitespace inside tags. )
// Text should not begin or end with whitespace ( other than indent/newline ).

// * Exception: the <br /> tag, when not after a tag, should be after its text without an intervening newline.
// It should be followed by a newline.

// Details
// Newlines must be \n
// Indents must be two spaces per level
// Whitespace in text must be single spaces
// Reformatted source must end with a newline
// There will be a sanity check: repeated application should not change the output
// All input is valid
// There will be no whitespace in tags until after the tag ( <tag or </tag ), and
// there will be no whitespace directly before the closing > ( tag> or /> )
// Preloaded
// For testing and debugging, escHTML and escWS have been predefined;
// they escape HTML special characters ( & < > ) and whitespace ( tab, newline and space ) respectively for printing to the console.
// When using both, apply escWS after escHTML, or your spaces will come out as &amp;space;.

function indent(source) {
  let str = source.match( /<[^>]*>|[^<\s]+/g ) || [], r = "";
  for ( let ind = 0, i = 0; i in str; i++ ) {
    if ( /^<\//.test(str[i]) ) ind--;
    if ( r.slice(-1)==="\n" ) r += "  ".repeat(ind);
    r += str[i] ;
    if ( /^<(?!\/).*[^/]>$/.test(str[i]) ) ind++;
    if ( /^</.test(str[i]) || /^<(?!br)/.test( str[i+1] || "<>" )) 
      r += "\n";
    else if ( ! /^<br/.test( str[i+1] || "" ))
      r += " ";
  }
  return r;
}