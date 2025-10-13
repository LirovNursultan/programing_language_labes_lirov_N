const users = [
    { 
        login: "user1", 
        password: "pass1", 
        name: "Алексей" 
    },
    { 
        login: "user2", 
        password: "pass2", 
        name: "Марина" 
    },
    { 
        login: "user3", 
        password: "pass3", 
        name: "Игорь" 
    },
    { 
        login: "user4", 
        password: "pass4", 
        name: "Екатерина" 
    },
    { 
        login: "Nurs", 
        password: "03022006", 
        name: "Нурсултан" 
    },
    { 
        login: "admin", 
        password: "admin123", 
        name: "Администратор" 
    },
    { 
        login: "guest", 
        password: "guest123", 
        name: "Гость" 
    }
];

const authForm = document.getElementById('authForm');
const messageDiv = document.getElementById('message');

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.login === login && u.password === password);

    if (user) {
        messageDiv.innerHTML = `Добро пожаловать, ${user.name}! Авторизация успешна.`;
        messageDiv.className = 'message text-success';
    } else {
        messageDiv.innerHTML = 'Ошибка: неверный логин или пароль.';
        messageDiv.className = 'message text-danger';
    }

    
    authForm.reset();
});