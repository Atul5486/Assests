let card=document.querySelector('.card');

let form=document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let bio = document.querySelector('#bio').value;
    let image=document.querySelector('#image').value;
    let users=[]
    users.push({name, bio, image});
    users.forEach(user => {
        let card = document.createElement('div');
        card.classList.add('card', 'bg-zinc-800', 'p-5', 'rounded-md', 'w-60', 'flex', 'flex-col', 'items-center');
        card.innerHTML = `
                     <div class="img w-20 h-20">
                     <img class="object-cover rounded-[50%] w-full h-full" src="${user.image}" alt="No image">
                     </div>
                     <h1 class="text-2xl">${user.name}</h1>
                     <p class="text-sm">${user.bio}</p>
                 </div>`
         document.querySelector('.cards').appendChild(card);
    });

    form.reset();
})
