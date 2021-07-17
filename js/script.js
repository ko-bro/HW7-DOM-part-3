let btn = document.querySelector('button');

btn.addEventListener('click', () =>  {
  
  let task = document.querySelector('input').value;

  let list = document.createElement('li');

  list.innerText = task;

  list.addEventListener('click', (event) => {

    if (event.target.tagName == 'LI') {

      event.target.classList.toggle('done');
    } 
  });

  list.classList.add('need');
  
  document.querySelector('ul').append(list);
});


