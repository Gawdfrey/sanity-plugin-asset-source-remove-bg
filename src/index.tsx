import React from 'react'
import {AssetSource, AssetSourceComponentProps, ConfigContext, createPlugin, Role} from 'sanity'
import Icon from './Icon'
import RemoveBg from './RemoveBg'
import {RemoveBgConfig} from './types'

function hasRole(currentUser: ConfigContext['currentUser'], allowedUserRoles: string[]) {
  const currentUserRoles = currentUser?.roles
  if (!currentUserRoles) {
    return false
  }
  return currentUserRoles.some((role: Role) => allowedUserRoles.includes(role.name))
}

export const removeBgAssetSourcePlugin = createPlugin<RemoveBgConfig>((config) => {
  return {
    name: 'sanity-plugin-asset-source-remove-bg',
    form: {
      image: {
        assetSources: (prev: AssetSource[], assetSourceProps: ConfigContext) => {
          const {currentUser} = assetSourceProps
          if (config?.allowedUserRoles && hasRole(currentUser, config.allowedUserRoles)) {
            return prev
          }
          return [
            ...prev,
            {
              name: 'remove-bg',
              title: 'Remove.bg',
              component: function component(props: AssetSourceComponentProps) {
                if (props.selectedAssets.length === 0) {
                  return null
                }
                return <RemoveBg {...props} {...config} />
              },
              icon: Icon,
            },
          ]
        },
      },
    },
  }
})
