import React from 'react'
import {RemoveBgConfig} from '.'
import {AssetSourceComponentProps} from 'sanity'
import {ThemeProvider, studioTheme, Dialog, Card} from '@sanity/ui'

type RemoveBgProps = AssetSourceComponentProps & RemoveBgConfig

export default function RemoveBg({apiKey, onSelect, onClose}: RemoveBgProps) {
  return (
    <ThemeProvider theme={studioTheme}>
      <Dialog
        width={200}
        header={'Remove Background'}
        onClose={onClose}
        id={'remove-bg-dialog'}
        title={'Remove Background'}
      >
        <Card />
      </Dialog>
    </ThemeProvider>
  )
}
