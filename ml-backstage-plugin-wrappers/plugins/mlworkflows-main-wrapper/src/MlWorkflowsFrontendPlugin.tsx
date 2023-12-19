import { MlworkflowsMainPage } from '@oawofolu/plugin-mlworkflows-main';
import { AppPluginInterface, AppRouteSurface, SidebarItemSurface } from '@vmware-tanzu/core-frontend';
import { SurfaceStoreInterface } from '@vmware-tanzu/core-common';
import { SidebarItem } from '@backstage/core-components';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import React from 'react';
import { Route } from 'react-router';

export const MLWorkflowsPlugin: AppPluginInterface =
  () => (context: SurfaceStoreInterface) => {
    context.applyWithDependency(
      AppRouteSurface,
      SidebarItemSurface,
      (_appRouteSurface, sidebarItemSurface) => {
        _appRouteSurface.add(
            <Route path="/mlworkflows" element={<MlworkflowsMainPage />} />
          )
          sidebarItemSurface.addMainItem(
            <SidebarItem icon={InsertChartIcon} to='mlworkflows' text='ML Workflows' />
          );
        }
      );
    }