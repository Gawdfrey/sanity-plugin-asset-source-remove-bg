import {Button, Card, Stack, Text} from '@sanity/ui'
import React from 'react'
import {Error} from './types'

export default function Errors({errors, onClick}: {errors: Error[]; onClick: () => void}) {
  return (
    <Stack space={4}>
      {errors?.map((error) => (
        <Card key={error.title} padding={4} tone="critical">
          <Stack space={4}>
            <Text size={3} weight="bold">
              {error.title}
            </Text>
            {error?.detail && <Text size={2}>{error.detail}</Text>}
          </Stack>
        </Card>
      ))}
      <div>
        <Button tone="primary" text="Try again" onClick={onClick} />
      </div>
    </Stack>
  )
}
