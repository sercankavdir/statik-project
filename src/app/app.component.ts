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
          url: '/hakkimizda'
        },
        {
          title: 'Misyonumuz / Vizyonumuz',
          url: '/misyon-vizyon'
        },
        {
          title: 'Banka Hesap Bilgileri',
          url: '/banka-hesap'
        },
        {
          title: 'Ekibimiz',
          url: '/ekibimiz'
        },
        {
          title: 'İnsan Kaynaklari',
          url: '/insankaynaklari'
        },
        {
          title: 'Sosyal Medya',
          url: '/sosyal-medya'
        }
      ]
    },
    {
      title: 'Hizmetlerimiz',
      children: [
        {
          title: 'Kurumsal Web Sitesi',
          url: '/kurumsal-web'
        },
        {
          title: 'E-ticaret Sistemleri',
          url: '/e-ticaret'
        },
        {
          title: 'Özel Yazılım Çözümleri',
          url: '/ozel-yazilim'
        },
        {
          title: 'İnternet Reklamcılığı',
          url: '/internet-reklam'
        },
        {
          title: 'Sosyal Medya Yöneticiliği',
          url: '/sosyal-medya-yonetimi'
        },
        {
          title: 'Mobil Uygulama',
          url: '/mobil-uygulama'
        },
        {
          title: 'Domain / Hosting Hizmetleri',
          url: '/domain-hosting'
        },
        {
          title: 'Kurumsal Kimlik Çalışmaları',
          url: '/kurumsal-kimlik'
        },
        {
          title: 'Tasarım',
          url: '/tasarim'
        }
      ]
    },
    {
      title: 'Referanslarımız',
      children: [
        {
          title: 'Neler Yaptık',
          url: '/neler-yaptik'
        },
        {
          title: 'Kimlerle Çalıştık',
          url: '/kimlerle-calistik'
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
