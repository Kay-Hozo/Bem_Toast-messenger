function toast({
    title = '',
    message = '',
    type = 'success',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    const icons = {
        success: 'fa-check-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-circle',
        error: 'fa-exclamation-circle'
    };
    const icon = icons[type];

    if (main) {
        const toast = document.createElement('div');
        const delay = (duration / 1000).toFixed(2);
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);
        toast.onclick = function(e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                <div class = "toast__icon" >
                    <i class = "fas ${icon}" ></i>
                </div >
                <div class = "toast__body">
                    <h3 class = "toast__title">${title}</h3> 
                    <p class = "toast__msg">${message}</p>
                </div>
                <div class = "toast__close">
                    <i class = "fas fa-times"></i>
                </div>
        `;
        main.appendChild(toast);
    }
}

function ShowSuccess() {
    toast({
        title: "Thành công!",
        message: "Bạn đã đăng ký thành công tài khoản.",
        type: "success",
        duration: 3000
    });
}

function ShowInfo() {
    toast({
        title: "Thông tin!",
        message: "Bạn cần cung cấp thêm thông tin.",
        type: "info",
        duration: 3000
    });
}

function ShowWarn() {
    toast({
        title: "Cảnh báo!",
        message: "Cảnh báo, có tấn công.",
        type: "warning",
        duration: 3000
    });
}

function ShowError() {
    toast({
        title: "Lỗi!",
        message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
        type: "error",
        duration: 3000
    });
}