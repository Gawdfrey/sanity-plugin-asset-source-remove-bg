import React from 'react'
import {AssetSource, AssetSourceComponentProps, ConfigContext, createPlugin, Role} from 'sanity'
import Icon from './Icon'
import RemoveBg from './RemoveBg'
import {RemoveBgConfig} from './types'

function hasRole(
  currentUser: ConfigContext['currentUser'],
  allowedUserRoles: string[] | undefined
) {
  if (!allowedUserRoles) {
    return true
  }
  return currentUser.roles.some((role: Role) => allowedUserRoles.includes(role.name))
}

export const removeBgAssetSourcePlugin = createPlugin<RemoveBgConfig>((config) => {
  return {
    name: 'sanity-plugin-asset-source-remove-bg',
    form: {
      image: {
        assetSources: (prev: AssetSource[], {currentUser}: ConfigContext) => {
          if (hasRole(currentUser, config.allowedUserRoles)) {
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
          }
          return prev
        },
      },
    },
  }
})
