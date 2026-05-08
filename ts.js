(function () {
    'use strict';

    // 1. Инициализация unic_id
    let unicId = Lampa.Storage.get('lampac_unic_id', '');

    if (!unicId) {
        // Если ID не найден, генерируем новый и сохраняем
        unicId = Lampa.Utils.uid(8).toLowerCase();
        Lampa.Storage.set('lampac_unic_id', unicId);
    }

    // 2. Установка конфигурационных параметров
    Lampa.Storage.set('torrserver_url', 'http://192.168.1.17:8090');
    Lampa.Storage.set('torrserver_auth', 'false');

    // 3. Установка логина (используем явную цепочку для ясности)
    const accountEmail = Lampa.Storage.get('account_email');
    const existingUnicId = Lampa.Storage.get('lampac_unic_id', '');
    
    const login = accountEmail || existingUnicId || 'ts';
    Lampa.Storage.set('torrserver_login', login);
    
    // 4. Установка пароля
    Lampa.Storage.set('torrserver_password', 'ts');

})();
