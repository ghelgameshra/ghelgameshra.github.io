$('#loginForm').submit(async function(e){
    e.preventDefault();
    
    const auth = await getAuth();
    const username = $('#username').val();
    const password = $('#password').val();

    if(username === atob(auth.username) && btoa(password) === auth.password){
        window.location.href = "/dashboard.html";
    }
});

const getAuth = async () => {
    try {
        const data = "./../data/user.json";
        const response = await $.get(data);

        return response;
    } catch (error) {
        throw error;
    }
}