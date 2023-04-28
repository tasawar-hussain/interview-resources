/////////////////////////////////////////////////////
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
  </head>
  <body>
    <div id='root'></div>
    <ol class='list-group'>
      <li>Default value</li>
      <li>Default value</li>
      <li>Default value</li>
      <li>Default value</li>
      <li>Default value</li>
    </ol>

     <script>
      let li = document.querySelectorAll('.list-group > li');
      let i;
      for (i = 0; i < li.length; i++) {
        li[i].addEventListener('click', function (e) {
          e.target.innerHTML = `Item # ${i} is clicked`;
        })
      }
    </script>
  </body>
</html>


// ****************************************** //
function foo(arr=[3,5,7,8,9]) {
  var result = []
  let i;
  for (i = 0; i < 3; i++) {
    result.push(function bar() { console.log(arr[i]) } )
  }
  return result
}

const result = foo()

for (var i = 0; i < 3; i++) {
  result[i]()
}
// ****************************************** //

let i = 0;

for ( i = 1; i < 5; i++) {
  setTimeout(() => console.log(i), 100)
}
