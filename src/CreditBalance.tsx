/* eslint-disable react/jsx-no-bind */
import React from 'react'
import {Stack, Text, Badge, Inline} from '@sanity/ui'
import {AccountResponse} from './types'

function findCreditLevelSeverity(creditLevel: number) {
  if (creditLevel < 5) {
    return 'critical'
  } else if (creditLevel < 10) {
    return 'caution'
  }
  return 'positive'
}

export default function CreditBalance({account}: {account: AccountResponse | undefined}) {
  return (
    <Stack space={4}>
      <Text weight="bold" size={4}>
        Remaining credits
      </Text>
      <Text>
        The price of each credits varies based on the image uploaded. Remove.bg also gives you 50
        preview image transformations each month. A preview is a low-res versions of the transformed
        image, but is fine for some use cases.
      </Text>
      <Inline space={[3, 3, 4]}>
        <Text>Previews left:</Text>
        <Badge tone={findCreditLevelSeverity(account?.api.free_calls || 0)} padding={2}>
          <Text weight="bold">{account?.api.free_calls}</Text>
        </Badge>
        <Text>Credit left:</Text>
        <Badge tone={findCreditLevelSeverity(account?.credits.total || 0)} padding={2}>
          <Text weight="bold">{account?.credits.total}</Text>
        </Badge>
      </Inline>
      <a href="https://remove.bg/pricing">Purchase more</a>
    </Stack>
  )
}
