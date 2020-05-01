import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styles: [
    `
      ngb-progressbar {
        margin-top: 5rem;
      }

      .full-width {
        position: relative;
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        background: gainsboro;
        box-shadow: 0 0 10px 0 #8c8b8b inset;
      }

      hr.divider-elegant {
        border: 0;
        height: 1px;
        background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
        background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
        background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
        background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
      }

      img.resize {
        max-width: 90%;
        max-height: 90%;
      }

      a.anchor {
        display: block;
        position: relative;
        top: -150px;
        visibility: hidden;
      }
    `
  ]
})
export class ComponentsComponent implements OnInit {
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: { year: number; month: number };
  model: NgbDateStruct;
  constructor(private renderer: Renderer2) {}
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
      input_group[i].children[0].addEventListener('focus', function() {
        input_group[i].classList.add('input-group-focus');
      });
      input_group[i].children[0].addEventListener('blur', function() {
        input_group[i].classList.remove('input-group-focus');
      });
    }
  }
}
