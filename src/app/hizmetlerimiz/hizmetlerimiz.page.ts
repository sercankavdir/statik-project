import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hizmetlerimiz',
  templateUrl: './hizmetlerimiz.page.html',
  styleUrls: ['./hizmetlerimiz.page.scss'],
})
export class HizmetlerimizPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigateByUrl('/anasayfa')
  }

}
