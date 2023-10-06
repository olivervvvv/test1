<script src="mainjs/_sign.js"></script>

document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('floatingInput');
    const passwordInput = document.getElementById('passwordinput');
    const keepLoginCheckbox = document.querySelector('input[type="checkbox"]');
    const loginButton = document.querySelector('.login input[type="button"]');
    const message = document.getElementById('message');

    // 检查本地存储中是否已保存登录信息
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const keepLoggedIn = localStorage.getItem('keepLoggedIn');

    if (storedEmail && storedPassword && keepLoggedIn === 'true') {
        // 如果已保存登录信息并且选择了“保持登录”复选框，填充输入字段
        emailInput.value = storedEmail;
        passwordInput.value = storedPassword;
        keepLoginCheckbox.checked = true;
    }

    // 处理登录按钮点击事件
    loginButton.addEventListener('click', function () {
        const email = emailInput.value;
        const password = passwordInput.value;
        const keepLoggedIn = keepLoginCheckbox.checked;

        // 检查用户名和密码是否匹配（这里可以替换为您的验证逻辑）
        if (email === 'user@example.com' && password === 'password') {
            // 登录成功，根据用户选择决定是否在本地存储中保存登录信息
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('keepLoggedIn', keepLoggedIn.toString());

            // 跳转到受保护的页面或执行其他操作
            window.location.href = 'dashboard.html';
        } else {
            // 登录失败，显示错误消息
            message.textContent = '登入失敗，請檢查郵件地址和密碼。';
        }
    });
});
