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

showHiddenPass('register-pass','register-eye')

// Event Listener untuk form registrasi
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-pass').value;

    // Simpan kredensial di Local Storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registration successful! You can now login.');
    window.location.href = "login.html"; // Ganti dengan halaman login setelah registrasi
});
