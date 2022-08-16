document.getElementById('submit-btn').addEventListener('click', function()
{
    const useremail = document.getElementById('user-email');
    const email = useremail.value;
    const userpassword = document.getElementById('user-password');
    const password = userpassword.value;
    if (email == 'valid@gmail.com' && password == '12hydf')
    {
        window.location.href = 'bank.html';
    }
    else 
    {
        alert('invalid uernme n pwor');
    }
})