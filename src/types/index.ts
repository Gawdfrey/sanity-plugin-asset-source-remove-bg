import {AssetSourceComponentProps} from 'sanity'

export interface RemoveBgConfig {
  apiKey: string
  allowedUserRoles?: string[]
}

export type RemoveBgProps = AssetSourceComponentProps & RemoveBgConfig

export enum ImageFormat {
  PNG = 'png',
  JPG = 'jpg',
  AUTO = 'auto',
}

export enum ImageSize {
  PREVIEW = 'preview',
  FULL = 'full',
  AUTO = 'auto',
}
export interface RemoveBgPayload {
  image_url?: string
  size?: ImageSize
  format?: ImageFormat
  bg_color?: string
  bg_image_url?: string
}
export type Error = {
  title: string
  code?: string
  detail?: string
}
export interface AccountResponse {
  credits: {
    total: number
    subscription: number
    payg: number
    enterprise: number
  }
  api: {
    free_calls: number
  }
  errors?: Error[]
}

export interface RemoveBgResponse {
  data?: {
    result_b64: string
    foreground_top: number
    foreground_left: number
    foreground_width: number
    foreground_height: number
  }
  errors?: Error[]
}

export interface FormProps {
  onSubmit: (payload: RemoveBgPayload) => void
  image: RemoveBgResponse | undefined
  useImage: () => void
  discardImage: () => void
}
