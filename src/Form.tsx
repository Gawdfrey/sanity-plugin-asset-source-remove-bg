/* eslint-disable react/jsx-no-bind */
import React, {useState} from 'react'
import {Button, Inline, Label, Radio, Stack} from '@sanity/ui'
import {FormProps, ImageFormat, ImageSize} from './types'

const imageFormats = [
  {value: ImageFormat.AUTO, label: 'Auto', name: 'auto'},
  {value: ImageFormat.PNG, label: 'PNG', name: 'png'},
  {value: ImageFormat.JPG, label: 'JPG', name: 'jpg'},
  {value: ImageFormat.ZIP, label: 'ZIP', name: 'zip'},
]

const imageSizes = [
  {value: ImageSize.PREVIEW, label: 'Preview', name: 'preview'},
  {value: ImageSize.AUTO, label: 'Auto', name: 'auto'},
  {value: ImageSize.FULL, label: 'Full', name: 'full'},
]

export default function Form({onSubmit, image, discardImage, useImage}: FormProps) {
  const [format, setFormat] = useState<ImageFormat>(ImageFormat.PNG)
  const [size, setSize] = useState<ImageSize>(ImageSize.PREVIEW)

  function handleSubmit() {
    onSubmit({format, size})
  }

  return (
    <form>
      <Stack space={5}>
        {image?.data?.result_b64 ? (
          <img
            width={image.data.foreground_width}
            height={image.data.foreground_height}
            src={`data:image/png;base64,${image.data?.result_b64}`}
          />
        ) : (
          <>
            <Stack space={4}>
              <Label size={3}>Image format</Label>
              <Inline space={5}>
                {imageFormats.map((item) => (
                  <Inline space={2} key={item.name}>
                    <Label size={2}>{item.label}</Label>
                    <Radio
                      checked={format === item.value}
                      name={item.name}
                      value={item.value}
                      onChange={() => setFormat(item.value)}
                    />
                  </Inline>
                ))}
              </Inline>
            </Stack>
            <Stack space={4}>
              <Label size={3}>Image size</Label>
              <Inline space={5}>
                {imageSizes.map((item) => (
                  <Inline space={2} key={item.name}>
                    <Label size={2} htmlFor={item.name}>
                      {item.label}
                    </Label>
                    <Radio
                      checked={size === item.value}
                      name={item.name}
                      value={item.value}
                      onChange={() => setSize(item.value)}
                    />
                  </Inline>
                ))}
              </Inline>
            </Stack>
          </>
        )}

        {image?.data?.result_b64 ? (
          <Inline space={3}>
            <Button onClick={useImage} tone="primary" text="Use" padding={[3, 3, 4]} />
            <Button onClick={discardImage} tone="critical" text="Discard" padding={[3, 3, 4]} />
          </Inline>
        ) : (
          <div>
            <Button
              tone="primary"
              type="submit"
              onClick={handleSubmit}
              text="Convert"
              padding={[3, 3, 4]}
            />
          </div>
        )}
      </Stack>
    </form>
  )
}
