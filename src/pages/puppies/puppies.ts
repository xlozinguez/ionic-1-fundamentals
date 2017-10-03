import { PuppyModel } from '../../services/puppies.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PuppiesService } from '../../services/puppies.service';

/**
 * Generated class for the PuppiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-puppies',
  templateUrl: 'puppies.html',
})
export class PuppiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuppiesPage');
  }

}
