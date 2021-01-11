import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetMenusAction, ToogleSideMenuAction } from './actions/side-menu.actions';
import { MenuItem } from './models/menu-item.model';

export class SideMenuStateModel {
  isMenuOpened: boolean;
  menus: MenuItem[];
}

const INITIAL_STATE: SideMenuStateModel  = {
  isMenuOpened: false,
  menus: []
};

@State<SideMenuStateModel>({
  name: 'sideMenu',
  defaults: INITIAL_STATE
})
@Injectable()
export class SideMenuState {

  // constructor(private _router: Router){}

  @Selector()
  static getCurrentMenu(state: SideMenuStateModel): MenuItem | undefined{
    console.log("entrou na rota....");
    return state.menus.find(m => m.route == 'dashboard');
  }

  @Action(ToogleSideMenuAction)
  toogleMenu({ getState, setState }: StateContext<SideMenuStateModel>) {
    setState({...getState(),  isMenuOpened: (!getState().isMenuOpened)});
  }

  //TODO Mover para receber esta informação via Auth Token
  @Action(GetMenusAction)
  getAllMenus({ getState, setState }: StateContext<SideMenuStateModel>) {
    const menuList = [
      new MenuItem('Dashboard', 'dashboard', 'Concedidos Dashboard', 'dashboard'),
      new MenuItem('Gestão Conciliação', 'conciliations', 'Consulta Conciliação', 'assignment'),
      new MenuItem('Gestão Concessão', 'concessions', 'Gestão Concessão', 'assignment_turned_in'),
    ];
    setState({...getState(),  menus: menuList});
  }
}
