(function () {
    'use strict';
	
    var unic_id = Lampa.Storage.get('lampac_unic_id', '');
    if (!unic_id) {
      unic_id = Lampa.Utils.uid(8).toLowerCase();
      Lampa.Storage.set('lampac_unic_id', unic_id);
    }

    Lampa.Storage.set('torrserver_url','http://192.168.1.17:8090');
    Lampa.Storage.set('torrserver_auth','false');
    Lampa.Storage.set('torrserver_login',Lampa.Storage.get('account_email') || Lampa.Storage.get('lampac_unic_id', '') || 'ts');
    Lampa.Storage.set('torrserver_password','ts');
	
})();
