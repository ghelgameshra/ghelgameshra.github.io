const fb = $('#fbLink');
const ig = $('#igLink');
const github = $('#githubLink');

const link1 = $('#link2');
const link2 = $('#link2');
const link3 = $('#link3');

$(document).ready(()=>{
    fb.append('<a class="flex items-center gap-2 p-3 duration-300 hover:bg-gray-300 dark:hover:bg-main hover:rounded-md hover:cursor-pointer" href="https://www.facebook.com/ghelgameshra.ghelgameshra/"><i class="fa-brands fa-square-facebook text-xl"></i>Facebook</a>');
    ig.append('<a class="flex items-center gap-2 p-3 duration-300 hover:bg-gray-300 dark:hover:bg-main hover:rounded-md hover:cursor-pointer" href="https://www.instagram.com/ghelgameshra/"><i class="fa-brands fa-square-instagram text-xl"></i>Instagram</a>');
    github.append('<a class="flex items-center gap-2 p-3 duration-300 hover:bg-gray-300 dark:hover:bg-main hover:rounded-md hover:cursor-pointer" href="https://github.com/ghelgameshra"><i class="fa-brands fa-square-github text-xl"></i>Github</a>');

    link1.append('<a class="flex items-center gap-2 p-3 duration-300 hover:bg-gray-300 dark:hover:bg-main hover:rounded-md hover:cursor-pointer" href="https://www.facebook.com/ghelgameshra.ghelgameshra/"><i class="fa-brands fa-chrome text-xl"></i>POS</a>');
    link2.append('<a class="flex items-center gap-2 p-3 duration-300 hover:bg-gray-300 dark:hover:bg-main hover:rounded-md hover:cursor-pointer" href="https://www.instagram.com/ghelgameshra/"><i class="fa-brands fa-chrome text-xl"></i>Kelola Toko</a>');
    link3.append('<a class="flex items-center gap-2 p-3 duration-300 hover:bg-gray-300 dark:hover:bg-main hover:rounded-md hover:cursor-pointer" href="https://github.com/ghelgameshra"><i class="fa-solid fa-pen-nib text-xl"></i>Desain</a>');

    const sidebarButton = $('#sidebarButton');
    const sidebarClose = $('#sidebarClose');
    const sidebarMenu = $('#sidebarMenu');
    const backdrop = $('#backdrop');
    sidebarButton.on('click', ()=>{
        backdrop.fadeIn(300);
        sidebarMenu.show(300);
        sidebarMenu.removeClass('hidden');
    });

    sidebarClose.on('click', ()=>{
        backdrop.hide(100);
        sidebarMenu.hide(300);
    });

    backdrop.on('click', ()=>{
        backdrop.fadeOut(300);
        sidebarMenu.hide(300);
    });

    const socialMenu = $('#socialMenu');
    $('#socialButton').on('click', ()=>{
        if(socialMenu.hasClass('hidden')){
            socialMenu.slideDown();
            $('#socialButton .fa-chevron-down').removeClass('rotate-0');
            $('#socialButton .fa-chevron-down').addClass('duration-500 rotate-180');
            socialMenu.removeClass('hidden');
        } else {
            socialMenu.slideUp();
            $('#socialButton .fa-chevron-down').removeClass('rotate-180');
            $('#socialButton .fa-chevron-down').addClass('rotate-0 duration-500');
            socialMenu.addClass('hidden');
        }
    });

    const portoMenu = $('#portoMenu');
    $('#portoButton').on('click', ()=>{
        if(portoMenu.hasClass('hidden')){
            portoMenu.slideDown();
            $('#portoButton .fa-chevron-down').removeClass('rotate-0');
            $('#portoButton .fa-chevron-down').addClass('duration-500 rotate-180');
            portoMenu.removeClass('hidden');
        } else {
            portoMenu.slideUp();
            $('#portoButton .fa-chevron-down').removeClass('rotate-180');
            $('#portoButton .fa-chevron-down').addClass('rotate-0 duration-500');
            portoMenu.addClass('hidden');
        }
    });

    if(sidebarMenu.hasClass('hidden') === false){
        $(document).on('keydown', function(event) {
            if (event.key == "Escape") {
                backdrop.hide(100);
                sidebarMenu.hide(300);
            }
        });
    }
});

// cek setting darkMode
let mode = localStorage.getItem('darkMode');
if(mode){
    $('#dark-mode-button').addClass('translate-x-4');
    $('html').addClass('dark');
}

// set darkMode
$('#darkMode').on('click', function(){
    let i = 1;
    console.log(i += 1);
    let mode = localStorage.getItem('darkMode');
    if(mode){
        $('#dark-mode-button').removeClass('translate-x-4');
        $('html').removeClass('dark');
        localStorage.removeItem('darkMode');

    } else {
        $('#dark-mode-button').addClass('translate-x-4');
        $('html').addClass('dark');
        localStorage.setItem('darkMode', true);
    }
});


