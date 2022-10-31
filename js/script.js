// navbar sosmed menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


// accordion button
document.querySelectorAll('.accordion__button').forEach( button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        // tambah class accordion__button--active
        button.classList.toggle('accordion__button--active');

        // setelah tombol diklik atau saat ada class accordion__button--active
        if( button.classList.contains('accordion__button--active') ){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

    });
} );


// data
let namaSaya = "RIZKY ANDRIAWAN";
document.getElementById('nama').innerHTML = namaSaya;

let mahasiswa = "Mahasiswa Teknik Informatika";
document.getElementById('mahasiswa').innerHTML = mahasiswa;

let universitas = "[Universitas Islam Raden Rahmat Malang]";
document.getElementById('univ').innerHTML = universitas;

var fbLink = document.getElementById('fb-link');
fbLink.href = "https://www.facebook.com/ghelgameshra.ghelgameshra/";

var igLink = document.getElementById('ig-link');
igLink.href = "https://www.instagram.com/ghelgameshra?r=nametag";

var twitterLink = document.getElementById('twitter-link');
twitterLink.href = "https://twitter.com/ghelgameshra";

var githubLink = document.getElementById('github-link');
githubLink.href = "https://github.com/ghelgameshra";

