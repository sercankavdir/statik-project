import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  pages = [
    {
      title: 'Anasayfa',
      url: '/anasayfa',
      icon: 'home'
    },
    {
      title: 'Kurumsal',
      children: [
        {
          title: 'Hakkımızda',
          url: '/kurumsal/hakkimizda'
        },
        {
          title: 'Misyonumuz / Vizyonumuz',
          url: '/kurumsal/misyon-vizyon'
        },
        {
          title: 'Banka Hesap Bilgileri',
          url: '/kurumsal/banka-hesap'
        },
        {
          title: 'Ekibimiz',
          url: '/kurumsal/ekibimiz'
        },
        {
          title: 'İnsan Kaynaklari',
          url: '/kurumsal/insankaynaklari'
        },
        {
          title: 'Sosyal Medya',
          url: '/kurumsal/sosyal-medya'
        }
      ]
    },
    {
      title: 'Hizmetlerimiz',
      children: [
        {
          title: 'Kurumsal Web Sitesi',
          url: '/hizmetlerimiz/kurumsal-web'
        },
        {
          title: 'E-ticaret Sistemleri',
          url: '/hizmetlerimiz/e-ticaret'
        },
        {
          title: 'Özel Yazılım Çözümleri',
          url: '/hizmetlerimiz/ozel-yazilim'
        },
        {
          title: 'İnternet Reklamcılığı',
          url: '/hizmetlerimiz/internet-reklam'
        },
        {
          title: 'Sosyal Medya Yöneticiliği',
          url: '/hizmetlerimiz/sosyal-medya-yonetimi'
        },
        {
          title: 'Mobil Uygulama',
          url: '/hizmetlerimiz/mobil-uygulama'
        },
        {
          title: 'Domain / Hosting Hizmetleri',
          url: '/hizmetlerimiz/domain-hosting'
        },
        {
          title: 'Kurumsal Kimlik Çalışmaları',
          url: '/hizmetlerimiz/kurumsal-kimlik'
        },
        {
          title: 'Tasarım',
          url: '/hizmetlerimiz/tasarim'
        }
      ]
    },
    {
      title: 'Referanslarımız',
      children: [
        {
          title: 'Neler Yaptık',
          url: '/referanslarimiz/neler-yaptik'
        },
        {
          title: 'Kimlerle Çalıştık',
          url: '/referanslarimiz/kimlerle-calistik'
        }
      ]
    }

  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
