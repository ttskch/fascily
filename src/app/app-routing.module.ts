import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { BoardResolverService } from '../resolvers/board-resolver.service';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'board/:boardId', children: [
          { path: '', component: BoardComponent, resolve: { board: BoardResolverService }, pathMatch: 'full' },
          { path: 'topic/:topicId', component: BoardComponent, resolve: { board: BoardResolverService } },
        ] },
      // { path: '**', component: PageNotFoundComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
