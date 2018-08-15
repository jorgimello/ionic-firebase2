import { ToastService } from './../../services/toast/toast.service';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  itemName: string;
  item: Item;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopping: ShoppingListService,
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
    this.itemName = this.item.name;
  }

  saveItem(item: Item) {
    this.shopping.editItem(item)
      .then(() => {
        this.toast.show(`${item.name} saved!`);
        this.navCtrl.setRoot('HomePage');
      });
  }

  deleteItem(item: Item) {
    this.shopping.removeItem(item)
      .then(() => {
        this.toast.show(`${item.name} removed!`);
        this.navCtrl.setRoot('HomePage');
      });
  }

}