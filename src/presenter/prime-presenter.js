import { render } from '../render';
import FilterView from '../view/filter-view';
import SortView from '../view/sort-view';
import ListPointsView from '../view/list-points-view/list-points-view';
import EditPointView from '../view/edit-point-view/edit-point-view';
import PointView from '../view/point-view/point-view';

export default class PrimePresenter {
  listPointsContainer = new ListPointsView();

  constructor() {
    this.filtersContainer = document.querySelector('.trip-controls__filters');
    this.tripEventsContainer = document.querySelector('.trip-events');

  }

  init() {

    render(new FilterView(), this.filtersContainer);
    render(new SortView(), this.tripEventsContainer);
    render(this.listPointsContainer, this.tripEventsContainer);
    render(new EditPointView(), this.listPointsContainer.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.listPointsContainer.getElement());
    }

  }
}