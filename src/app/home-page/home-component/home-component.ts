import { Component, OnInit } from '@angular/core';

interface SiteType {
  src: string;
  alt: string;
  title: string;
  redirect: string;
}

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  allSites: SiteType[] = [];

  ngOnInit(): void {
    const objSite1: SiteType = {
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/w_300,q_auto,f_auto/project-base-imgs/Shopee_etyupp.png',
      alt: 'alt-shopee-img',
      title: 'Shopee',
      redirect: 'https://project-angular-shoope-production.up.railway.app/buyer/login',
    };

    const objSite2: SiteType = {
      src: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1752149155/project-base-imgs/marisapng_qguzvc.png',
      alt: 'alt-marisa-img',
      title: 'Marisa',
      redirect: 'https://marisa-clone-frontend-production.up.railway.app/login',
    };

    this.allSites.push(objSite1, objSite2);
  }

  onClickRedirect(redirect: string) {
    window.open(redirect, '_blank');
  }
}
