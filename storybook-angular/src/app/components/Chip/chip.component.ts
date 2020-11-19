import { Component, OnInit, HostBinding, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sd-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChipComponent implements OnInit {

  @HostBinding('class.chip') sdChip = true;

  @Input()
  label = 'Chip';

  ngOnInit(): void {}
}
