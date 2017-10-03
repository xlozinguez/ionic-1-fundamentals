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
  puppies : Array<PuppyModel> = new Array<PuppyModel>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public puppiesService: PuppiesService
  ) {
  }

  ionViewWillEnter() {
    this.puppiesService.getPuppies()
    .subscribe(data => {
      this.puppies = data.puppies
    });
  }

  likePuppy(puppy: PuppyModel) {
    puppy.likes ++;
  }

}
