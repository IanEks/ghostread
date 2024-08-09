// Fungsi untuk menunjukkan atau menyembunyikan password
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'

            // Icon change
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            // Change to password
            input.type = 'password'

            // Icon change
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('login-pass','login-eye')

// Event Listener untuk form login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;

    // Ambil kredensial yang tersimpan di Local Storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail === null || storedPassword === null) {
        alert('Tolong daftar terlebih dahulu.');
        window.location.href = "reg.html";
    } else if (email === storedEmail && password === storedPassword) {
        const userFirstName = email.split('@')[0];
        localStorage.setItem('userFirstName', userFirstName);

        console.log("User First Name Stored: ", userFirstName); // Debug log

        alert('Selamat datang di Ghostread!');
        window.location.href = "index.html";
    } else {
        alert('Email atau password salah.');
    }
});