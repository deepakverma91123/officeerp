import { Component, OnInit , Renderer2} from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public apply = false;
  public sections = 1;
  public scroll;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
    })
  }
}
