// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: '¿Estas lista para la sorpresa?',
        icon: 'question',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Siiiiiii',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});
