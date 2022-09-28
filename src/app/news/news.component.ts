import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  id?: string;

  navTo(id: number): void {
    this.router.navigate(['../', id], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? '';
    });

    this.route.queryParamMap.subscribe((params) => {
      console.log(params);
    });
  }
}
