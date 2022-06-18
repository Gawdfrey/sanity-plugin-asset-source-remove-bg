import React from 'react'
import {AssetSourceComponentProps, createPlugin} from 'sanity'
import Icon from './Icon'
import RemoveBg from './RemoveBg'

export interface RemoveBgConfig {
  apiKey: string
}

export const removeBg = createPlugin<RemoveBgConfig>((config) => {
  return {
    name: 'sanity-plugin-remove-bg-converter',
    form: {
      image: {
        assetSources: (prev: any) => {
          return [
            ...prev,
            {
              name: 'remove-bg',
              title: 'Remove.bg',
              component: function component(props: AssetSourceComponentProps) {
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
