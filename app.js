$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel
    // Update sign-in button text if user is logged in
    function updateButtons() {
        const userFirstName = localStorage.getItem('userFirstName');
        const signInBtn = $('#sign-in-btn');
        const logoutBtn = $('#logout-btn');

        if (userFirstName) {
            // Ubah teks tombol "Sign in" menjadi nama pengguna
            signInBtn.html(`<span>${userFirstName}</span>`);
            signInBtn.attr('href', '#'); // Atur href sesuai kebutuhan
            signInBtn.addClass('disabled'); // Nonaktifkan interaksi dengan tombol "Sign in"

            // Tampilkan tombol "Log out"
            logoutBtn.show();
        } else {
            // Kembalikan teks tombol "Sign in"
            signInBtn.html(`<span>Sign in</span>`);
            signInBtn.attr('href', 'login.html'); // Arahkan kembali ke halaman login
            signInBtn.removeClass('disabled'); // Aktifkan interaksi dengan tombol "Sign in"

            // Sembunyikan tombol "Log out"
            logoutBtn.hide();
        }
    }

    // Panggil fungsi saat halaman dimuat
    updateButtons();

    // Event listener untuk tombol "Log out"
    $('#logout-btn').click(() => {
        // Hapus data dari localStorage
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('email');
        localStorage.removeItem('password');

        // Hapus cache jika diperlukan
        if ('caches' in window) {
            caches.keys().then(keys => {
                keys.forEach(key => {
                    caches.delete(key);
                });
            });
        }

        // Arahkan pengguna ke halaman login
        window.location.href = 'login.html';
    });

    // Menyembunyikan dropdown menu jika klik di luar
    $(document).click((event) => {
        if (!$(event.target).closest('#sign-in-btn').length) {
            $('#dropdown-menu').hide();
        }
    });

    $('#exit-btn').click(() => {
        window.location.href = 'index.html'; // Ganti dengan halaman yang sesuai
    });


    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })


})

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-menu a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.hash !== '') {
                event.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});