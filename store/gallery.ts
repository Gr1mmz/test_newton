import {makeAutoObservable} from 'mobx';
import {GalleryItem} from '../config/types';

class Gallery {
  items: Array<GalleryItem> = [];
  filter: string = 'gallery';
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
    this.fetchItems();
  };

  getFilteredItems() {
    if (this.filter === 'favorites') {
      return this.items.filter(item => item.favorite);
    }
    return this.items;
  };

  setFilter(f: string) {
    this.filter = f;
    this.getFilteredItems();
  };

  setFavorite(item: GalleryItem) {
    item.favorite = item.favorite ? !item.favorite : true;
    this.getFilteredItems();
  };

  fetchItems() {
    fetch('https://picsum.photos/v2/list')
      .then(res => res.json())
      .then(data => {
        this.items = data;
        this.isLoading = false;
      });
  };
}

export default new Gallery();