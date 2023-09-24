let eyeButton = $('#showPassword');
let password = $('#password');
eyeButton.on('click', function(){
    if( password.attr("type") == 'password' ){
        password.attr("type", "text");
        $('#eyeIcon').removeClass('fa-regular fa-eye-slash');
        $('#eyeIcon').addClass('fa-regular fa-eye');
    } else {
        password.attr("type", "password");
        $('#eyeIcon').removeClass('fa-regular fa-eye');
        $('#eyeIcon').addClass('fa-regular fa-eye-slash');
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

$('#loginButton').on('click', () => {
    let nik = '2015451256';
    let password = '1234';
    if(nik === '2015451256' && password === '1234'){
        window.location.href="/public/home.html";
    } else {
        alert('Login gagal');
    }
});

// dropdown izin
let izinDropdown = $('#inputDropdown');
$('#inputDropdownButton').on('click', ()=>{
    if( izinDropdown.hasClass('hidden') ){
        izinDropdown.removeClass('hidden');
    } else {
        izinDropdown.addClass('hidden');
    }
});

// dropdown pendidikan
let pendidikanDropdown = $('#pendidikanDropdown');
$('#pendidikanDropdownButton').on('click', ()=>{
    if( pendidikanDropdown.hasClass('hidden') ){
        pendidikanDropdown.removeClass('hidden');
    } else {
        pendidikanDropdown.addClass('hidden');
    }
});

let sidebarMenu = $('#sidebarMenu');
let bg = $('#backdrop');
$('#sidebarButton').on('click', ()=>{
    if( sidebarMenu.hasClass('hidden') ){
        sidebarMenu.removeClass('hidden');
        bg.removeClass('hidden');
    }

    $('#closeSidebarButton').on('click', ()=>{
        sidebarMenu.addClass('hidden');
        pendidikanDropdown.addClass('hidden');
        izinDropdown.addClass('hidden');
        bg.addClass('hidden');
    });
    
});

$('#backdrop').on('click', ()=>{
    sidebarMenu.addClass('hidden');
    pendidikanDropdown.addClass('hidden');
    izinDropdown.addClass('hidden');
    bg.addClass('hidden');
});