window.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('rblxiframe');
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    const understandBtn = document.getElementById('understandBtn');

    iframe.addEventListener('load', () => {
        modalOverlay.classList.add('show');
        modal.classList.add('show');

        setTimeout(() => {
            understandBtn.disabled = false;
            understandBtn.classList.add('enabled');
        }, 3000);
    });

    understandBtn.addEventListener('click', () => {
        if (!understandBtn.disabled) {
            modalOverlay.classList.remove('show');
            modal.classList.remove('show');
        }
    });
});
