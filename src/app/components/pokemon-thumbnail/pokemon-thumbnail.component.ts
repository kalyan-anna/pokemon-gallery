import { Component } from '@angular/core';
import {Input} from '@angular/core';
import {Pokemon} from '../../';

@Component({
  selector: 'pokemon-thumbnail',
  templateUrl: './pokemon-thumbnail.component.html',
  styleUrls: ['./pokemon-thumbnail.component.scss']
})
export class PokemonThumbnailComponent {
  @Input() pokemon: Pokemon;
}