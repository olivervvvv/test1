document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('emailInput');
    const nameInput = document.getElementById('nameInput');
    const passwordInput = document.getElementById('passwordInput');
    const repeatPasswordInput = document.getElementById('repeatPasswordInput');
    const signupButton = document.getElementById('signupButton');

    // 尝试从localStorage中获取已保存的用户信息
    const storedUserData = JSON.parse(localStorage.getItem('userData')) || {};

    // 填充输入字段，如果存在已保存的用户信息
    emailInput.value = storedUserData.email || '';
    nameInput.value = storedUserData.name || '';

    signupButton.addEventListener('click', function () {
        // 获取用户输入的值
        const email = emailInput.value;
        const name = nameInput.value;
        const password = passwordInput.value;
        const repeatPassword = repeatPasswordInput.value;

        // 进行表单验证，例如检查是否所有字段都已填写
        if (!email || !name || !password || !repeatPassword) {
            alert('请填写所有字段！');
            return;
        }

        // 检查密码和重复密码是否匹配
        if (password !== repeatPassword) {
            alert('密码和重复密码不匹配！');
            return;
        }

        // 创建用户数据对象
        const userData = {
            email: email,
            name: name,
            password: password
        };

        // 将用户数据保存到localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // 在此处执行注册逻辑，例如将用户数据发送到服务器
        // 这里只是一个示例，您需要根据实际情况来实现注册逻辑
        alert('注册成功！');

        // 清除输入字段的值
        emailInput.value = '';
        nameInput.value = '';
        passwordInput.value = '';
        repeatPasswordInput.value = '';
    });
});
